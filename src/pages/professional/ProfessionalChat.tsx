import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Send, Bot, User, Stethoscope, ArrowLeft, CheckCircle, FileText } from "lucide-react";

interface Message {
  role: "ai" | "patient" | "doctor";
  content: string;
  timestamp: string;
}

const patientData: Record<string, { name: string; age: number; risk: string }> = {
  "sarah-johnson": { name: "Sarah Johnson", age: 36, risk: "low" },
  "michael-chen": { name: "Michael Chen", age: 52, risk: "high" },
  "emily-davis": { name: "Emily Davis", age: 28, risk: "low" },
  "robert-wilson": { name: "Robert Wilson", age: 65, risk: "moderate" },
  "lisa-thompson": { name: "Lisa Thompson", age: 44, risk: "high" },
  "james-martinez": { name: "James Martinez", age: 38, risk: "low" },
  "anna-kowalski": { name: "Anna Kowalski", age: 57, risk: "moderate" },
  "david-park": { name: "David Park", age: 41, risk: "low" },
};

const initialConversation: Message[] = [
  { role: "ai", content: "Good morning! 👋 How are you feeling today? Let's start your daily health check-in.", timestamp: "9:00 AM" },
  { role: "patient", content: "I've been having headaches the past few days and feeling more tired than usual.", timestamp: "9:01 AM" },
  { role: "ai", content: "I'm sorry to hear that. Can you describe the headaches? Are they throbbing, dull, or sharp? Also, how many hours of sleep have you been getting?", timestamp: "9:01 AM" },
  { role: "patient", content: "They're mostly dull headaches, usually in the afternoon. I've been sleeping about 5-6 hours.", timestamp: "9:02 AM" },
  { role: "ai", content: "Thank you for sharing. The reduced sleep could be contributing to both symptoms. Have you noticed any changes in your diet, water intake, or stress levels recently?", timestamp: "9:03 AM" },
  { role: "patient", content: "Now that you mention it, I've been drinking less water and work has been really stressful lately.", timestamp: "9:04 AM" },
  { role: "ai", content: "Based on our conversation, I've identified potential dehydration and stress-related symptoms. I've prepared a report for your healthcare professional to review. A doctor will be with you shortly.", timestamp: "9:05 AM" },
];

export default function ProfessionalChat() {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const patient = patientData[patientId || ""] || { name: "Unknown Patient", age: 0, risk: "low" };

  const [conversation, setConversation] = useState<Message[]>(initialConversation);
  const [doctorInput, setDoctorInput] = useState("");
  const [sessionEnded, setSessionEnded] = useState(false);
  const [planGenerated, setPlanGenerated] = useState(false);

  const sendDoctorMessage = (text: string) => {
    if (!text.trim() || sessionEnded) return;
    const msg: Message = { role: "doctor", content: text, timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) };
    setConversation((prev) => [...prev, msg]);
    setDoctorInput("");
  };

  const endSession = () => {
    setSessionEnded(true);
    const aiSummary: Message = {
      role: "ai",
      content: `Session complete. Based on the consultation with Dr. and the patient's symptoms, I'm generating a personalized preventive care plan.\n\n📋 **Generated Plan:**\n• Increase daily water intake to 8 glasses\n• Implement stress management techniques (meditation, deep breathing)\n• Maintain 7-8 hours of sleep\n• Monitor headache frequency and triggers\n• Follow-up check-in scheduled for daily tracking\n\nThe patient will now receive daily check-ins to track progress against this plan.`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setConversation((prev) => [...prev, aiSummary]);
    setPlanGenerated(true);
  };

  const renderAvatar = (role: Message["role"]) => {
    const styles = {
      ai: "bg-secondary/15 text-secondary",
      patient: "bg-primary/15 text-primary",
      doctor: "bg-accent/15 text-accent",
    };
    const icons = {
      ai: <Bot className="h-4 w-4" />,
      patient: <User className="h-4 w-4" />,
      doctor: <Stethoscope className="h-4 w-4" />,
    };
    return (
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${styles[role]}`}>
        {icons[role]}
      </div>
    );
  };

  const getBubbleStyle = (role: Message["role"]) => {
    if (role === "doctor") return "bg-accent/8 border border-accent/15 text-foreground";
    if (role === "patient") return "bg-primary text-primary-foreground shadow-soft";
    return "bg-muted/60 text-foreground";
  };

  const getRoleLabel = (role: Message["role"]) => {
    if (role === "doctor") return "You";
    if (role === "patient") return patient.name;
    return "AI Assistant";
  };

  return (
    <div className="animate-fade-in flex h-[calc(100vh-4rem)] flex-col">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/professional/patients")} className="rounded-xl p-2 text-muted-foreground transition-all duration-200 hover:bg-muted/60 hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-foreground">{patient.name}</h1>
            <p className="text-small text-muted-foreground">Age {patient.age} · Live consultation</p>
          </div>
        </div>
        {!sessionEnded && (
          <button
            onClick={endSession}
            className="flex items-center gap-2 rounded-xl bg-success px-4 py-2 text-sm font-medium text-white shadow-soft transition-all duration-200 hover:shadow-card"
          >
            <CheckCircle className="h-4 w-4" />
            End Session & Generate Plan
          </button>
        )}
        {planGenerated && (
          <div className="flex items-center gap-2 rounded-xl border border-success/20 bg-success/5 px-4 py-2 text-sm font-medium text-success">
            <FileText className="h-4 w-4" />
            Plan sent to patient
          </div>
        )}
      </div>

      {/* Chat - split panel */}
      <div className="grid flex-1 gap-4 overflow-hidden lg:grid-cols-[1fr_340px]">
        {/* Main conversation */}
        <div className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-card">
          <div className="border-b border-border/60 px-6 py-3">
            <p className="text-small font-medium text-muted-foreground">Patient–AI Conversation & Doctor Replies</p>
          </div>
          <div className="flex-1 space-y-4 overflow-auto p-6">
            {conversation.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "doctor" ? "flex-row-reverse" : ""}`}>
                {renderAvatar(msg.role)}
                <div className="max-w-[75%]">
                  <p className={`mb-1 text-[11px] font-medium ${msg.role === "doctor" ? "text-right" : ""} text-muted-foreground`}>
                    {getRoleLabel(msg.role)} · {msg.timestamp}
                  </p>
                  <div className={`rounded-2xl px-4 py-3 text-body whitespace-pre-line ${getBubbleStyle(msg.role)}`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Doctor input */}
          {!sessionEnded && (
            <div className="border-t border-border/60 p-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={doctorInput}
                  onChange={(e) => setDoctorInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendDoctorMessage(doctorInput)}
                  placeholder="Type your message to the patient..."
                  className="flex-1 rounded-2xl border border-input bg-background px-5 py-3 text-body text-foreground shadow-soft placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-shadow duration-200"
                />
                <button
                  onClick={() => sendDoctorMessage(doctorInput)}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-soft transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* AI Report sidebar */}
        <div className="hidden flex-col gap-4 lg:flex">
          <div className="rounded-2xl bg-card p-5 shadow-card">
            <h3 className="mb-3 text-sm font-semibold text-foreground">AI Assessment</h3>
            <div className="space-y-3 text-small text-muted-foreground">
              <div className="flex justify-between">
                <span>Risk Level</span>
                <span className={`font-medium capitalize ${patient.risk === "high" ? "text-destructive" : patient.risk === "moderate" ? "text-warning" : "text-success"}`}>{patient.risk}</span>
              </div>
              <div className="flex justify-between"><span>Symptoms</span><span className="font-medium text-foreground">Headache, Fatigue</span></div>
              <div className="flex justify-between"><span>Likely Cause</span><span className="font-medium text-foreground">Dehydration, Stress</span></div>
              <div className="flex justify-between"><span>Sleep</span><span className="font-medium text-foreground">5-6 hrs (below rec.)</span></div>
            </div>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-card">
            <h3 className="mb-3 text-sm font-semibold text-foreground">Quick Actions</h3>
            <div className="space-y-2">
              {["Request blood work", "Recommend sleep study", "Prescribe hydration plan", "Schedule follow-up"].map((action) => (
                <button key={action} className="w-full rounded-xl border border-border/60 px-3 py-2 text-left text-small text-foreground transition-all duration-200 hover:bg-muted/40 hover:shadow-soft">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
