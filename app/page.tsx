import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import EducationSkills from "@/components/EducationSkills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <EducationSkills />
      <Contact />
      <Footer />
    </main>
  );
}
