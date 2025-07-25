import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Divine Fitness",
      description: "Sacred workouts designed to honor your body temple with strength, flexibility, and endurance programs.",
      icon: "💪",
    },
    {
      title: "Celestial Mindfulness",
      description: "Meditation and breathing practices to align your inner divine energy with universal consciousness.",
      icon: "🧘‍♀️",
    },
    {
      title: "Sacred Nutrition",
      description: "Nourish your vessel with divine meal plans and nutritional guidance for optimal wellness.",
      icon: "🌱",
    },
    {
      title: "Community of Gods",
      description: "Connect with like-minded souls on their journey to physical and spiritual transformation.",
      icon: "👥",
    },
    {
      title: "Wellness Tracking",
      description: "Monitor your divine progression with detailed analytics and personalized insights.",
      icon: "📊",
    },
    {
      title: "Expert Guidance",
      description: "Learn from certified wellness priests and fitness deities who understand your sacred journey.",
      icon: "⭐",
    },
  ];

  return (
    <section id="wellness" className="py-20 bg-gradient-to-b from-background to-celestial">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-divine to-sacred bg-clip-text text-transparent">
              Elevate Every Aspect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your mind, body, and spirit through our comprehensive wellness ecosystem designed for divine beings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-divine/10 hover:border-divine/30 transition-all duration-300 hover:shadow-divine hover:scale-105">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;