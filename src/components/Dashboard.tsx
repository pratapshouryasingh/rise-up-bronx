
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, BookOpen, Trophy, Calendar, ArrowRight } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  const quickStats = [
    { icon: Users, label: "Mentors Connected", value: user.role === 'youth' ? "2" : "8", color: "purple" },
    { icon: BookOpen, label: "Tracks Completed", value: "3", color: "pink" },
    { icon: Trophy, label: "Badges Earned", value: user.badges.length.toString(), color: "blue" },
    { icon: Calendar, label: "Events Attended", value: "5", color: "green" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.name}! 👋
        </h1>
        <p className="text-gray-600">
          {user.role === 'youth' 
            ? "Ready to continue your learning journey?" 
            : "Your mentees are waiting for your guidance!"
          }
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Learning Track */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Current Learning Track
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Learn to Build Mobile Apps</h3>
                <Badge variant="outline">Week 2 of 8</Badge>
              </div>
              <Progress value={25} className="h-2" />
              <p className="text-sm text-gray-600">
                Next: Introduction to React Native Components
              </p>
              <Button className="w-full">
                Continue Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Badges & Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Recent Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {user.badges.slice(0, 4).map((badge, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                    <Trophy className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium capitalize">{badge.replace('-', ' ')}</p>
                    <p className="text-xs text-gray-500">Earned recently</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
