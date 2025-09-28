
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Calendar, Award } from "lucide-react";

const Community = () => {
  const communityFeatures = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Discord Community",
      description: "Join our active Discord server with thousands of developers sharing knowledge and helping each other.",
      action: "Join Discord"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Forums",
      description: "Participate in discussions, ask questions, and share your projects with the community.",
      action: "Visit Forums"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Events",
      description: "Attend workshops, webinars, and community meetups to learn and network.",
      action: "View Events"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Mentorship",
      description: "Connect with experienced developers who can guide you in your learning journey.",
      action: "Find Mentors"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Join Our Community
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with thousands of developers, designers, and creators building amazing projects with SourceTemplate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {communityFeatures.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full hero-gradient text-white border-0">
                    {feature.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of developers who are already building amazing projects with our templates.
            </p>
            <Button className="hero-gradient text-white border-0 button-shadow">
              Join Community
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
