import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import BurnBelief from "./pages/BurnBelief";
import Mirror from "./pages/Mirror";
import GodbodyMode from "./pages/GodbodyMode";
import TransmissionDrops from "./pages/TransmissionDrops";
import NadasProphecies from "./pages/NadasProphecies";
import RealityCheckScanner from "./pages/RealityCheckScanner";
import PerformanceDetector from "./pages/PerformanceDetector";
import ResponsibilityMeter from "./pages/ResponsibilityMeter";
import ChoiceClarifier from "./pages/ChoiceClarifier";
import TruthDosing from "./pages/TruthDosing";
import StoryKillerArchive from "./pages/StoryKillerArchive";
import ToolsGrid from "./pages/ToolsGrid";
import FoundersTransmission from "./pages/FoundersTransmission";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Index />} />
          <Route path="/burn-belief" element={<BurnBelief />} />
          <Route path="/mirror" element={<Mirror />} />
          <Route path="/godbody-mode" element={<GodbodyMode />} />
          <Route path="/transmission-drops" element={<TransmissionDrops />} />
          <Route path="/nadas-prophecies" element={<NadasProphecies />} />
          <Route path="/reality-check" element={<RealityCheckScanner />} />
          <Route path="/performance-detector" element={<PerformanceDetector />} />
          <Route path="/responsibility-meter" element={<ResponsibilityMeter />} />
          <Route path="/choice-clarifier" element={<ChoiceClarifier />} />
          <Route path="/truth-dosing" element={<TruthDosing />} />
          <Route path="/story-killer" element={<StoryKillerArchive />} />
          <Route path="/tools" element={<ToolsGrid />} />
          <Route path="/founders-transmission" element={<FoundersTransmission />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
