
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Rocket, Target } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up & Build Profile",
    description: "Create your profile and tell us about your interests, goals, and what you want to learn",
    color: "from-purple-500 to-purple-600",
    step: "01"
  },
  {
    icon: Search,
    title: "Get Matched",
    description: "Our algorithm connects you with mentors and learning tracks that fit your interests",
    color: "from-pink-500 to-pink-600",
    step: "02"
  },
  {
    icon: Rocket,
    title: "Start Learning",
    description: "Begin your learning journey with interactive content, projects, and mentor guidance",
    color: "from-blue-500 to-blue-600",
    step: "03"
  },
  {
    icon: Target,
    title: "Achieve Goals",
    description: "Complete projects, earn badges, and unlock new opportunities in your community",
    color: "from-green-500 to-green-600",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🚀 How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your journey to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              success
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with YouthRise is simple. Follow these four steps to begin 
            your transformative learning journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 z-0" />
              )}
              
              <Card className="relative z-10 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
