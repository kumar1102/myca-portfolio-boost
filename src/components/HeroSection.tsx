import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile-hero.jpg";
import { Download, Mail, Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold font-display mb-4">
                <span className="text-foreground">Sneha</span>{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Kumari
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-primary mb-6">
                Chartered Accountant
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dedicated CA professional with expertise in taxation, auditing, and financial management. 
                Committed to delivering accurate financial solutions and building lasting client relationships.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 9162072318</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>snehashaw6207@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground sm:col-span-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Kolkata, West Bengal</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <Card className="p-8 shadow-elegant bg-card/80 backdrop-blur-sm">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Sneha Kumari - Chartered Accountant"
                  className="w-full max-w-sm rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold shadow-lg animate-float">
                  CA Professional
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;