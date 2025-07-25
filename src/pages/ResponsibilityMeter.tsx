import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Scale, Target } from "lucide-react";

const ResponsibilityMeter = () => {
  const [situation, setSituation] = useState("");
  const [analysis, setAnalysis] = useState<{
    yourChoice: number;
    actualCircumstance: number;
    breakdown: string[];
  } | null>(null);
  const navigate = useNavigate();

  const analyzeSituation = () => {
    if (!situation.trim()) return;
    
    // Weighted toward user responsibility (reality check)
    const yourChoice = Math.floor(Math.random() * 30) + 65; // 65-95%
    const actualCircumstance = 100 - yourChoice;
    
    const breakdown = getResponsibilityBreakdown(yourChoice);
    
    setAnalysis({
      yourChoice,
      actualCircumstance,
      breakdown
    });
  };

  const getResponsibilityBreakdown = (choicePercentage: number) => {
    const breakdowns = {
      high: [ // 80%+
        "You created this situation through repeated choices",
        "Your boundaries (or lack thereof) enabled this",
        "You stayed in a pattern you recognized was harmful",
        "You ignored red flags because it was comfortable"
      ],
      medium: [ // 65-79%
        "You had multiple exit points but didn't take them",
        "Your people-pleasing contributed to this outcome",
        "You chose comfort over addressing the real issue",
        "You avoided difficult conversations that could have prevented this"
      ],
      lower: [ // 65%
        "External factors played a larger role here",
        "Your choices contributed but weren't the primary driver",
        "You responded to circumstances you didn't create",
        "Limited options due to external constraints"
      ]
    };
    
    const level = choicePercentage >= 80 ? 'high' : choicePercentage >= 70 ? 'medium' : 'lower';
    return breakdowns[level].slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-sacred/20 p-4">
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
            <span className="bg-gradient-to-r from-sacred to-divine bg-clip-text text-transparent">
              Responsibility Meter
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Stop complaining. Start owning. Get the truth about what you actually control.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {!analysis ? (
            <div className="bg-card/50 backdrop-blur-sm border border-sacred/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                What Are You Complaining About?
              </h2>
              
              <Textarea
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
                placeholder="My boss always... / They never... / I'm stuck because... / It's not fair that..."
                className="min-h-32 text-lg bg-background/50 border-sacred/30 focus:border-sacred"
              />
              
              <Button
                onClick={analyzeSituation}
                disabled={!situation.trim()}
                variant="default"
                size="lg"
                className="w-full mt-6 text-lg py-6 bg-sacred hover:bg-sacred/80"
              >
                <Scale className="w-5 h-5 mr-2" />
                Measure Your Responsibility
              </Button>
            </div>
          ) : (
            <div className="space-y-6 animate-scale-in">
              <div className="bg-card/50 backdrop-blur-sm border border-sacred/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-sacred mb-6 text-center">Responsibility Analysis</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-destructive">Your Choices</span>
                      <span className="text-2xl font-bold text-destructive">{analysis.yourChoice}%</span>
                    </div>
                    <Progress value={analysis.yourChoice} className="h-3 mb-1" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-muted-foreground">Actual Circumstances</span>
                      <span className="text-2xl font-bold text-muted-foreground">{analysis.actualCircumstance}%</span>
                    </div>
                    <Progress value={analysis.actualCircumstance} className="h-3" />
                  </div>
                </div>
              </div>
              
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8">
                <h3 className="text-xl font-bold text-destructive mb-4">How You Created This:</h3>
                <ul className="space-y-3">
                  {analysis.breakdown.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Target className="w-4 h-4 mt-1 text-destructive flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-sacred/10 border border-sacred/30 rounded-lg p-8">
                <h3 className="text-xl font-bold text-sacred mb-4">Next Move:</h3>
                <p className="text-lg text-foreground">
                  {analysis.yourChoice >= 80
                    ? "You have significant control here. Stop complaining and start choosing differently."
                    : analysis.yourChoice >= 70
                    ? "You have substantial influence. Focus on what you can control and act on it."
                    : "External factors are significant, but you still have choices. Use them."
                  }
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button
                  onClick={() => {setAnalysis(null); setSituation("");}}
                  variant="outline"
                  className="flex-1 border-sacred/30 text-sacred hover:bg-sacred/10"
                >
                  Analyze Another Situation
                </Button>
                <Button
                  onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
                  variant="divine"
                  className="flex-1"
                >
                  Own It with Lucene →
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsibilityMeter;