import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Heart, Share2 } from "lucide-react";

const Community = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechStart",
      avatar: "SC",
      content: "The community feedback helped me pivot my product idea and saved months of development time. Now we're profitable!",
      likes: 47,
      comments: 12,
    },
    {
      name: "Marcus Johnson",
      role: "CEO, InnovateCo",
      avatar: "MJ",
      content: "From idea validation to launch, this platform guided me through every step. The mentorship network is invaluable.",
      likes: 63,
      comments: 18,
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager, FutureApp",
      avatar: "ER",
      content: "The AI insights helped optimize our go-to-market strategy. We exceeded our launch goals by 200%!",
      likes: 89,
      comments: 24,
    },
  ];

  const stats = [
    { number: "50,000+", label: "Active Members" },
    { number: "10,000+", label: "Successful Launches" },
    { number: "500+", label: "Expert Mentors" },
    { number: "$2B+", label: "Revenue Generated" },
  ];

  return (
    <section id="community" className="py-24 feature-gradient">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Our Thriving{" "}
            <span className="hero-gradient bg-clip-text text-transparent">
              Innovation Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with entrepreneurs, share ideas, get feedback, and celebrate successes together. 
            Our community is your biggest competitive advantage.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Community Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-shadow border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 hover:text-red-500 smooth-transition">
                      <Heart className="h-4 w-4" />
                      <span>{testimonial.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500 smooth-transition">
                      <MessageCircle className="h-4 w-4" />
                      <span>{testimonial.comments}</span>
                    </button>
                  </div>
                  <button className="hover:text-primary smooth-transition">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="hero-gradient text-white border-0 button-shadow hover:scale-105 bounce-transition text-lg px-8"
          >
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;