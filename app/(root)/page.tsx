import ContactComponent from '@/components/contact';
import HeroSection from '@/components/hero-section';
import ProjectComponent from '@/components/projects';
import SkillsComponent from '@/components/skills';

const HomePage = () => {
  return (
    <main className="space-y-8">
      <section id="home" className="space-y-6 scroll-mt-32">
        <HeroSection />
      </section>
      <section id="projects" className="scroll-mt-32">
        <ProjectComponent />
      </section>
      <section id="skills" className="space-y-4 scroll-mt-32">
        <SkillsComponent />
      </section>
      <section id="contact" className="p-6 space-y-3 bg-muted scroll-mt-32">
        <ContactComponent />
      </section>
    </main>
  );
};

export default HomePage;
