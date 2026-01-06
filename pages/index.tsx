import Header from "../components/Header";
import Services from "../components/Services";
import Work from "../components/Work";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Articles from "../components/Articles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 h-full flex flex-col justify-center items-center transition-colors duration-200">

    {/* 1. HERO / VALUE PROPOSITION */}
    <section id="home" className="w-full flex justify-center items-center">
      <Header />
    </section>
  
    {/* 2. WORK / PROJECTS (PROOF EARLY) */}
    <section id="work" className="w-full">
      <Work />
    </section>
  
    {/* 3. SERVICES (HOW YOU HELP) */}
    <section id="services" className="w-full flex justify-center items-center">
      <Services />
    </section>
  
    {/* 4. TESTIMONIALS (SOCIAL PROOF) */}
    <section id="testimonials" className="w-full flex justify-center items-center">
      <Testimonials />
    </section>
  
    {/* 5. ABOUT (CREDIBILITY + STORY) */}
    <section id="about" className="w-full flex justify-center items-center">
      <About />
    </section>
  
    {/* 6. CONTACT (CONVERSION) */}
    <section id="contact" className="w-full">
      <Contact />
    </section>
  
  </div>
  
  );
}
