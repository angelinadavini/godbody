import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera } from "lucide-react";

const Mirror = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
      });
      setStream(mediaStream);
      setIsCameraOpen(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Camera access denied. Please enable camera permissions.');
    }
  };

  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraOpen(false);
  };

  const truthBombs = [
    "The person staring back created every circumstance they're complaining about.",
    "Stop looking for someone to save you. You're the only one with the power.",
    "Every excuse you see in that reflection is a choice you keep making.",
    "You're not a victim of your story. You're the author who keeps writing it.",
    "The mirror doesn't lie. Everything you don't like is within your control to change."
  ];

  const randomTruthBomb = truthBombs[Math.floor(Math.random() * truthBombs.length)];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-celestial/20 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 text-muted-foreground hover:text-divine"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {!isCameraOpen ? (
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-divine to-accent bg-clip-text text-transparent">
                The Mirror
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Face the one who's been writing your story.
            </p>
            
            <div className="text-6xl mb-8">🪞</div>
            
            <Button
              onClick={openCamera}
              variant="divine"
              size="lg"
              className="text-xl py-8 px-12 hover-scale"
            >
              <Camera className="w-6 h-6 mr-3" />
              OPEN MIRROR
            </Button>
          </div>
        ) : (
          <div className="space-y-6 animate-scale-in">
            <div className="relative">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full max-w-2xl mx-auto rounded-lg border-4 border-divine/30 shadow-divine"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-divine/30">
                  <p className="text-divine font-semibold text-center">
                    See who's been writing the story.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent/30 max-w-2xl mx-auto">
                <p className="text-lg text-foreground font-medium">
                  {randomTruthBomb}
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={closeCamera}
                  variant="celestial"
                  size="lg"
                  className="hover-scale"
                >
                  Close Mirror
                </Button>
                <Button
                  onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
                  variant="divine"
                  size="lg"
                  className="hover-scale"
                >
                  Ask Lucene for Real Truth →
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mirror;