"use client";

// Client Component obligatoire ici :
// - on écoute le scroll avec useEffect (API browser)
// - on gère l'état "scrolled" avec useState
// Ces deux hooks sont impossibles dans un Server Component.

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "À propos",    href: "#about"      },
  { label: "Compétences", href: "#skills"      },
  { label: "Expérience",  href: "#experience"  },
  { label: "Projets",     href: "#projects"    },
  { label: "Contact",     href: "#contact"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Écoute le scroll pour ajouter une ombre quand on descend
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu mobile quand on clique un lien
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(11,31,58,0.97)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(200,150,12,0.25)",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.18)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: "var(--font-dm-serif), Georgia, serif",
          fontSize: "1.1rem",
          color: "#F0B429",
          letterSpacing: "0.02em",
          textDecoration: "none",
        }}
      >
        Wiam Krabatou
      </a>

      {/* Liens desktop */}
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="nav-links-desktop"
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#F0B429")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Bouton hamburger mobile */}
      <button
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Menu"
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          color: "rgba(255,255,255,0.8)",
          fontSize: "1.4rem",
          lineHeight: 1,
        }}
        className="nav-hamburger"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            right: 0,
            background: "rgba(11,31,58,0.98)",
            borderTop: "1px solid rgba(200,150,12,0.15)",
            padding: "1rem 2rem 1.5rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Styles responsive injectés */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
