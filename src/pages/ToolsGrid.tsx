import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Grid3X3, Scan, Theater, Scale, RotateCcw, Zap, Archive } from "lucide-react";
import MobileNavBar from "@/components/MobileNavBar";

const ToolsGrid = () => {
  const navigate = useNavigate();

  const tools = [
    {
      title: "Reality Check Scanner",
      description: "Upload your 'problem' and get the unfiltered truth about what you're actually choosing.",
      icon: Scan,
      path: "/reality-check",
      color: "destructive"
    },
    {
      title: "Performance Detector", 
      description: "Daily authenticity scan. Who were you performing for today?",
      icon: Theater,
      path: "/performance-detector", 
      color: "accent"
    },
    {
      title: "Responsibility Meter",
      description: "Stop complaining. Get the truth about what you actually control.",
      icon: Scale,
      path: "/responsibility-meter",
      color: "sacred"
    },
    {
      title: "Choice Clarifier",
      description: "Real-time language pattern interruption. Convert victim speak to ownership speak.",
      icon: RotateCcw,
      path: "/choice-clarifier",
      color: "celestial"
    },
    {
      title: "Truth Dosing",
      description: "Micro-hits of reality throughout your day. Interrupt victim loops before they spiral.",
      icon: Zap,
      path: "/truth-dosing",
      color: "destructive"
    },
    {
      title: "Story Killer Archive",
      description: "Upload victim stories. Get systematic breakdown. Track your liberation progress.",
      icon: Archive,
      path: "/story-killer",
      color: "divine"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-divine/20 p-4 pb-20 md:pb-4">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 text-muted-foreground hover:text-divine"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-divine to-accent bg-clip-text text-transparent">
                Truth Tools
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Complete deprogramming toolkit. Choose your weapon against victim mentality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 md:p-6 hover-scale cursor-pointer transition-all duration-300 hover:border-divine/30"
                  onClick={() => navigate(tool.path)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className={`w-5 h-5 md:w-6 md:h-6 text-${tool.color}`} />
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">{tool.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    {tool.description}
                  </p>
                  <Button
                    variant={tool.color as any}
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(tool.path);
                    }}
                  >
                    Launch Tool
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button
              onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
              variant="divine"
              size="lg"
              className="text-lg px-8 py-6"
            >
              Direct Access to Lucene →
            </Button>
          </div>
        </div>
      </div>
      
      <MobileNavBar />
    </>
  );
};

export default ToolsGrid;
