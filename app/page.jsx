import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import SideRail from '@/components/SideRail';
import DotField from '@/components/DotField';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Dock from '@/components/Dock';
import CommandPalette from '@/components/CommandPalette';

export default function Page() {
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <DotField />
      <Loader />
      <Navbar />
      <SideRail />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Dock />
      <CommandPalette />
    </>
  );
}
