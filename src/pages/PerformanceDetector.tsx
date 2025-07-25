import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Theater, User } from "lucide-react";

const PerformanceDetector = () => {
  const [checkInText, setCheckInText] = useState("");
  const [results, setResults] = useState<{
    authenticityScore: number;
    performancePatterns: string[];
    audience: string;
  } | null>(null);
  const navigate = useNavigate();

  const analyzePerformance = () => {
    if (!checkInText.trim()) return;
    
    // Simulate analysis
    const authenticityScore = Math.floor(Math.random() * 40) + 10; // 10-50% range for most people
    const patterns = getPerformancePatterns();
    const audience = getDetectedAudience();
    
    setResults({
      authenticityScore,
      performancePatterns: patterns,
      audience
    });
  };

  const getPerformancePatterns = () => {
    const allPatterns = [
      "Seeking approval through achievements",
      "Modifying opinions based on who's listening",
      "Downplaying success to avoid standing out",
      "Agreeing when you actually disagree",
      "Performing helplessness to get rescue",
      "Acting busier than you are for status",
      "Pretending to understand when you don't",
      "Changing personality based on the group"
    ];
    return allPatterns.slice(0, Math.floor(Math.random() * 3) + 2);
  };

  const getDetectedAudience = () => {
    const audiences = [
      "Parents/Family expectations",
      "Social media followers",
      "Work colleagues/boss",
      "Romantic partner",
      "Friend group",
      "Society's standards",
      "Your imagined 'perfect' self"
    ];
    return audiences[Math.floor(Math.random() * audiences.length)];
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
            <span className="bg-gradient-to-r from-accent to-sacred bg-clip-text text-transparent">
              Performance Detector
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Daily authenticity scan. Who were you performing for today?
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {!results ? (
            <div className="bg-card/50 backdrop-blur-sm border border-accent/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Today's Authenticity Check
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="text-sm text-muted-foreground">
                  <p>• When did you agree when you wanted to disagree?</p>
                  <p>• Who did you try to impress today?</p>
                  <p>• What did you pretend to be/know/feel?</p>
                  <p>• When did you hold back your real thoughts?</p>
                </div>
              </div>
              
              <Textarea
                value={checkInText}
                onChange={(e) => setCheckInText(e.target.value)}
                placeholder="Today I performed when... / I was trying to impress... / I wasn't authentic when..."
                className="min-h-32 text-lg bg-background/50 border-accent/30 focus:border-accent"
              />
              
              <Button
                onClick={analyzePerformance}
                disabled={!checkInText.trim()}
                variant="default"
                size="lg"
                className="w-full mt-6 text-lg py-6 bg-accent hover:bg-accent/80"
              >
                <Theater className="w-5 h-5 mr-2" />
                Detect Performance Patterns
              </Button>
            </div>
          ) : (
            <div className="space-y-6 animate-scale-in">
              <div className="bg-card/50 backdrop-blur-sm border border-accent/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-accent mb-6 text-center">Authenticity Score</h3>
                <div className="flex items-center gap-4 mb-4">
                  <User className="w-6 h-6 text-accent" />
                  <Progress value={results.authenticityScore} className="flex-1" />
                  <span className="text-2xl font-bold text-accent">{results.authenticityScore}%</span>
                </div>
                <p className="text-center text-muted-foreground">
                  {results.authenticityScore < 30 
                    ? "Heavy performance mode detected. You're living for others."
                    : results.authenticityScore < 60
                    ? "Moderate performance. Some authentic moments mixed with people-pleasing."
                    : "Good authenticity. You're mostly being yourself."
                  }
                </p>
              </div>
              
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8">
                <h3 className="text-xl font-bold text-destructive mb-4">Performance Patterns Detected:</h3>
                <ul className="space-y-2">
                  {results.performancePatterns.map((pattern, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Theater className="w-4 h-4 mt-1 text-destructive flex-shrink-0" />
                      <span className="text-foreground">{pattern}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-8">
                <h3 className="text-xl font-bold text-accent mb-4">Primary Audience:</h3>
                <p className="text-lg text-foreground">You're performing for: <strong>{results.audience}</strong></p>
              </div>
              
              <div className="flex gap-4">
                <Button
                  onClick={() => {setResults(null); setCheckInText("");}}
                  variant="outline"
                  className="flex-1 border-accent/30 text-accent hover:bg-accent/10"
                >
                  New Check-In
                </Button>
                <Button
                  onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
                  variant="divine"
                  className="flex-1"
                >
                  Break the Performance →
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceDetector;