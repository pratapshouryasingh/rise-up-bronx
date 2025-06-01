
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-2 text-sm font-medium text-purple-800 mb-8">
            🚀 Empowering Bronx Youth Through Digital Innovation
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Rise Up with{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              YouthRise
            </span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Connect with mentors, master new skills, and unlock opportunities in your community. 
            YouthRise helps Bronx teens and young adults build their future through mentorship, 
            learning tracks, and local connections.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Mentorship</h3>
              <p className="text-sm text-gray-600">Connect with vetted mentors in coding, design, business, and more</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 mb-4">
                <BookOpen className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Learning Tracks</h3>
              <p className="text-sm text-gray-600">Follow curated pathways to build real skills and complete projects</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gamified Progress</h3>
              <p className="text-sm text-gray-600">Earn badges, build streaks, and celebrate achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
