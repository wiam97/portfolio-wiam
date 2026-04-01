// Page principale — Server Component par défaut.
// Elle assemble toutes les sections. Les sections statiques (Hero, About, Skills,
// Experience, Projects, Education) restent Server Components : aucun JS envoyé
// au navigateur pour elles. Seuls Navbar et Contact sont Client Components.

export default function Home() {
  return (
    <main>
      <p style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        Portfolio en construction — sections à venir.
      </p>
    </main>
  );
}
