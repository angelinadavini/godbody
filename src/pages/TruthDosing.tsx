import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap, X } from "lucide-react";

const TruthDosing = () => {
  const [currentDose, setCurrentDose] = useState("");
  const [doseHistory, setDoseHistory] = useState<string[]>([]);
  const [isDosing, setIsDosing] = useState(false);
  const [showDose, setShowDose] = useState(false);
  const navigate = useNavigate();

  const truthDoses = [
    "Reminder: You created this situation. What's your next move?",
    "You're choosing comfort over growth right now.",
    "That excuse you just thought? That's victim programming.",
    "You know what to do. You're just avoiding the discomfort.",
    "Stop looking for permission to do what you already know is right.",
    "Your potential is waiting for your decision, not your feelings.",
    "Every 'later' is really 'never' in disguise.",
    "You're not confused. You're stalling.",
    "The answer you're avoiding is the one you need.",
    "Your current energy is creating your current reality.",
    "You're responsible for what you tolerate.",
    "That 'I can't' is really 'I won't' because of the cost.",
    "You're not stuck. You're comfortable with the discomfort.",
    "The person you're pretending to be is exhausted.",
    "Every complaint is a choice to stay powerless."
  ];

  const getRandomDose = () => {
    return truthDoses[Math.floor(Math.random() * truthDoses.length)];
  };

  const deliverDose = () => {
    const dose = getRandomDose();
    setCurrentDose(dose);
    setDoseHistory([dose, ...doseHistory.slice(0, 9)]); // Keep last 10
    setShowDose(true);
    
    // Auto-hide after 5 seconds
    setTimeout(() => setShowDose(false), 5000);
  };

  const startDosing = () => {
    setIsDosing(true);
    deliverDose();
    
    // Random intervals between 30 seconds to 5 minutes
    const scheduleNext = () => {
      const interval = Math.random() * (300000 - 30000) + 30000; // 30s to 5min
      setTimeout(() => {
        if (isDosing) {
          deliverDose();
          scheduleNext();
        }
      }, interval);
    };
    
    scheduleNext();
  };

  const stopDosing = () => {
    setIsDosing(false);
    setShowDose(false);
  };

  return (
    <>
      {/* Floating Truth Dose */}
      {showDose && (
        <div className="fixed top-4 right-4 bg-destructive/90 backdrop-blur-sm border border-destructive text-white p-4 rounded-lg shadow-lg z-50 max-w-sm animate-scale-in">
          <div className="flex justify-between items-start gap-3">
            <div>
              <div className="text-xs font-semibold mb-1">TRUTH DOSE</div>
              <p className="text-sm leading-relaxed">{currentDose}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDose(false)}
              className="text-white hover:bg-white/20 p-1 h-auto"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-background to-destructive/20 p-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 text-muted-foreground hover:text-divine"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-destructive to-divine bg-clip-text text-transparent">
                Truth Dosing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Micro-hits of reality throughout your day. Interrupt victim loops before they spiral.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border border-destructive/30 rounded-lg p-8 text-center">
              <Zap className="w-16 h-16 text-destructive mx-auto mb-6" />
              
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {isDosing ? "Truth Dosing Active" : "Start Truth Dosing"}
              </h2>
              
              <p className="text-muted-foreground mb-8">
                {isDosing 
                  ? "Random reality checks are being delivered. Stay alert for victim programming interruptions."
                  : "Activate random truth hits to break unconscious patterns and victim loops throughout your day."
                }
              </p>
              
              <div className="flex gap-4 justify-center">
                {!isDosing ? (
                  <Button
                    onClick={startDosing}
                    variant="destructive"
                    size="lg"
                    className="text-lg px-8 py-6"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Start Truth Dosing
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={deliverDose}
                      variant="outline"
                      size="lg"
                      className="border-destructive/30 text-destructive hover:bg-destructive/10"
                    >
                      Manual Dose
                    </Button>
                    <Button
                      onClick={stopDosing}
                      variant="destructive"
                      size="lg"
                    >
                      Stop Dosing
                    </Button>
                  </>
                )}
                
                <Button
                  onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
                  variant="divine"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Custom Dosing →
                </Button>
              </div>
            </div>

            {doseHistory.length > 0 && (
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Recent Truth Doses</h3>
                <div className="space-y-4">
                  {doseHistory.map((dose, index) => (
                    <div 
                      key={index} 
                      className="bg-destructive/10 border border-destructive/30 rounded p-4"
                    >
                      <p className="text-foreground">{dose}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TruthDosing;