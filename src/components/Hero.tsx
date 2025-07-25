import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-divine.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-divine via-accent to-sacred bg-clip-text text-transparent">
            GODBODY
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Elevate your mind, body, and spirit. Experience divine wellness through our holistic approach to fitness, mindfulness, and self-empowerment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="divine" size="lg" className="text-lg px-8 py-6">
            Begin Your Journey
          </Button>
          <Button variant="celestial" size="lg" className="text-lg px-8 py-6">
            Explore Programs
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-divine mb-2">10K+</div>
            <div className="text-muted-foreground">Divine Bodies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Wellness Programs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sacred mb-2">95%</div>
            <div className="text-muted-foreground">Transformation Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;