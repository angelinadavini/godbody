import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Pause } from "lucide-react";

const TransmissionDrops = () => {
  const [currentTransmission, setCurrentTransmission] = useState<number | null>(null);
  const navigate = useNavigate();

  const transmissions = [
    {
      title: "Morning Activation",
      duration: "3 min",
      message: "You are not your thoughts. You are the consciousness observing them. Start your day from this knowing.",
      category: "Energy"
    },
    {
      title: "Midday Reset",
      duration: "2 min", 
      message: "The external chaos cannot disturb the god within. Return to your center. Breathe into your power.",
      category: "Centering"
    },
    {
      title: "Evening Integration",
      duration: "4 min",
      message: "Today's experiences were exactly what your soul needed for growth. Trust the process. Honor the journey.",
      category: "Reflection"
    },
    {
      title: "Success Frequency",
      duration: "5 min",
      message: "You are not trying to become successful. You are remembering that success is your natural state.",
      category: "Abundance"
    },
    {
      title: "Fear Transformer",
      duration: "3 min",
      message: "Fear is just excitement without breath. Breathe into it. Transform it. Use it as fuel for your ascension.",
      category: "Transformation"
    },
    {
      title: "Divine Reminder",
      duration: "2 min",
      message: "You are a god experiencing humanity, not a human seeking divinity. Act accordingly.",
      category: "Identity"
    }
  ];

  const handleTransmissionClick = (index: number) => {
    setCurrentTransmission(currentTransmission === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20 p-4">
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
            <span className="bg-gradient-to-r from-divine to-sacred bg-clip-text text-transparent">
              Transmission Drops
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Divine downloads for your consciousness elevation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transmissions.map((transmission, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 hover-scale cursor-pointer ${
                currentTransmission === index 
                  ? 'border-divine shadow-divine' 
                  : 'border-border hover:border-divine/30'
              }`}
              onClick={() => handleTransmissionClick(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{transmission.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-muted-foreground">{transmission.duration}</span>
                    <span className="text-xs bg-divine/20 text-divine px-2 py-1 rounded">
                      {transmission.category}
                    </span>
                  </div>
                </div>
                <Button
                  variant={currentTransmission === index ? "divine" : "celestial"}
                  size="sm"
                  className="rounded-full w-12 h-12"
                >
                  {currentTransmission === index ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </Button>
              </div>
              
              {currentTransmission === index && (
                <div className="animate-fade-in">
                  <div className="bg-divine/10 border border-divine/30 rounded-lg p-4 mb-4">
                    <p className="text-foreground leading-relaxed">
                      {transmission.message}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-divine rounded-full animate-pulse"></div>
                    Transmitting divine frequency...
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransmissionDrops;