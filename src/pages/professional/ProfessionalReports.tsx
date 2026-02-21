import { RiskBadge } from "@/components/RiskBadge";
import { FileText, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

type TabKey = "pending" | "reviewed";

const reports = {
  pending: [
    { patient: "Michael Chen", type: "Risk Assessment", risk: "high" as const, generated: "2 hours ago", summary: "Elevated cardiovascular risk markers. BP trending upward over 2 weeks." },
    { patient: "Lisa Thompson", type: "Weekly Summary", risk: "high" as const, generated: "4 hours ago", summary: "Missed 3 check-ins. Pain levels increasing. Non-adherent to medication schedule." },
    { patient: "Robert Wilson", type: "Risk Assessment", risk: "moderate" as const, generated: "Yesterday", summary: "Mild respiratory symptoms persisting. Possible seasonal trigger." },
    { patient: "Anna Kowalski", type: "Monthly Review", risk: "moderate" as const, generated: "Yesterday", summary: "Blood sugar levels slightly elevated. Diet adherence dropped to 60%." },
  ],
  reviewed: [
    { patient: "Sarah Johnson", type: "Risk Assessment", risk: "low" as const, generated: "2 days ago", summary: "All metrics within normal range. Continue current plan." },
    { patient: "James Martinez", type: "Weekly Summary", risk: "low" as const, generated: "3 days ago", summary: "Excellent adherence. Health score improved by 8 points." },
    { patient: "David Park", type: "Risk Assessment", risk: "low" as const, generated: "4 days ago", summary: "Recovery on track. Cleared for increased exercise intensity." },
  ],
};

export default function ProfessionalReports() {
  const [tab, setTab] = useState<TabKey>("pending");

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-foreground">AI Reports</h1>
        <p className="mt-1 text-body-lg text-muted-foreground">Review AI-generated patient assessments</p>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-1 rounded-lg bg-muted p-1">
        <button
          onClick={() => setTab("pending")}
          className={`flex items-center gap-2 rounded-md px-4 py-2.5 text-body font-medium transition-colors ${
            tab === "pending" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Clock className="h-4 w-4" />
          Pending ({reports.pending.length})
        </button>
        <button
          onClick={() => setTab("reviewed")}
          className={`flex items-center gap-2 rounded-md px-4 py-2.5 text-body font-medium transition-colors ${
            tab === "reviewed" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <CheckCircle className="h-4 w-4" />
          Reviewed ({reports.reviewed.length})
        </button>
      </div>

      {/* Reports */}
      <div className="space-y-4">
        {reports[tab].map((report, i) => (
          <div key={i} className="rounded-xl bg-card p-6 shadow-card">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-foreground">{report.patient}</h3>
                  <p className="text-small text-muted-foreground">{report.type} · {report.generated}</p>
                </div>
              </div>
              <RiskBadge level={report.risk} />
            </div>
            <p className="mt-4 text-body text-muted-foreground">{report.summary}</p>
            <div className="mt-4 flex gap-3">
              {tab === "pending" ? (
                <>
                  <button className="rounded-lg bg-primary px-4 py-2 text-small font-medium text-primary-foreground hover:bg-primary/90">
                    Review & Approve
                  </button>
                  <button className="rounded-lg border border-border px-4 py-2 text-small font-medium text-foreground hover:bg-muted">
                    Request More Data
                  </button>
                </>
              ) : (
                <button className="rounded-lg border border-border px-4 py-2 text-small font-medium text-foreground hover:bg-muted">
                  View Details
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
