import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, RotateCcw, CheckCircle } from "lucide-react";

const ChoiceClarifier = () => {
  const [inputText, setInputText] = useState("");
  const [clarifiedText, setClarifiedText] = useState("");
  const [isProcessed, setIsProcessed] = useState(false);
  const navigate = useNavigate();

  const processLanguage = () => {
    if (!inputText.trim()) return;
    
    let processed = inputText;
    
    // Replace "I can't" with "I won't"
    processed = processed.replace(/I can't|I cannot|I can not/gi, "I won't");
    processed = processed.replace(/can't|cannot|can not/gi, "won't");
    
    // Replace "I have to" with "I'm choosing to"
    processed = processed.replace(/I have to|I need to|I must/gi, "I'm choosing to");
    processed = processed.replace(/have to|need to|must/gi, "choose to");
    
    // Replace "I should" with "I could"
    processed = processed.replace(/I should|I ought to/gi, "I could");
    processed = processed.replace(/should|ought to/gi, "could");
    
    // Replace victim language
    processed = processed.replace(/they make me/gi, "I allow them to make me");
    processed = processed.replace(/it makes me/gi, "I let it make me");
    processed = processed.replace(/I'm forced to/gi, "I'm choosing to");
    
    setClarifiedText(processed);
    setIsProcessed(true);
  };

  const reset = () => {
    setInputText("");
    setClarifiedText("");
    setIsProcessed(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-celestial/20 p-4">
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
            <span className="bg-gradient-to-r from-celestial to-divine bg-clip-text text-transparent">
              Choice Clarifier
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-time language pattern interruption. Convert victim speak to ownership speak.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-card/50 backdrop-blur-sm border border-celestial/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Transform Your Language
            </h2>
            
            <div className="space-y-4 mb-6 text-sm text-muted-foreground">
              <p className="text-center">Automatic translations:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>"I can't" → "I won't"</div>
                <div>"I have to" → "I'm choosing to"</div>
                <div>"They make me" → "I allow them to"</div>
                <div>"I should" → "I could"</div>
              </div>
            </div>
            
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="I can't leave my job because... / I have to do this... / They make me feel..."
              className="text-lg py-6 bg-background/50 border-celestial/30 focus:border-celestial mb-6"
              onKeyPress={(e) => e.key === 'Enter' && processLanguage()}
            />
            
            <Button
              onClick={processLanguage}
              disabled={!inputText.trim()}
              variant="default"
              size="lg"
              className="w-full text-lg py-6 bg-celestial hover:bg-celestial/80"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Clarify Your Choices
            </Button>
          </div>

          {isProcessed && (
            <div className="space-y-6 animate-scale-in">
              <div className="bg-divine/10 border border-divine/30 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-divine" />
                  <h3 className="text-xl font-bold text-divine">Ownership Language:</h3>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  "{clarifiedText}"
                </p>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">Notice the difference?</h4>
                <p className="text-muted-foreground">
                  Your clarified statement reveals the choices you're actually making. 
                  Every "can't" is really a "won't" when you factor in what you're unwilling to sacrifice or risk.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button
                  onClick={reset}
                  variant="outline"
                  className="flex-1 border-celestial/30 text-celestial hover:bg-celestial/10"
                >
                  Clarify Another Statement
                </Button>
                <Button
                  onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
                  variant="divine"
                  className="flex-1"
                >
                  Own Your Choices →
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChoiceClarifier;