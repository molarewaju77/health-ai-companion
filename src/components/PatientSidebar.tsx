import { Home, ClipboardList, FileText, User, Settings, LogOut, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const mainLinks = [
  { icon: Home, label: "Home", to: "/patient" },
  { icon: ClipboardList, label: "Daily Check-in", to: "/patient/checkin" },
  { icon: FileText, label: "My Plan", to: "/patient/plan" },
];

const bottomLinks = [
  { icon: User, label: "Profile", to: "/patient/profile" },
  { icon: Settings, label: "Settings", to: "/patient/settings" },
];

export function PatientSidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border/60 bg-card/80 backdrop-blur-sm">
      <div className="flex items-center gap-2.5 px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
          <Heart className="h-4.5 w-4.5 text-primary" />
        </div>
        <span className="text-lg font-bold text-foreground">WellSync</span>
      </div>

      <nav className="flex flex-1 flex-col px-3">
        <div className="flex-1 space-y-1">
          {mainLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/patient"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary shadow-soft"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )
              }
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="mb-4 space-y-1 border-t border-border/60 pt-4">
          {bottomLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary shadow-soft"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )
              }
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </NavLink>
          ))}
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium text-muted-foreground transition-all duration-200 hover:bg-destructive/5 hover:text-destructive">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
}
