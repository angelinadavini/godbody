import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Scan, Mic } from "lucide-react";

const RealityCheckScanner = () => {
  const [problemText, setProblemText] = useState("");
  const [analysis, setAnalysis] = useState<{story: string, reality: string} | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const analyzeReality = () => {
    if (!problemText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis - in real app this would call AI
    setTimeout(() => {
      const analysisResults = {
        story: getStoryAnalysis(problemText),
        reality: getRealityAnalysis(problemText)
      };
      setAnalysis(analysisResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getStoryAnalysis = (text: string) => {
    const storyPatterns = [
      "You're telling yourself you're powerless when you're actually choosing to avoid discomfort.",
      "Your story is that circumstances control you. The reality is you're avoiding responsibility.",
      "You're painting yourself as a victim of situations you actively participate in creating.",
      "Your narrative is that you 'can't' when you mean you 'won't' because of the cost.",
      "You're telling yourself you have no options to avoid owning the hard choices."
    ];
    return storyPatterns[Math.floor(Math.random() * storyPatterns.length)];
  };

  const getRealityAnalysis = (text: string) => {
    const realityChecks = [
      "You have complete control over your response and next action. Choose.",
      "This situation exists because of your previous choices. Own it and decide your next move.",
      "You're responsible for your boundaries, standards, and decisions. Act accordingly.",
      "You created this pattern through repeated choices. Break the pattern with a different choice.",
      "You have more power here than you're admitting. Use it or stop complaining."
    ];
    return realityChecks[Math.floor(Math.random() * realityChecks.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-destructive/20 p-4">
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
            <span className="bg-gradient-to-r from-destructive to-divine bg-clip-text text-transparent">
              Reality Check Scanner
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Upload your "problem" and get the unfiltered truth about what you're actually choosing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {!analysis ? (
            <div className="bg-card/50 backdrop-blur-sm border border-destructive/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Describe Your "Problem"
              </h2>
              
              <Textarea
                value={problemText}
                onChange={(e) => setProblemText(e.target.value)}
                placeholder="I can't leave my job because... / They always... / I have to... / It's impossible because..."
                className="min-h-32 text-lg bg-background/50 border-destructive/30 focus:border-destructive"
              />
              
              <div className="flex gap-4 mt-6">
                <Button
                  onClick={analyzeReality}
                  disabled={!problemText.trim() || isAnalyzing}
                  variant="destructive"
                  size="lg"
                  className="flex-1 text-lg py-6"
                >
                  <Scan className="w-5 h-5 mr-2" />
                  {isAnalyzing ? "Scanning Reality..." : "Scan for Truth"}
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 border-destructive/30 text-destructive hover:bg-destructive/10"
                >
                  <Mic className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-scale-in">
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8">
                <h3 className="text-xl font-bold text-destructive mb-4">Your Story:</h3>
                <p className="text-lg text-foreground leading-relaxed">"{analysis.story}"</p>
              </div>
              
              <div className="bg-divine/10 border border-divine/30 rounded-lg p-8">
                <h3 className="text-xl font-bold text-divine mb-4">The Reality:</h3>
                <p className="text-lg text-foreground leading-relaxed">"{analysis.reality}"</p>
              </div>
              
              <div className="flex gap-4">
                <Button
                  onClick={() => {setAnalysis(null); setProblemText("");}}
                  variant="outline"
                  className="flex-1 border-destructive/30 text-destructive hover:bg-destructive/10"
                >
                  Scan Another Story
                </Button>
                <Button
                  onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
                  variant="divine"
                  className="flex-1"
                >
                  Deep Dive with Lucene →
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RealityCheckScanner;