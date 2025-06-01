
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Impact from '@/components/Impact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Hero />
      <Features />
      <HowItWorks />
      <Impact />
    </div>
  );
};

export default Index;
