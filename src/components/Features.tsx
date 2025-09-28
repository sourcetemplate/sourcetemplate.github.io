import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Users, Target, Zap, Shield, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Rapid Launch",
      description: "Get your product to market faster with our streamlined launch process and pre-built templates.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community Support",
      description: "Connect with fellow entrepreneurs, mentors, and experts who are ready to help you succeed.",
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Market Validation",
      description: "Test your ideas with real users before investing time and resources into full development.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to optimize your product strategy and marketing approach.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime ensure your launch goes smoothly.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Growth Analytics",
      description: "Track your progress with detailed analytics and actionable insights for continuous improvement.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="hero-gradient bg-clip-text text-transparent">
              Launch Successfully
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, community support, and insights 
            you need to turn your idea into a thriving business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-shadow hover:scale-105 smooth-transition border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
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