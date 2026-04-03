import Navbar from "@/components/ui/Navbar";

// Page principale — Server Component.
// Navbar est importée ici mais elle reste un Client Component
// car elle a "use client" dans son propre fichier.
// Next.js gère la frontière automatiquement.
export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "60px" }}>
        <section
          id="hero"
          style={{
            minHeight: "100vh",
            background: "#0B1F3A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          <p>Hero — à venir</p>
        </section>
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
