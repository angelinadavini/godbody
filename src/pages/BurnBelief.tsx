import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BurnBelief = () => {
  const [belief, setBelief] = useState("");
  const [isBurned, setIsBurned] = useState(false);
  const navigate = useNavigate();

  const handleBurn = () => {
    if (belief.trim()) {
      setIsBurned(true);
      setTimeout(() => {
        setIsBurned(false);
        setBelief("");
      }, 3000);
    }
  };

  const truthBombs = [
    "That belief was never yours to begin with. You inherited someone else's limitation.",
    "You don't need healing. You need to stop believing you're broken.",
    "The story you just burned was keeping you small. Good riddance.",
    "Beliefs aren't facts. You just deleted a fiction.",
    "You were never damaged goods. That was just poor programming."
  ];

  const randomTruthBomb = truthBombs[Math.floor(Math.random() * truthBombs.length)];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-sacred/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 text-muted-foreground hover:text-divine"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {!isBurned ? (
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-divine to-sacred bg-clip-text text-transparent">
                Burn a Belief
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              What limiting belief needs to be deleted from your operating system?
            </p>
            
            <div className="space-y-6">
              <Input
                value={belief}
                onChange={(e) => setBelief(e.target.value)}
                placeholder="I'm not good enough because..."
                className="text-lg py-6 text-center bg-card/50 backdrop-blur-sm border-divine/30 focus:border-divine"
                onKeyPress={(e) => e.key === 'Enter' && handleBurn()}
              />
              
              <Button
                onClick={handleBurn}
                disabled={!belief.trim()}
                variant="divine"
                size="lg"
                className="w-full text-xl py-8 hover-scale"
              >
                🔥 BURN IT
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-8 animate-scale-in">
            <div className="text-8xl animate-pulse">🔥</div>
            <h2 className="text-4xl font-bold text-divine">DELETED</h2>
            <p className="text-xl text-foreground bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-divine/30">
              {randomTruthBomb}
            </p>
            <Button
              onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
              variant="celestial"
              size="lg"
              className="hover-scale"
            >
              Get Real Truth from Lucene →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurnBelief;