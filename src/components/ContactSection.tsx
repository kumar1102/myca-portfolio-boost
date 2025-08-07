import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, FileText } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-background" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to discuss your accounting and financial needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 shadow-elegant bg-card/80 backdrop-blur-sm">
              <h3 className="text-xl font-semibold font-display mb-6 text-foreground">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">+91 9162072318</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/5">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">snehashaw6207@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-lg bg-success/5">
                  <MapPin className="w-5 h-5 text-success" />
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-muted-foreground">
                      79/5k, Raja Naba Krishna Street<br />
                      Near KMC Building, Laha Colony Math<br />
                      Hathibagan, Kolkata 700005
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Services Offered */}
            <Card className="p-6 shadow-elegant bg-card/80 backdrop-blur-sm">
              <h3 className="text-xl font-semibold font-display mb-4 text-foreground">
                Services Offered
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Tax Planning", "Auditing", "GST Filing", "Book Keeping",
                  "Financial Analysis", "Business Consulting", "Compliance", "Risk Assessment"
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg bg-primary/5 text-sm text-center font-medium text-primary border border-primary/10"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-elegant bg-card/80 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full resize-none"
                  placeholder="Tell me about your accounting or financial needs..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;