
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User, Bell, Home, Users, BookOpen, Calendar, Trophy } from "lucide-react";
import { getUserBadges } from "@/utils/localStorage";

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const userBadges = getUserBadges();

  const navItems = [
    { id: "overview", label: "Dashboard", icon: Home },
    { id: "learning", label: "Learning", icon: BookOpen },
    { id: "mentors", label: "Mentors", icon: Users },
    { id: "opportunities", label: "Opportunities", icon: Trophy },
    { id: "events", label: "Events", icon: Calendar }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              YouthRise
            </h1>
            
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => onTabChange?.(item.id)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="bg-gradient-to-r from-purple-100 to-pink-100">
              🔥 {user.streak_days} day streak
            </Badge>
            
            <Badge variant="outline" className="bg-gradient-to-r from-yellow-100 to-orange-100">
              🏆 {userBadges.length} badges
            </Badge>
            
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">{user.name}</span>
            </div>
            
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
