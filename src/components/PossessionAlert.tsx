import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle } from "lucide-react";

interface PossessionAlertProps {
  onDismiss: () => void;
}

const PossessionAlert = ({ onDismiss }: PossessionAlertProps) => {
  const [currentAlert, setCurrentAlert] = useState("");

  const possessionTriggers = [
    "You're performing again.",
    "Possession detected: approval-seeking behavior.",
    "Return to GODBODY.",
    "The ego has hijacked your operating system.",
    "Fear is running the show. Take back control.",
    "You're seeking validation from the wrong source.",
    "Identity crisis detected. Remember who you are.",
    "Stop outsourcing your worth to others.",
    "The mask is slipping back on. Remove it.",
    "You're playing a character instead of being yourself."
  ];

  useEffect(() => {
    const randomAlert = possessionTriggers[Math.floor(Math.random() * possessionTriggers.length)];
    setCurrentAlert(randomAlert);
  }, []);

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border-2 border-destructive rounded-lg p-8 max-w-md mx-auto shadow-lg animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-destructive" />
            <h2 className="text-2xl font-bold text-destructive">
              POSSESSION ALERT
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDismiss}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-6">
          <p className="text-lg font-medium text-foreground text-center">
            {currentAlert}
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button
            onClick={onDismiss}
            variant="outline"
            className="flex-1 border-destructive/30 text-destructive hover:bg-destructive/10"
          >
            I See It
          </Button>
          <Button
            onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
            variant="destructive"
            className="flex-1"
          >
            Get Depossessed →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PossessionAlert;