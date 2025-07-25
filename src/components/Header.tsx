import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-divine to-accent bg-clip-text text-transparent">
            GODBODY
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-divine transition-colors">Home</a>
          <a href="#wellness" className="text-foreground hover:text-divine transition-colors">Wellness</a>
          <a href="#fitness" className="text-foreground hover:text-divine transition-colors">Fitness</a>
          <a href="#mindfulness" className="text-foreground hover:text-divine transition-colors">Mindfulness</a>
          <a href="#community" className="text-foreground hover:text-divine transition-colors">Community</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="celestial" size="sm">
            Sign In
          </Button>
          <Button variant="divine" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;