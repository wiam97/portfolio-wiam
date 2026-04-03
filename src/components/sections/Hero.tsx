// Server Component — pas de "use client".
// Tous les effets hover sont en CSS pur — pas d'event handlers JS.
// Next.js pré-rend cette section en HTML statique au build.

import { personalInfo } from "@/lib/data";

export default function Hero() {
  const { availability, stats } = personalInfo;

  return (
    <section id="hero" className="hero-section">
      {/* Dégradés d'ambiance */}
      <div aria-hidden="true" className="hero-bg" />

      <div className="hero-grid">
        {/* Colonne gauche — texte */}
        <div>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            {availability}
          </div>

          <h1 className="hero-title">
            Tech Lead &<br />
            <em>Ingénieure</em>
            <br />
            Full Stack
          </h1>

          <p className="hero-subtitle">
            React · React Native · Node.js · AWS · TypeScript
            <br />
            4 ans d&apos;expérience, spécialisée en architecture microservices,
            transformation digitale et intégration IA. Basée à Casablanca,
            disponible pour une mobilité en France.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn-secondary">
              Me contacter
            </a>
          </div>
        </div>

        {/* Colonne droite — carte stats */}
        <div className="hero-card">
          {stats.map((stat, index) => (
            <div key={stat.label}>
              {index > 0 && <div className="hero-divider" />}
              <div className="hero-stat">
                <div className="hero-stat-num">{stat.value}</div>
                <div className="hero-stat-lbl">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          background: var(--navy);
          display: flex;
          align-items: center;
          padding: 100px 6vw 80px;
          position: relative;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 80% 50%, rgba(14,110,85,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(200,150,12,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 4rem;
          align-items: center;
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          position: relative;
        }
        .hero-eyebrow {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hero-eyebrow-line {
          display: inline-block;
          width: 28px;
          height: 1px;
          background: var(--gold);
          flex-shrink: 0;
        }
        .hero-title {
          font-family: var(--font-dm-serif), Georgia, serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          color: #fff;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .hero-title em {
          font-style: italic;
          color: var(--teal-light);
        }
        .hero-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.6);
          max-width: 520px;
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }
        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--teal);
          color: #fff;
          padding: 0.75rem 1.75rem;
          border-radius: var(--radius);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover {
          background: var(--teal-light);
          transform: translateY(-1px);
        }
        .btn-secondary {
          border: 1px solid rgba(200,150,12,0.5);
          color: var(--gold-light);
          padding: 0.75rem 1.75rem;
          border-radius: var(--radius);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          display: inline-block;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-secondary:hover {
          border-color: var(--gold-light);
          background: rgba(200,150,12,0.08);
        }
        .hero-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-lg);
          padding: 2rem 1.75rem;
          min-width: 220px;
          text-align: center;
        }
        .hero-stat-num {
          font-family: var(--font-dm-serif), Georgia, serif;
          font-size: 2.4rem;
          color: var(--gold-light);
          line-height: 1;
          margin-bottom: 4px;
        }
        .hero-stat-lbl {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hero-divider {
          width: 40px;
          height: 1px;
          background: rgba(255,255,255,0.12);
          margin: 1.25rem auto;
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-card { display: none; }
        }
      `}</style>
    </section>
  );
}
