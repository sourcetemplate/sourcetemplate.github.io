import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Github, Mail } from "lucide-react";

interface AuthDialogProps {
  children: React.ReactNode;
  type: "signin" | "signup";
}

const AuthDialog = ({ children, type }: AuthDialogProps) => {
  const [isSignUp, setIsSignUp] = useState(type === "signup");

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Social Login */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>
            <Button variant="outline" className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <div className="space-y-4">
            {isSignUp && (
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            
            <Button className="w-full hero-gradient text-white border-0">
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </div>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </span>
            <Button
              variant="link"
              className="pl-1 text-primary"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;