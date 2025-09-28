import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get in touch via email for detailed inquiries",
      contact: "hello@sourcetemplate.github.io"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Community Forum",
      description: "Join our community discussions and get help",
      contact: "Visit Forums"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub Issues",
      description: "Report bugs or request features on GitHub",
      contact: "github.com/sourcetemplate"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      description: "We're a distributed team working globally",
      contact: "Remote Team"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions, suggestions, or need help? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={6}
                  />
                </div>
                <Button className="w-full hero-gradient text-white border-0">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-8">Other Ways to Reach Us</h2>
              </div>
              
              {contactMethods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="text-primary mt-1">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {method.description}
                      </p>
                      <p className="text-primary font-medium">{method.contact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;