import ContactComponent from '@/components/contact';
import HeroSection from '@/components/hero-section';
import ProjectComponent from '@/components/projects';
import SkillsComponent from '@/components/skills';

const HomePage = () => {
  return (
    <main className="space-y-6">
      <HeroSection />
      <ProjectComponent />
      <SkillsComponent />
      <ContactComponent />
    </main>
  );
};

export default HomePage;
