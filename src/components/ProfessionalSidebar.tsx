import { BarChart3, Users, FileText, ClipboardList, User, Settings, LogOut, Stethoscope } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const mainLinks = [
  { icon: BarChart3, label: "Dashboard", to: "/professional" },
  { icon: Users, label: "Patients", to: "/professional/patients" },
  { icon: FileText, label: "Reports", to: "/professional/reports" },
  { icon: ClipboardList, label: "Plan Templates", to: "/professional/templates" },
];

const bottomLinks = [
  { icon: User, label: "Profile", to: "/professional/profile" },
  { icon: Settings, label: "Settings", to: "/professional/settings" },
];

export function ProfessionalSidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col" style={{ background: "linear-gradient(180deg, hsl(215, 30%, 18%) 0%, hsl(215, 28%, 15%) 100%)" }}>
      <div className="flex items-center gap-2.5 px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20">
          <Stethoscope className="h-4.5 w-4.5 text-primary" />
        </div>
        <span className="text-lg font-bold text-white/95">WellSync Pro</span>
      </div>

      <nav className="flex flex-1 flex-col px-3">
        <div className="flex-1 space-y-1">
          {mainLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/professional"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary/20 text-white shadow-glow"
                    : "text-white/55 hover:bg-white/8 hover:text-white/85"
                )
              }
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="mb-4 space-y-1 border-t border-white/8 pt-4">
          {bottomLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary/20 text-white shadow-glow"
                    : "text-white/55 hover:bg-white/8 hover:text-white/85"
                )
              }
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </NavLink>
          ))}
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium text-white/55 transition-all duration-200 hover:bg-white/8 hover:text-white/85">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
}
