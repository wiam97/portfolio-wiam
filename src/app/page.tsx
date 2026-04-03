import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <section id="skills" style={{ minHeight: "60vh", background: "#F8F6F1", padding: "4rem 2rem" }}>
          Skills — à venir
        </section>
        <section id="experience" style={{ minHeight: "60vh", background: "#fff", padding: "4rem 2rem" }}>
          Experience — à venir
        </section>
        <section id="projects" style={{ minHeight: "60vh", background: "#F8F6F1", padding: "4rem 2rem" }}>
          Projects — à venir
        </section>
        <section id="contact" style={{ minHeight: "60vh", background: "#F8F6F1", padding: "4rem 2rem" }}>
          Contact — à venir
        </section>
      </main>
    </>
  );
}
