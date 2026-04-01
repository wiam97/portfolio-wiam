# Wiam Krabatou — Portfolio

Personal portfolio built with **Next.js 14** (App Router), containerized with **Docker**, and deployed on **AWS** (S3 + CloudFront). Contact form powered by **AWS SES**.

Live demo: _coming soon_

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router, Server Components), TypeScript, Tailwind CSS |
| Containerization | Docker multi-stage build, docker-compose |
| Deployment | AWS S3 (static export) + CloudFront (CDN) |
| Email | AWS SES via API Route |
| CI/CD | GitHub Actions |

---

## Architecture

```
portfolio-wiam/
├── app/                    # Next.js App Router (Server Components by default)
│   ├── api/contact/        # API Route → AWS SES
│   ├── layout.tsx          # Root layout + SEO metadata
│   └── page.tsx            # Home page (assembles all sections)
├── src/
│   ├── components/
│   │   ├── sections/       # Hero, About, Skills, Experience, Projects, Contact
│   │   └── ui/             # Button, Badge, SectionLabel (reusable)
│   └── lib/
│       ├── data.ts         # All CV data centralized here
│       └── types.ts        # TypeScript interfaces
├── Dockerfile              # Multi-stage: deps → builder → runner
├── docker-compose.yml      # Dev environment with hot reload
└── .github/workflows/      # CI/CD: build → S3 deploy → CloudFront invalidation
```

---

## Run locally with Docker

```bash
git clone https://github.com/wiam97/portfolio-wiam.git
cd portfolio-wiam
docker-compose up
```

App available at [http://localhost:3000](http://localhost:3000)

> **Hot reload** is enabled: any file change is reflected instantly without rebuilding the container.

---

## Run locally without Docker

```bash
npm install
npm run dev
```

---

## Environment Variables

Create a `.env.local` file at the root (never commit this file):

```env
AWS_REGION=eu-west-3
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
SES_FROM_EMAIL=contact@yourdomain.com
```

---

## Git Workflow

```
main      ← stable, protected, triggers AWS deploy on push
develop   ← daily work branch
feat/xxx  ← one branch per feature
```

Commits follow the [Conventional Commits](https://www.conventionalcommits.org/) spec:

```
feat: add Hero section
fix: correct contact form validation
chore: update Docker configuration
ci: add GitHub Actions pipeline
```

---

## Deployment (CI/CD)

On every push to `main`, GitHub Actions:
1. Builds the Docker image
2. Exports the Next.js app as static files
3. Syncs to AWS S3
4. Invalidates CloudFront cache

Required GitHub Secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET`, `CF_DISTRIBUTION_ID`

---

## Author

**Wiam Krabatou** — Tech Lead & Full Stack Engineer  
4 years experience · React · Node.js · TypeScript · Docker · AWS

[LinkedIn](https://www.linkedin.com/in/wiam-krabatou-3864b6171/) · wiam.krabatou97@gmail.com

