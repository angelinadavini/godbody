import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Programs = () => {
  const programs = [
    {
      title: "Divine Beginner",
      price: "$29",
      period: "/month",
      description: "Perfect for souls beginning their transformation journey",
      features: [
        "Basic workout programs",
        "Guided meditation sessions",
        "Community access",
        "Weekly progress tracking",
        "Mobile app access"
      ],
      popular: false,
    },
    {
      title: "Celestial Warrior",
      price: "$59",
      period: "/month",
      description: "For dedicated beings ready to unlock their potential",
      features: [
        "Advanced fitness programs",
        "Personalized meal plans",
        "1-on-1 coaching sessions",
        "Priority community support",
        "Advanced analytics",
        "Exclusive workshops"
      ],
      popular: true,
    },
    {
      title: "Sacred Deity",
      price: "$99",
      period: "/month",
      description: "The ultimate transformation experience for divine souls",
      features: [
        "Custom program design",
        "Daily coaching support",
        "VIP community access",
        "Wellness retreats included",
        "Supplement guidance",
        "24/7 expert support",
        "Personal transformation coach"
      ],
      popular: false,
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-celestial to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sacred to-divine bg-clip-text text-transparent">
              Choose Your Path
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the divine program that aligns with your current journey and transformation goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`relative bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                program.popular 
                  ? 'border-divine border-2 shadow-divine' 
                  : 'border-border hover:border-divine/30'
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-divine to-accent text-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {program.title}
                </CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-divine">{program.price}</span>
                  <span className="text-muted-foreground">{program.period}</span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-divine rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-6">
                <Button 
                  variant={program.popular ? "divine" : "celestial"} 
                  className="w-full text-base"
                  size="lg"
                >
                  Start Your Journey
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;