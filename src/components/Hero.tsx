import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import AdSense from "@/components/AdSense";

const Hero = () => {
  return (
    <>
      {/* AdSense Ad */}
      <div className="w-full bg-muted/10 py-4">
        <div className="container mx-auto px-4">
          <AdSense adSlot="4308038649" />
        </div>
      </div>

      <section className="pt-16 min-h-screen flex items-center feature-gradient">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-pulse">
                🚀 Now in Beta - Join the Community
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Launch Your{" "}
                <span className="hero-gradient bg-clip-text text-transparent">
                  Next Big Idea
                </span>{" "}
                with Confidence
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                Join thousands of innovators building the future. Our community-driven platform provides everything you need to validate, build, and launch your product successfully.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="hero-gradient text-white border-0 button-shadow hover:scale-105 bounce-transition text-lg px-8"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 hover:bg-primary/5 text-lg px-8"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start mt-12 space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Launches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Community</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden glow-primary">
                <img 
                  src={heroImage} 
                  alt="Product Launch Platform" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-xl animate-bounce">
                🎯 Validated Ideas
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white p-4 rounded-xl animate-pulse">
                💡 Innovation Hub
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;