import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Lightbulb } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon: any;
  category: string;
}

const achievementsData: Achievement[] = [
  {
    title: "National Athletics Achievement",
    description: "1st position in creative writing and selected for business ideas in start up India program in district",
    icon: Trophy,
    category: "Leadership"
  },
  {
    title: "District Recognition",
    description: "Got award from district magistrate for being in district top 10 in 12th standard",
    icon: Award,
    category: "Academic"
  },
  {
    title: "Creative Excellence",
    description: "National level recognition in athletics event javelin throw",
    icon: Star,
    category: "Sports"
  },
  {
    title: "Business Innovation",
    description: "Selected for startup ideas program showcasing entrepreneurial thinking",
    icon: Lightbulb,
    category: "Innovation"
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>{" "}
            <span className="text-foreground">&</span>{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Awards</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Recognition for excellence in academics, sports, and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up group border-l-4 border-l-accent"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-semibold text-lg text-foreground">
                        {achievement.title}
                      </h3>
                      <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                        {achievement.category}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Highlights */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <Card className="p-6 text-center shadow-elegant bg-primary/5 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years of Education Excellence</div>
          </Card>
          
          <Card className="p-6 text-center shadow-elegant bg-accent/5 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">4</div>
            <div className="text-sm text-muted-foreground">Major Achievements</div>
          </Card>
          
          <Card className="p-6 text-center shadow-elegant bg-success/5 border-success/20">
            <div className="text-3xl font-bold text-success mb-2">92.25%</div>
            <div className="text-sm text-muted-foreground">Highest Academic Score</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;