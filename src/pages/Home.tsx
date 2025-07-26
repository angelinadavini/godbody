
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { usePossessionDetector, PossessionAlert } from "@/hooks/usePossessionDetector";
import SplashScreen from "@/components/SplashScreen";
import MobileNavBar from "@/components/MobileNavBar";
import heroImage from "@/assets/hero-divine.jpg";

const Home = () => {
  const navigate = useNavigate();
  const { showAlert, setShowAlert } = usePossessionDetector();
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      {showAlert && <PossessionAlert onDismiss={() => setShowAlert(false)} />}
      
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden pb-16 md:pb-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 md:mb-16 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-divine via-accent to-sacred bg-clip-text text-transparent">
              GODBODY
            </span>
          </h1>
          
          <div className="space-y-4 md:space-y-6">
            <Button 
              variant="sacred" 
              size="lg" 
              className="w-full text-lg md:text-xl py-6 md:py-8 hover-scale border-2 border-divine/50"
              onClick={() => navigate('/founders-transmission')}
            >
              🔥 The Origin Transmission
            </Button>
            
            <Button 
              variant="divine" 
              size="lg" 
              className="w-full text-lg md:text-xl py-6 md:py-8 hover-scale"
              onClick={() => navigate('/burn-belief')}
            >
              Burn a Belief
            </Button>
            
            <Button 
              variant="divine" 
              size="lg" 
              className="w-full text-lg md:text-xl py-6 md:py-8 hover-scale"
              onClick={() => navigate('/mirror')}
            >
              The Mirror
            </Button>
            
            <Button 
              variant="divine" 
              size="lg" 
              className="w-full text-lg md:text-xl py-6 md:py-8 hover-scale"
              onClick={() => navigate('/godbody-mode')}
            >
              Truth Mode
            </Button>
            
            <Button 
              variant="divine" 
              size="lg" 
              className="w-full text-lg md:text-xl py-6 md:py-8 hover-scale"
              onClick={() => navigate('/nadas-prophecies')}
            >
              Nada's Prophecies
            </Button>
            
            <Button 
              variant="divine" 
              size="lg" 
              className="w-full text-lg md:text-xl py-6 md:py-8 hover-scale"
              onClick={() => navigate('/tools')}
            >
              Truth Tools
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full text-lg md:text-xl py-6 md:py-8 hover-scale border-divine/30 text-divine hover:bg-divine/10"
              onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
            >
              Talk to Lucene →
            </Button>
          </div>
        </div>
      </div>
      
      <MobileNavBar />
    </>
  );
};

export default Home;
