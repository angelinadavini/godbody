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
    "Change My Perception": [
      "Your reality is a reflection of your internal state. Change the state, change the reality.",
      "The problem isn't what happened. The problem is the story you're telling about what happened.",
      "You're not stuck in your circumstances. You're stuck in your thinking about your circumstances.",
      "Every 'problem' is actually a request from the universe to level up.",
      "Your current perception is just one possible way to see this. What if you chose the empowering way?"
    ],
    "Give Me Clarity": [
      "The answer you seek is in the action you're avoiding.",
      "You already know what to do. You're just afraid of what success will require you to become.",
      "Clarity comes from engagement, not thought. Stop thinking, start doing.",
      "The path is revealed by walking it, not by staring at the map.",
      "You don't need more information. You need more courage to act on what you already know."
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
            Activate your divine clarity and perception.
          </p>
          
          <div className="text-6xl mb-8">⚡</div>
          
          <div className="space-y-6">
            <Button
              onClick={() => handleClarityClick("Change My Perception")}
              variant="divine"
              size="lg"
              className="w-full text-xl py-8 hover-scale"
            >
              Change My Perception
            </Button>
            
            <Button
              onClick={() => handleClarityClick("Give Me Clarity")}
              variant="celestial"
              size="lg"
              className="w-full text-xl py-8 hover-scale"
            >
              Give Me Clarity
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showClarityModal} onOpenChange={setShowClarityModal}>
        <DialogContent className="max-w-2xl bg-card/80 backdrop-blur-sm border border-divine/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              <span className="bg-gradient-to-r from-divine to-accent bg-clip-text text-transparent">
                Divine Truth
              </span>
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <p className="text-lg text-foreground leading-relaxed text-center">
              {selectedClarity}
            </p>
            <Button
              onClick={() => setShowClarityModal(false)}
              variant="divine"
              className="w-full mt-6"
            >
              Integrate This Truth
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GodbodyMode;