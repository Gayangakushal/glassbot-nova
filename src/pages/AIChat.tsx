
import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// OpenAI integration
import OpenAI from "openai";

// Initialize the OpenAI client with OpenRouter configuration
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
  defaultHeaders: {
    "HTTP-Referer": window.location.origin,
    "X-Title": "Gayanga Tech.AI",
  },
  dangerouslyAllowBrowser: true, // Add this to allow browser usage
});

const AIChat = () => {
  const [userMessage, setUserMessage] = useState("");
  const [conversation, setConversation] = useState<Array<{ role: string; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    // Add user message to conversation
    const newUserMessage = { role: "user", content: userMessage };
    setConversation([...conversation, newUserMessage]);
    setUserMessage("");
    setIsLoading(true);

    try {
      // Send message to OpenAI/OpenRouter
      const completion = await openai.chat.completions.create({
        model: "deepseek/deepseek-r1:free",
        messages: [...conversation, newUserMessage],
      });

      // Add AI response to conversation
      if (completion.choices[0].message) {
        setConversation((prev) => [
          ...prev,
          { 
            role: completion.choices[0].message.role || "assistant", 
            content: completion.choices[0].message.content || "No response" 
          },
        ]);
      }
    } catch (error) {
      console.error("Error calling AI API:", error);
      toast({
        title: "Error",
        description: "Failed to get a response from the AI. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-24 relative">
        <div className="absolute inset-0 bg-hero-gradient -z-10 opacity-50"></div>
        
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up text-shadow">
              Chat with <span className="text-gradient">Gayanga</span> AI
            </h1>
            
            <p className="text-muted-foreground mb-8 animation-delay-200 animate-slide-up">
              Experience our AI assistant powered by advanced language models. Ask anything and get instant, intelligent responses.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto glass p-6 rounded-2xl mb-6 min-h-[400px] max-h-[60vh] overflow-y-auto">
            {conversation.length === 0 ? (
              <div className="text-center text-muted-foreground py-12">
                <p>Start a conversation with our AI assistant...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {conversation.map((message, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg ${
                      message.role === "user" 
                        ? "bg-primary/10 ml-8" 
                        : "bg-secondary/10 mr-8"
                    }`}
                  >
                    <div className="font-medium mb-1">
                      {message.role === "user" ? "You" : "Gayanga AI"}
                    </div>
                    <div className="text-muted-foreground whitespace-pre-wrap">
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="p-4 rounded-lg bg-secondary/10 mr-8 animate-pulse">
                    <div className="font-medium mb-1">Gayanga AI</div>
                    <div className="text-muted-foreground">Thinking...</div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-4 pr-12 rounded-full bg-background/80 backdrop-blur-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              disabled={isLoading || !userMessage.trim()}
            >
              <Send size={18} />
            </Button>
          </form>
        </Container>
      </div>
      
      <Footer />
    </main>
  );
};

export default AIChat;
