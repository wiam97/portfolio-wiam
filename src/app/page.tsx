import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" style={{ minHeight: "60vh", background: "#fff", padding: "4rem 2rem" }}>
          About — à venir
        </section>
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
