
import { useState, useEffect } from "react";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 300); // Wait for fade-out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center space-y-8 animate-fade-in">
        <div className="text-8xl mb-8 animate-pulse">🔥</div>
        <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-scale-in">
          <span className="bg-gradient-to-r from-divine via-accent to-sacred bg-clip-text text-transparent">
            GODBODY
          </span>
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-divine to-accent mx-auto animate-pulse"></div>
        <p className="text-xl text-muted-foreground animate-fade-in">
          Awakening your truth...
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
