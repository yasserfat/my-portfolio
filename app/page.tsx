import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Intro />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
