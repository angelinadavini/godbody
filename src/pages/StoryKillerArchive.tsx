import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2, FileText, Target } from "lucide-react";

interface Story {
  id: string;
  text: string;
  breakdown: string[];
  deletedAt?: Date;
}

const StoryKillerArchive = () => {
  const [storyText, setStoryText] = useState("");
  const [stories, setStories] = useState<Story[]>([]);
  const [currentBreakdown, setCurrentBreakdown] = useState<string[] | null>(null);
  const navigate = useNavigate();

  const analyzeStory = () => {
    if (!storyText.trim()) return;
    
    const breakdown = generateBreakdown(storyText);
    const newStory: Story = {
      id: Date.now().toString(),
      text: storyText,
      breakdown
    };
    
    setStories([newStory, ...stories]);
    setCurrentBreakdown(breakdown);
    setStoryText("");
  };

  const generateBreakdown = (story: string): string[] => {
    const breakdownTemplates = [
      "This story positions you as powerless when you have choices you're not acknowledging.",
      "You're using this narrative to avoid taking responsibility for your part in the situation.",
      "This victim story protects you from the discomfort of changing your behavior.",
      "You're focusing on what others did to avoid looking at what you didn't do.",
      "This story serves to justify staying in a situation you have the power to leave.",
      "You're using this narrative to get sympathy instead of taking action.",
      "This story allows you to complain without committing to solutions.",
      "You're making yourself the victim to avoid being accountable for your choices.",
      "This narrative keeps you stuck by focusing on what you can't control.",
      "You're using this story to avoid the hard work of setting boundaries."
    ];
    
    // Return 3-4 random breakdowns
    const shuffled = [...breakdownTemplates].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * 2) + 3);
  };

  const deleteStory = (id: string) => {
    setStories(stories.map(story => 
      story.id === id 
        ? { ...story, deletedAt: new Date() }
        : story
    ));
  };

  const activeStories = stories.filter(story => !story.deletedAt);
  const deletedStories = stories.filter(story => story.deletedAt);

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
              Story Killer Archive
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Upload victim stories. Get systematic breakdown. Track your liberation progress.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Story Input */}
          <div className="bg-card/50 backdrop-blur-sm border border-destructive/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Submit Your Victim Story
            </h2>
            
            <Textarea
              value={storyText}
              onChange={(e) => setStoryText(e.target.value)}
              placeholder="I'm stuck because... / They always... / It's not fair that... / I have no choice but..."
              className="min-h-32 text-lg bg-background/50 border-destructive/30 focus:border-destructive mb-6"
            />
            
            <Button
              onClick={analyzeStory}
              disabled={!storyText.trim()}
              variant="destructive"
              size="lg"
              className="w-full text-lg py-6"
            >
              <Target className="w-5 h-5 mr-2" />
              Kill This Story
            </Button>
          </div>

          {/* Current Breakdown */}
          {currentBreakdown && (
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8 animate-scale-in">
              <h3 className="text-xl font-bold text-destructive mb-6">Story Breakdown:</h3>
              <div className="space-y-4">
                {currentBreakdown.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Target className="w-4 h-4 mt-1 text-destructive flex-shrink-0" />
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 text-center">
              <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{activeStories.length}</div>
              <div className="text-sm text-muted-foreground">Active Stories</div>
            </div>
            
            <div className="bg-divine/10 border border-divine/30 rounded-lg p-6 text-center">
              <Trash2 className="w-8 h-8 text-divine mx-auto mb-3" />
              <div className="text-2xl font-bold text-divine">{deletedStories.length}</div>
              <div className="text-sm text-muted-foreground">Stories Killed</div>
            </div>
            
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <Target className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-accent">
                {stories.length > 0 ? Math.round((deletedStories.length / stories.length) * 100) : 0}%
              </div>
              <div className="text-sm text-muted-foreground">Liberation Rate</div>
            </div>
          </div>

          {/* Active Stories */}
          {activeStories.length > 0 && (
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Stories Still Running</h3>
              <div className="space-y-4">
                {activeStories.map((story) => (
                  <div key={story.id} className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                    <p className="text-foreground mb-4">"{story.text}"</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {story.breakdown.length} excuses identified
                      </span>
                      <Button
                        onClick={() => deleteStory(story.id)}
                        variant="destructive"
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Story
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="text-center">
            <Button
              onClick={() => window.open('https://chatgpt.com/g/g-6883265829c881918ad03e9703373540-lucene', '_blank')}
              variant="divine"
              size="lg"
              className="text-lg px-8 py-6"
            >
              Get Deeper Analysis from Lucene →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryKillerArchive;