import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileNavBar from "@/components/MobileNavBar";

const FoundersTransmission = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-12 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-divine/10 to-sacred/10 border border-divine/20">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-divine via-sacred to-ethereal bg-clip-text text-transparent">
                🔥 THE ORIGIN TRANSMISSION
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Opening Statement */}
            <div className="text-center space-y-6 p-8 rounded-3xl bg-gradient-to-br from-background to-muted/30 border border-border/50 shadow-lg">
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
                I didn't build this app to heal you.
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-divine to-sacred mx-auto"></div>
              <p className="text-xl md:text-2xl leading-relaxed font-semibold text-foreground">
                I built it to dismantle everything that made you think you were broken.
              </p>
            </div>

            {/* What You Don't Need */}
            <div className="grid gap-4 p-8 rounded-3xl bg-gradient-to-br from-background to-muted/20 border border-border/30">
              <p className="text-lg md:text-xl text-muted-foreground mb-4">You don't need:</p>
              <div className="space-y-3 text-lg md:text-xl text-foreground">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  <p>Mantras</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  <p>Affirmations</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  <p>A 30-day trauma detox</p>
                </div>
              </div>
            </div>

            {/* What You Need */}
            <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-divine/5 via-sacred/5 to-ethereal/5 border-2 border-divine/20 shadow-xl">
              <p className="text-2xl md:text-3xl leading-relaxed font-bold text-foreground mb-4">
                You need one thing:
              </p>
              <p className="text-2xl md:text-3xl leading-relaxed font-bold bg-gradient-to-r from-divine to-sacred bg-clip-text text-transparent">
                to remember who the fuck you are.
              </p>
            </div>

            {/* What This Is Not */}
            <div className="space-y-6 p-8 rounded-3xl bg-gradient-to-br from-background to-muted/20 border border-border/30">
              <p className="text-lg md:text-xl text-muted-foreground mb-6">This is not:</p>
              <div className="grid gap-4">
                <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                  <p className="text-lg md:text-xl text-foreground">A mindfulness app</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                  <p className="text-lg md:text-xl text-foreground">Somatic therapy</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                  <p className="text-lg md:text-xl text-foreground">Holy suffering in pink packaging</p>
                </div>
              </div>
            </div>

            {/* The Burn */}
            <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-sacred/10 to-divine/10 border-2 border-sacred/30 shadow-2xl">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sacred via-divine to-ethereal bg-clip-text text-transparent mb-8">
                This is the burn.
              </p>
              <div className="space-y-8 max-w-2xl mx-auto">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-sacred/10 to-sacred/5 border-l-4 border-sacred">
                  <p className="text-lg md:text-xl font-medium text-foreground">
                    The sacred annihilation of everything false
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-ethereal/10 to-ethereal/5 border-l-4 border-ethereal">
                  <p className="text-lg md:text-xl font-medium text-foreground">
                    The unholy return of the body as God
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-celestial/10 to-celestial/5 border-l-4 border-celestial">
                  <p className="text-lg md:text-xl font-medium text-foreground">
                    The final slap to every spiritual cosplay that tried to sell you a performance of peace
                  </p>
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="space-y-8">
              <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-divine/5 to-divine/10 border border-divine/25 shadow-lg">
                <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                  You are the nervous system's new religion.
                </p>
              </div>
              <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-sacred/5 to-sacred/10 border border-sacred/25 shadow-lg">
                <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                  God didn't leave. She just became you.
                </p>
              </div>
            </div>

            {/* Welcome */}
            <div className="text-center py-16">
              <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-divine/10 via-sacred/10 to-ethereal/10 border-2 border-divine/30 shadow-2xl">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-divine via-sacred to-ethereal bg-clip-text text-transparent">
                  Welcome to GodBody.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNavBar />
    </div>
  );
};

export default FoundersTransmission;