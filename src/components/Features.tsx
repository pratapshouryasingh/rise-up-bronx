
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Calendar, Award, MessageSquare, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Mentor Matching",
    description: "Get paired with experienced mentors based on your interests and career goals",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: BookOpen,
    title: "Learning Tracks",
    description: "Follow structured pathways in coding, design, entrepreneurship, and more",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600"
  },
  {
    icon: Calendar,
    title: "Opportunity Feed",
    description: "Discover local events, internships, scholarships, and workshops in the Bronx",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: Award,
    title: "Gamified Progress",
    description: "Earn badges, maintain streaks, and compete on leaderboards",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    icon: MessageSquare,
    title: "Project Wall",
    description: "Share your work, get feedback, and inspire others in the community",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: TrendingUp,
    title: "Career Guidance",
    description: "AI-powered career advice and personalized recommendations",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🛠️ Key Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              thrive
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            YouthRise combines mentorship, learning, and community to create the ultimate 
            platform for youth development in the Bronx.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
