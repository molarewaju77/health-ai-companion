import { Link } from "react-router-dom";
import { ClipboardList, Shield, FileText, ArrowRight, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  {
    icon: ClipboardList,
    title: "Daily Check-ins",
    description: "AI-powered symptom tracking with intelligent follow-up questions tailored to your health profile.",
    gradient: "from-primary/10 to-secondary/10",
  },
  {
    icon: Shield,
    title: "Risk Prediction",
    description: "Advanced algorithms analyze patterns to provide early warning for potential health concerns.",
    gradient: "from-secondary/10 to-success/10",
  },
  {
    icon: FileText,
    title: "Preventive Plans",
    description: "Personalized, doctor-approved care plans designed to keep you at your healthiest.",
    gradient: "from-accent/10 to-primary/10",
  },
];

const steps = [
  { number: "01", title: "Daily Chat", description: "Have a quick daily conversation with your AI health partner." },
  { number: "02", title: "Risk Assessment", description: "AI generates comprehensive risk assessments from your data." },
  { number: "03", title: "Doctor Review", description: "Healthcare professionals review and validate insights." },
  { number: "04", title: "Follow Plan", description: "Follow your personalized preventive health plan." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="border-b border-border/50 bg-card/60 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
              <Heart className="h-4 w-4 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">WellSync</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/patient"
              className="rounded-xl px-4 py-2.5 text-body font-medium text-primary transition-all duration-200 hover:bg-primary/5"
            >
              Patient Login
            </Link>
            <Link
              to="/professional"
              className="rounded-xl bg-primary px-5 py-2.5 text-body font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5"
            >
              For Professionals
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 50%, hsl(213 80% 62% / 0.08), transparent 60%)" }} />
        <div className="container mx-auto px-6 py-20 lg:py-28 relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-small font-medium text-primary mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                AI-Powered Preventive Health
              </div>
              <h1 className="text-[40px] leading-[48px] font-bold tracking-tight text-foreground lg:text-[52px] lg:leading-[60px]">
                Your Preventive AI{" "}
                <span className="text-primary">Health Assistant</span>
              </h1>
              <p className="mt-6 text-body-lg text-muted-foreground max-w-lg leading-relaxed">
                Track symptoms daily, get AI-powered insights, and receive personalized preventive plans from healthcare professionals.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/patient"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-body font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
                >
                  Get Started as Patient
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/professional"
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary/20 bg-card/80 px-7 py-3.5 text-body font-medium text-primary transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                >
                  For Healthcare Professionals
                </Link>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={heroImage}
                alt="AI Health Assistant visualization showing health data analytics and protective monitoring"
                className="w-full rounded-3xl shadow-card-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-foreground">Everything you need for preventive health</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
              Our platform combines AI technology with medical expertise to provide comprehensive preventive care.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border border-border/60 bg-gradient-to-br ${feature.gradient} p-8 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card shadow-soft">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-foreground">{feature.title}</h3>
                <p className="mt-3 text-body text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-foreground">How It Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
              Four simple steps to better preventive health care.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="group text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-[18px] font-bold text-primary-foreground shadow-soft transition-all duration-300 group-hover:shadow-glow group-hover:scale-105">
                  {step.number}
                </div>
                <h3 className="mt-5 text-[18px] font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-body text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/60 py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">WellSync</span>
          </div>
          <div className="flex gap-6 text-body text-muted-foreground">
            <a href="#" className="transition-colors duration-200 hover:text-foreground">About</a>
            <a href="#" className="transition-colors duration-200 hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors duration-200 hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors duration-200 hover:text-foreground">Contact</a>
          </div>
          <p className="text-small text-muted-foreground">© 2026 WellSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
