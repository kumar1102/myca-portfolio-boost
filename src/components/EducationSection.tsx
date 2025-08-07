import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

interface Education {
  institution: string;
  qualification: string;
  year: string;
  score?: string;
  status?: string;
}

const educationData: Education[] = [
  {
    institution: "Seth Anandram Jaipuria College (Calcutta University)",
    qualification: "B.COM(HONS.)",
    year: "2023",
    score: "8 CGPA"
  },
  {
    institution: "Institute of Chartered Accountant of India",
    qualification: "CA Intermediate - Group 1",
    year: "2023",
    status: "Cleared"
  },
  {
    institution: "Institute of Chartered Accountant of India",
    qualification: "CA Intermediate - Group 2",
    year: "2023",
    status: "Appeared"
  },
  {
    institution: "Institute of Chartered Accountant of India",
    qualification: "CA Foundation",
    year: "2020",
    status: "Cleared"
  },
  {
    institution: "Jawahar Navodaya Vidyalaya",
    qualification: "12th Standard",
    year: "2019",
    score: "92.25%"
  },
  {
    institution: "Jawahar Navodaya Vidyalaya",
    qualification: "10th Standard",
    year: "2017",
    score: "10 CGPA"
  }
];

const EducationSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic journey in accounting and finance
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        {edu.qualification}
                      </h3>
                      <p className="text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </div>
                  
                  {edu.score && (
                    <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                      <Award className="w-3 h-3 mr-1" />
                      {edu.score}
                    </Badge>
                  )}
                  
                  {edu.status && (
                    <Badge 
                      variant={edu.status === "Cleared" ? "default" : "secondary"}
                      className={edu.status === "Cleared" ? "bg-primary" : ""}
                    >
                      {edu.status}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;