import { cn } from "@/lib/utils";

type RiskLevel = "low" | "moderate" | "high";

interface RiskBadgeProps {
  level: RiskLevel;
  className?: string;
}

const riskConfig: Record<RiskLevel, { label: string; classes: string }> = {
  low: {
    label: "Low Risk",
    classes: "bg-success/10 text-success border-success/20",
  },
  moderate: {
    label: "Moderate Risk",
    classes: "bg-warning/10 text-warning border-warning/20",
  },
  high: {
    label: "High Risk",
    classes: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

export function RiskBadge({ level, className }: RiskBadgeProps) {
  const config = riskConfig[level];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-small font-medium",
        config.classes,
        className
      )}
    >
      {config.label}
    </span>
  );
}
