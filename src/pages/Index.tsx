
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Impact from '@/components/Impact';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';
import AuthModal from '@/components/AuthModal';

const Index = () => {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <Navbar />
        <Dashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Hero onAuthClick={() => setShowAuthModal(true)} />
      <Features />
      <HowItWorks />
      <Impact onAuthClick={() => setShowAuthModal(true)} />
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </div>
  );
};

export default Index;
