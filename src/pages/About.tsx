import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Zap, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community First",
      description: "We believe in the power of community and open collaboration."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Quality Focus",
      description: "Every template is crafted with attention to detail and best practices."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead of trends to provide cutting-edge solutions."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Open Source",
      description: "We believe in transparency and giving back to the community."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              About SourceTemplate
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to democratize web development by providing high-quality, 
              open-source templates that help developers and businesses launch faster.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  SourceTemplate was born from the frustration of starting projects from scratch every time. 
                  We noticed that developers and designers were repeatedly building the same components, 
                  layouts, and patterns. Our founders, passionate about open source and community-driven development, 
                  decided to create a platform where high-quality templates could be shared, customized, and improved collectively.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  What started as a small collection of personal templates has grown into a comprehensive 
                  library used by thousands of developers worldwide. We're proud to be part of the open-source 
                  ecosystem and continue to contribute back to the community that has supported us.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto text-primary mb-4">
                      {value.icon}
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're always looking for passionate developers, designers, and contributors 
              to help us build the future of web development templates.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;