import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PatientLayout from "./pages/patient/PatientLayout";
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientCheckin from "./pages/patient/PatientCheckin";
import PatientHistory from "./pages/patient/PatientHistory";
import PatientPlan from "./pages/patient/PatientPlan";
import PatientProfile from "./pages/patient/PatientProfile";
import ProfessionalLayout from "./pages/professional/ProfessionalLayout";
import ProfessionalDashboard from "./pages/professional/ProfessionalDashboard";
import ProfessionalPatients from "./pages/professional/ProfessionalPatients";
import ProfessionalReports from "./pages/professional/ProfessionalReports";
import ProfessionalAlerts from "./pages/professional/ProfessionalAlerts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* Patient Routes */}
          <Route path="/patient" element={<PatientLayout />}>
            <Route index element={<PatientDashboard />} />
            <Route path="checkin" element={<PatientCheckin />} />
            <Route path="history" element={<PatientHistory />} />
            <Route path="plan" element={<PatientPlan />} />
            <Route path="profile" element={<PatientProfile />} />
          </Route>

          {/* Professional Routes */}
          <Route path="/professional" element={<ProfessionalLayout />}>
            <Route index element={<ProfessionalDashboard />} />
            <Route path="patients" element={<ProfessionalPatients />} />
            <Route path="reports" element={<ProfessionalReports />} />
            <Route path="alerts" element={<ProfessionalAlerts />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
