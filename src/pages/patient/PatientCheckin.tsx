import { useState } from "react";
import { Send, Bot, User } from "lucide-react";

interface Message {
  role: "ai" | "user";
  content: string;
}

const initialMessages: Message[] = [
  { role: "ai", content: "Good morning, Sarah! 👋 How are you feeling today? Let's start your daily health check-in." },
];

const quickReplies = [
  "I feel great today!",
  "I have a mild headache",
  "I'm feeling tired",
  "I have some pain",
];

export default function PatientCheckin() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponses: Record<string, string> = {
        "I feel great today!": "That's wonderful to hear! 🎉 Any changes in sleep quality, diet, or physical activity since yesterday?",
        "I have a mild headache": "I'm sorry to hear that. Can you describe the headache? Is it throbbing, dull, or sharp? When did it start?",
        "I'm feeling tired": "Let's look into that. How many hours did you sleep last night? Have you been staying hydrated?",
        "I have some pain": "I'd like to help. Can you tell me where the pain is located and rate it from 1-10?",
      };
      const aiMsg: Message = {
        role: "ai",
        content: aiResponses[text] || "Thank you for sharing. Could you tell me more about how you're feeling? Any specific symptoms or changes you've noticed?",
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="animate-fade-in flex h-[calc(100vh-4rem)] flex-col">
      <div className="mb-6">
        <h1 className="text-foreground">Daily Check-in</h1>
        <p className="mt-1 text-body text-muted-foreground">Chat with your AI health partner</p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-auto rounded-xl bg-card p-6 shadow-card">
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                msg.role === "ai" ? "bg-secondary" : "bg-primary"
              }`}>
                {msg.role === "ai" ? (
                  <Bot className="h-4 w-4 text-secondary-foreground" />
                ) : (
                  <User className="h-4 w-4 text-primary-foreground" />
                )}
              </div>
              <div className={`max-w-[70%] rounded-2xl px-4 py-3 text-body ${
                msg.role === "ai"
                  ? "bg-muted text-foreground"
                  : "bg-primary text-primary-foreground"
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                <Bot className="h-4 w-4 text-secondary-foreground" />
              </div>
              <div className="rounded-2xl bg-muted px-4 py-3">
                <div className="flex gap-1">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground" style={{ animationDelay: "0.2s" }} />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Replies */}
      <div className="mt-4 flex flex-wrap gap-2">
        {quickReplies.map((reply) => (
          <button
            key={reply}
            onClick={() => sendMessage(reply)}
            className="rounded-full border border-primary bg-transparent px-4 py-2 text-small font-medium text-primary transition-colors hover:bg-primary/5"
          >
            {reply}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="mt-3 flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          placeholder="Type your message..."
          className="flex-1 rounded-xl border border-input bg-card px-4 py-3 text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          onClick={() => sendMessage(input)}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
