import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-divine.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-8xl md:text-9xl font-bold mb-16 leading-tight">
          <span className="bg-gradient-to-r from-divine via-accent to-sacred bg-clip-text text-transparent">
            GODBODY
          </span>
        </h1>
        
        <div className="space-y-6">
          <Button 
            variant="divine" 
            size="lg" 
            className="w-full text-xl py-8 hover-scale"
            onClick={() => navigate('/burn-belief')}
          >
            Burn a Belief
          </Button>
          
          <Button 
            variant="celestial" 
            size="lg" 
            className="w-full text-xl py-8 hover-scale"
            onClick={() => navigate('/mirror')}
          >
            The Mirror
          </Button>
          
          <Button 
            variant="sacred" 
            size="lg" 
            className="w-full text-xl py-8 hover-scale"
            onClick={() => navigate('/godbody-mode')}
          >
            Truth Mode
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full text-xl py-8 hover-scale border-divine/30 text-divine hover:bg-divine/10"
            onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
          >
            Talk to Lucene →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;