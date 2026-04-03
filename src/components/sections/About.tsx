// Server Component — statique, aucune interactivité.
// Les données viennent de data.ts importé côté serveur uniquement.

import { personalInfo, aboutText, aboutHighlights } from "@/lib/data";

export default function About() {
  const { contact } = personalInfo;

  const infoCards = [
    { label: "Localisation", value: contact.location },
    { label: "Téléphone",    value: contact.phone,        href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: "Email",        value: contact.email,        href: `mailto:${contact.email}` },
    { label: "LinkedIn",     value: contact.linkedinLabel, href: contact.linkedinUrl },
    { label: "Langues",      value: contact.languages },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <div className="section-label">À propos</div>
        <h2>
          Ingénieure passionnée par
          <br />
          la tech et l&apos;impact métier
        </h2>

        <div className="about-grid">
          {/* Texte */}
          <div className="about-text">
            {aboutText.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}

            <div className="about-highlights">
              {aboutHighlights.map((pill) => (
                <span key={pill} className="highlight-pill">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Infos contact */}
          <div className="about-info">
            {infoCards.map((card) => (
              <div key={card.label} className="info-card">
                <div className="ic-label">{card.label}</div>
                <div className="ic-value">
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {card.value}
                    </a>
                  ) : (
                    card.value
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: var(--white);
          padding: 90px 6vw;
        }
        .section-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-label::before {
          content: '';
          display: inline-block;
          width: 20px;
          height: 1px;
          background: var(--teal);
        }
        h2 {
          font-family: var(--font-dm-serif), Georgia, serif;
          font-size: clamp(1.9rem, 3.5vw, 2.8rem);
          color: var(--navy);
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
          margin-top: 2.5rem;
        }
        .about-text p {
          color: var(--gray-600);
          margin-bottom: 1.25rem;
          font-size: 0.97rem;
          line-height: 1.85;
        }
        .about-text strong { color: var(--navy); }
        .about-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }
        .highlight-pill {
          background: var(--cream);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius);
          padding: 0.6rem 1rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--navy);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .highlight-pill::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--teal);
          flex-shrink: 0;
        }
        .about-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .info-card {
          background: var(--cream);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }
        .ic-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 0.5rem;
        }
        .ic-value {
          font-size: 0.92rem;
          color: var(--navy);
          font-weight: 500;
        }
        .ic-value a {
          color: var(--teal);
          text-decoration: none;
        }
        .ic-value a:hover { text-decoration: underline; }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .about-highlights { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
