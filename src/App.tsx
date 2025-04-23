import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import CompetitionsSection from './components/CompetitionsSection';
import HobbiesSection from './components/HobbiesSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <div className="relative min-h-screen bg-gradient-to-b from-neutral-50 to-white">
          <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <Header />
          <main>
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <CertificatesSection />
            <CompetitionsSection />
            <HobbiesSection />
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;