import ContactComponent from '@/components/contact';
import HeroSection from '@/components/hero-section';
import SkillsComponent from '@/components/skills';

const HomePage = () => {
  return (
    <main className="space-y-6">
      <HeroSection />
      <SkillsComponent />
      <ContactComponent />
    </main>
  );
};

export default HomePage;
