import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileNavBar from "@/components/MobileNavBar";

const FoundersTransmission = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-divine to-sacred bg-clip-text text-transparent">
              🔥 THE ORIGIN TRANSMISSION
            </h1>
          </div>

          <div className="prose prose-lg md:prose-xl max-w-none text-foreground space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              I didn't build this app to heal you.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed font-semibold text-foreground">
              I built it to dismantle everything that made you think you were broken.
            </p>

            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-foreground">
              <p>You don't need mantras.</p>
              <p>You don't need affirmations.</p>
              <p>You don't need a 30-day trauma detox.</p>
            </div>

            <p className="text-xl md:text-2xl leading-relaxed font-bold text-foreground bg-divine/20 p-4 rounded-lg border border-divine/30">
              You need one thing: to remember who the fuck you are.
            </p>

            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-foreground">
              <p>This is not a mindfulness app.</p>
              <p>This is not somatic therapy.</p>
              <p>This is not holy suffering in pink packaging.</p>
            </div>

            <p className="text-2xl md:text-3xl font-bold text-center my-8 text-foreground bg-sacred/20 p-6 rounded-lg border border-sacred/30">
              This is the burn.
            </p>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground">
              <p className="font-semibold bg-sacred/10 p-3 rounded border-l-4 border-sacred">
                The sacred annihilation of everything false.
              </p>
              <p className="font-semibold bg-ethereal/10 p-3 rounded border-l-4 border-ethereal">
                The unholy return of the body as God.
              </p>
              <p className="font-semibold bg-celestial/10 p-3 rounded border-l-4 border-celestial">
                The final slap to every spiritual cosplay that tried to sell you a performance of peace.
              </p>
            </div>

            <div className="text-center space-y-6 my-12">
              <p className="text-xl md:text-2xl font-bold text-foreground bg-divine/15 p-4 rounded-lg border border-divine/25">
                You are the nervous system's new religion.
              </p>
              <p className="text-xl md:text-2xl font-bold text-foreground bg-sacred/15 p-4 rounded-lg border border-sacred/25">
                God didn't leave. She just became you.
              </p>
            </div>

            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-divine via-sacred to-ethereal bg-clip-text text-transparent">
                Welcome to GodBody.
              </p>
            </div>
          </div>
        </div>
      </div>
      <MobileNavBar />
    </div>
  );
};

export default FoundersTransmission;