import { ClipboardList, Plus } from "lucide-react";

export default function ProfessionalTemplates() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-foreground">Plan Templates</h1>
          <p className="mt-1 text-body-lg text-muted-foreground">Create and manage reusable care plan templates</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-body font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5">
          <Plus className="h-4 w-4" />
          New Template
        </button>
      </div>

      <div className="flex flex-col items-center justify-center rounded-2xl bg-card py-20 shadow-card">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/8">
          <ClipboardList className="h-8 w-8 text-primary/60" />
        </div>
        <h3 className="mt-4 text-foreground">No templates yet</h3>
        <p className="mt-2 max-w-sm text-center text-body text-muted-foreground leading-relaxed">
          Create your first care plan template to quickly assign standardized plans to patients.
        </p>
        <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-body font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5">
          <Plus className="h-4 w-4" />
          Create Template
        </button>
      </div>
    </div>
  );
}
