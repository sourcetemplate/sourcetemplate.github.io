import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Download, Palette } from "lucide-react";

const Documentation = () => {
  const sections = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Getting Started",
      description: "Learn the basics of using SourceTemplate",
      items: ["Installation Guide", "Quick Start", "Project Structure", "Configuration"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Development",
      description: "Advanced development techniques and best practices",
      items: ["Component Library", "Styling Guide", "State Management", "Testing"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Customization",
      description: "Make templates your own with customization options",
      items: ["Theme System", "Color Schemes", "Typography", "Layout Options"]
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Deployment",
      description: "Deploy your projects to production",
      items: ["Build Process", "Hosting Options", "Performance", "SEO Optimization"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know to get started with SourceTemplate and build amazing projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {section.icon}
                  </div>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a href="#" className="text-muted-foreground hover:text-foreground smooth-transition block py-1">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    View Section
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Quick Links</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline">
                API Reference
              </Button>
              <Button variant="outline">
                Examples Gallery
              </Button>
              <Button variant="outline">
                Video Tutorials
              </Button>
              <Button className="hero-gradient text-white border-0">
                GitHub Repository
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;