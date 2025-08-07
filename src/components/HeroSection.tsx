import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground">Sneha</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Kumari
              </span>
            </h1>
            <h2 className="text-2xl lg:text-4xl font-medium text-primary mb-8">
              Chartered Accountant
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Dedicated CA professional with expertise in taxation, auditing, and financial management. 
              Committed to delivering accurate financial solutions and building lasting client relationships.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-foreground bg-card/50 backdrop-blur-sm p-4 rounded-lg shadow-elegant">
              <Phone className="w-5 h-5 text-primary" />
              <span>+91 9162072318</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-foreground bg-card/50 backdrop-blur-sm p-4 rounded-lg shadow-elegant">
              <Mail className="w-5 h-5 text-primary" />
              <span>snehashaw6207@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-foreground bg-card/50 backdrop-blur-sm p-4 rounded-lg shadow-elegant sm:col-span-2 lg:col-span-1">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Kolkata, West Bengal</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  );
};

export default HeroSection;