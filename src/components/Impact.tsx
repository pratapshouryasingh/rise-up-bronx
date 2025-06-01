
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Lightbulb, ArrowRight } from "lucide-react";

const impactStats = [
  {
    icon: Users,
    number: "500+",
    label: "Youth Connected",
    description: "Young people matched with mentors"
  },
  {
    icon: Lightbulb,
    number: "25+",
    label: "Learning Tracks",
    description: "Curated pathways across various fields"
  },
  {
    icon: Heart,
    number: "150+",
    label: "Mentors",
    description: "Experienced professionals giving back"
  }
];

interface ImpactProps {
  onAuthClick: () => void;
}

const Impact = ({ onAuthClick }: ImpactProps) => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-white/20 text-white">
            🌟 Social Impact
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Transforming lives through{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              digital access
            </span>
          </h2>
          <p className="mt-4 text-lg text-purple-100 max-w-2xl mx-auto">
            YouthRise increases digital access and motivation, creating pathways to success 
            for Bronx youth while building stronger, more connected communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
                  <stat.icon className="h-8 w-8 text-purple-300" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold text-purple-100 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-purple-200 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to make a difference?
          </h3>
          <p className="text-purple-100 mb-8 max-w-xl mx-auto">
            Join YouthRise today and be part of a movement that's empowering the next 
            generation of leaders, creators, and innovators in the Bronx.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-purple-50"
              onClick={onAuthClick}
            >
              Join as a Youth
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={onAuthClick}
            >
              Become a Mentor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
