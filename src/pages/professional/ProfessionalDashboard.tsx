import { Users, FileText, AlertTriangle, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { RiskBadge } from "@/components/RiskBadge";

const recentPatients = [
  { name: "Sarah Johnson", age: 36, lastCheckin: "Today", risk: "low" as const, status: "Active" },
  { name: "Michael Chen", age: 52, lastCheckin: "Today", risk: "high" as const, status: "Needs Review" },
  { name: "Emily Davis", age: 28, lastCheckin: "Yesterday", risk: "low" as const, status: "Active" },
  { name: "Robert Wilson", age: 65, lastCheckin: "Today", risk: "moderate" as const, status: "Active" },
  { name: "Lisa Thompson", age: 44, lastCheckin: "2 days ago", risk: "high" as const, status: "Needs Review" },
];

const pendingReports = [
  { patient: "Michael Chen", type: "Risk Assessment", generated: "2 hours ago", risk: "high" as const },
  { patient: "Lisa Thompson", type: "Weekly Summary", generated: "4 hours ago", risk: "high" as const },
  { patient: "Robert Wilson", type: "Risk Assessment", generated: "Yesterday", risk: "moderate" as const },
];

export default function ProfessionalDashboard() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-foreground">Dashboard</h1>
        <p className="mt-1 text-body-lg text-muted-foreground">Welcome back, Dr. Chen</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Patients" value={148} icon={Users} trend="12 new this month" trendUp />
        <StatCard title="Pending Reviews" value={8} icon={FileText} trend="3 urgent" />
        <StatCard title="High Risk Alerts" value={5} icon={AlertTriangle} trend="2 new today" />
        <StatCard title="Plans Active" value={92} icon={TrendingUp} trend="85% adherence" trendUp />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="rounded-2xl bg-card p-6 shadow-card lg:col-span-2">
          <h3 className="text-foreground">Recent Patient Activity</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="pb-3 text-left text-small font-medium text-muted-foreground">Patient</th>
                  <th className="pb-3 text-left text-small font-medium text-muted-foreground">Age</th>
                  <th className="pb-3 text-left text-small font-medium text-muted-foreground">Last Check-in</th>
                  <th className="pb-3 text-left text-small font-medium text-muted-foreground">Risk</th>
                  <th className="pb-3 text-left text-small font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentPatients.map((patient, i) => (
                  <tr key={i} className="border-b border-border/40 last:border-0 transition-colors duration-200 hover:bg-muted/30">
                    <td className="py-3 text-body font-medium text-foreground">{patient.name}</td>
                    <td className="py-3 text-body text-muted-foreground">{patient.age}</td>
                    <td className="py-3 text-body text-muted-foreground">{patient.lastCheckin}</td>
                    <td className="py-3"><RiskBadge level={patient.risk} /></td>
                    <td className="py-3 text-body text-muted-foreground">{patient.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl bg-card p-6 shadow-card">
          <h3 className="text-foreground">Pending Reports</h3>
          <div className="mt-4 space-y-3">
            {pendingReports.map((report, i) => (
              <div key={i} className="rounded-xl border border-border/60 p-4 transition-all duration-200 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <p className="text-body font-medium text-foreground">{report.patient}</p>
                  <RiskBadge level={report.risk} />
                </div>
                <p className="mt-1 text-small text-muted-foreground">{report.type}</p>
                <p className="mt-0.5 text-small text-muted-foreground">{report.generated}</p>
                <button className="mt-3 w-full rounded-xl bg-primary px-4 py-2 text-small font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:shadow-glow">
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
