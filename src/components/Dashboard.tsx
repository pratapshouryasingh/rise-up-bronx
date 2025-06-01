
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, BookOpen, Trophy, Calendar, ArrowRight, Star, MapPin, Clock, Bookmark, ExternalLink } from "lucide-react";
import { staticMentors, staticLearningTracks, staticOpportunities, staticEvents } from "@/data/staticData";
import { 
  getUserProgress, 
  updateUserProgress, 
  getTrackProgress,
  toggleBookmarkOpportunity,
  isOpportunityBookmarked,
  toggleEventRegistration,
  isEventRegistered 
} from "@/utils/localStorage";

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  if (!user) return null;

  const quickStats = [
    { icon: Users, label: "Mentors Connected", value: user.role === 'youth' ? "2" : "8", color: "purple" },
    { icon: BookOpen, label: "Tracks Completed", value: "3", color: "pink" },
    { icon: Trophy, label: "Badges Earned", value: user.badges.length.toString(), color: "blue" },
    { icon: Calendar, label: "Events Attended", value: "5", color: "green" }
  ];

  const handleLessonComplete = (trackId: string, lessonId: string) => {
    const currentProgress = getTrackProgress(trackId);
    const track = staticLearningTracks.find(t => t.id === trackId);
    if (!track) return;

    const completedLessons = currentProgress?.completedLessons || [];
    if (!completedLessons.includes(lessonId)) {
      completedLessons.push(lessonId);
      const progress = (completedLessons.length / track.lessons.length) * 100;
      updateUserProgress(trackId, progress, completedLessons);
    }
  };

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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <h3 className="font-semibold">{staticLearningTracks[1].title}</h3>
                    <Badge variant="outline">Week 2 of {staticLearningTracks[1].duration_weeks}</Badge>
                  </div>
                  <Progress value={getTrackProgress(staticLearningTracks[1].id)?.progress || staticLearningTracks[1].progress} className="h-2" />
                  <p className="text-sm text-gray-600">
                    Next: {staticLearningTracks[1].lessons.find(l => !getTrackProgress(staticLearningTracks[1].id)?.completedLessons?.includes(l.id))?.title || staticLearningTracks[1].lessons[0].title}
                  </p>
                  <Button className="w-full" onClick={() => setActiveTab("learning")}>
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
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staticLearningTracks.map((track) => {
              const userProgress = getTrackProgress(track.id);
              const progress = userProgress?.progress || track.progress;
              const completedLessons = userProgress?.completedLessons || [];

              return (
                <Card key={track.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{track.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{track.description}</p>
                      </div>
                      <Badge variant="outline">{track.difficulty}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{track.duration_weeks} weeks</span>
                      <span className="font-medium">{Math.round(progress)}% complete</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Lessons:</h4>
                      {track.lessons.map((lesson) => (
                        <div key={lesson.id} className="flex items-center justify-between">
                          <span className={`text-sm ${completedLessons.includes(lesson.id) ? 'text-green-600' : 'text-gray-600'}`}>
                            {lesson.title}
                          </span>
                          <Button
                            size="sm"
                            variant={completedLessons.includes(lesson.id) ? "default" : "outline"}
                            onClick={() => handleLessonComplete(track.id, lesson.id)}
                          >
                            {completedLessons.includes(lesson.id) ? "✓" : "Start"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="mentors" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staticMentors.map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{mentor.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{mentor.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{mentor.total_mentees} mentees</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{mentor.bio}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {mentor.expertise.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4" />
                          {mentor.location}
                        </div>
                        <Button size="sm">Connect</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staticOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{opportunity.title}</h3>
                        <Badge variant="outline" className="mt-1">
                          {opportunity.type}
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleBookmarkOpportunity(opportunity.id)}
                      >
                        <Bookmark className={`h-4 w-4 ${isOpportunityBookmarked(opportunity.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    
                    <p className="text-sm text-gray-600">{opportunity.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        {opportunity.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {opportunity.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-gray-400" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full" asChild>
                      <a href={opportunity.external_link} target="_blank" rel="noopener noreferrer">
                        Apply Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staticEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">{event.title}</h3>
                      <Badge variant="outline" className="mt-1">
                        {event.category}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600">{event.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        {event.attendees} attendees
                      </div>
                    </div>

                    <Button 
                      className="w-full"
                      variant={isEventRegistered(event.id) ? "outline" : "default"}
                      onClick={() => toggleEventRegistration(event.id)}
                    >
                      {isEventRegistered(event.id) ? "Registered ✓" : "Register"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
