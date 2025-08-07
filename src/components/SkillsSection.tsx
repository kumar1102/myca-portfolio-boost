import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calculator, TrendingUp, FileText, Users, Target, Zap } from "lucide-react";

interface Skill {
  category: string;
  icon: any;
  skills: string[];
  color: string;
}

const skillsData: Skill[] = [
  {
    category: "Technical Skills",
    icon: Calculator,
    skills: ["SAP", "Tally", "MS Office", "Excel Advanced", "Financial Modeling"],
    color: "primary"
  },
  {
    category: "Professional Expertise",
    icon: TrendingUp,
    skills: ["Taxation", "GST", "Auditing", "Financial Analysis", "Book Keeping"],
    color: "accent"
  },
  {
    category: "Communication",
    icon: FileText,
    skills: ["Financial Reporting", "Client Relations", "Presentation", "Documentation"],
    color: "success"
  },
  {
    category: "Personal Qualities",
    icon: Target,
    skills: ["Team Leadership", "Problem Solving", "Attention to Detail", "Adaptability"],
    color: "primary"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive skill set in accounting, taxation, and financial management
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <Card 
                key={index}
                className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-display">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Professional Objective */}
        <Card className="mt-12 p-8 shadow-elegant bg-card/80 backdrop-blur-sm border-l-4 border-l-accent">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold font-display mb-3 text-foreground">
                Professional Objective
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To enhance my professional skills, capabilities and knowledge in an organization which recognizes 
                the value of hard work and trusts me with responsibilities and challenges.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;