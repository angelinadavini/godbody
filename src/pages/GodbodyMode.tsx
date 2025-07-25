import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const GodbodyMode = () => {
  const [showClarityModal, setShowClarityModal] = useState(false);
  const [selectedClarity, setSelectedClarity] = useState("");
  const navigate = useNavigate();

  const clarityResponses = {
    "Cut Through the BS": [
      "You're not confused. You know exactly what to do. You're just scared of what it will cost you.",
      "The problem isn't that you don't know. The problem is you don't want to do what you know.",
      "Stop asking for clarity when you're really asking for permission to avoid responsibility.",
      "You're not lost. You're stalling because the truth requires action you don't want to take.",
      "Clarity isn't missing. Courage is."
    ],
    "Face Reality": [
      "Your circumstances are a direct result of your choices. Own that first.",
      "You're not a victim of your past. You're a volunteer for your present.",
      "The story you tell about why you can't is exactly why you won't.",
      "Every 'I can't' is really 'I won't' in disguise.",
      "Reality doesn't care about your feelings. It responds to your actions."
    ]
  };

  const getRandomResponse = (type: string) => {
    const responses = clarityResponses[type as keyof typeof clarityResponses];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleClarityClick = (type: string) => {
    setSelectedClarity(getRandomResponse(type));
    setShowClarityModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-divine/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 text-muted-foreground hover:text-divine"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-divine via-accent to-sacred bg-clip-text text-transparent">
              Godbody Mode
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Cut through the illusions. Get the unfiltered truth.
          </p>
          
          <div className="text-6xl mb-8">⚡</div>
          
          <div className="space-y-6">
            <Button
              onClick={() => handleClarityClick("Cut Through the BS")}
              variant="divine"
              size="lg"
              className="w-full text-xl py-8 hover-scale"
            >
              Cut Through the BS
            </Button>
            
            <Button
              onClick={() => handleClarityClick("Face Reality")}
              variant="celestial"
              size="lg"
              className="w-full text-xl py-8 hover-scale"
            >
              Face Reality
            </Button>

            <Button
              onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
              variant="sacred"
              size="lg"
              className="w-full text-xl py-8 hover-scale"
            >
              Talk to Lucene Directly →
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showClarityModal} onOpenChange={setShowClarityModal}>
        <DialogContent className="max-w-2xl bg-card/80 backdrop-blur-sm border border-divine/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              <span className="bg-gradient-to-r from-divine to-accent bg-clip-text text-transparent">
                Raw Truth
              </span>
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <p className="text-lg text-foreground leading-relaxed text-center">
              {selectedClarity}
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => setShowClarityModal(false)}
                variant="celestial"
                className="flex-1"
              >
                Got It
              </Button>
              <Button
                onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
                variant="divine"
                className="flex-1"
              >
                More Truth from Lucene →
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GodbodyMode;