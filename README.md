# Buildora Projects

The source project recovered from the **Uraib Dost** archive: a premium construction and interior-fit-out portfolio for Buildora Projects.

[Live demo](https://awanafnan17.github.io/Uraib-Dost/) · [Architecture](docs/ARCHITECTURE.md) · [Deployment guide](docs/DEPLOYMENT.md)

![Buildora Projects homepage](docs/preview.png)

## Overview

Buildora is a responsive, multi-page company website built for a construction brand operating from Lahore, Pakistan. It combines a restrained monochrome design system with motion-led storytelling, detailed project pages, structured business data and a production-ready static export.

This repository preserves the website brand as **Buildora Projects** while retaining the exact public repository name **Uraib-Dost** requested for the archived project.

## Experience

- A cinematic construction hero with focused calls to action.
- Dedicated About, Services, Projects, Factory and Contact experiences.
- Fourteen statically generated project-detail routes.
- Filterable project portfolio across commercial, hospitality, restaurant, banking and residential work.
- Responsive image collages, scroll reveals, counters, testimonials, process and FAQ sections.
- Smooth navigation powered by Lenis and Framer Motion.
- Search and social metadata, JSON-LD business data, sitemap and robots directives.
- Accessible semantic navigation, keyboard-operable controls and responsive mobile layouts.
- A deployable contact endpoint with secrets isolated from source control.

## Technology

| Area | Implementation |
|---|---|
| Application | Next.js 16 App Router, React 19 and TypeScript |
| Styling | Tailwind CSS 4, Bootstrap 5 and a custom monochrome design system |
| Motion | Framer Motion and Lenis smooth scrolling |
| Images | Next Image with a static-export-compatible configuration |
| Content | Typed project, service, statistic, FAQ and business constants |
| Contact | Optional PHP JSON endpoint with external SMTP configuration |
| SEO | Next Metadata API, Open Graph, JSON-LD, sitemap and robots.txt |
| Delivery | Static export and GitHub Pages workflow |
| Quality | ESLint, TypeScript build, public-asset validation and Gitleaks |

The deployed demo is completely static. It does not require Node.js, PHP, a database or any private credential at runtime.

## Site map

~~~text
/
├── about/
├── services/
├── projects/
│   └── [slug]/      14 pre-rendered project pages
├── factory/
├── contact/
└── 404/
~~~

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the rendering model, component boundaries and content flow.

## Run locally

Requirements: Node.js 22 or newer and npm.

### macOS or Linux

~~~bash
npm install
npm run dev
~~~

### Windows PowerShell

~~~powershell
npm install
npm run dev
~~~

Open [http://localhost:3000](http://localhost:3000).

## Validate and build

~~~bash
npm run lint
npm run check:assets
npm run build
~~~

The production build emits a static site to **out/**. The asset check prevents broken public-image references from reaching a deployment, while the Next.js build performs TypeScript checking and pre-renders all routes.

To reproduce the GitHub Pages artifact locally:

### macOS or Linux

~~~bash
env NEXT_PUBLIC_BASE_PATH=/Uraib-Dost NEXT_PUBLIC_CONTACT_MODE=mailto npm run build
npm run prepare:pages
~~~

### Windows PowerShell

~~~powershell
$env:NEXT_PUBLIC_BASE_PATH = '/Uraib-Dost'
$env:NEXT_PUBLIC_CONTACT_MODE = 'mailto'
npm run build
npm run prepare:pages
~~~

The Pages preparation step safely prefixes public assets for the repository subpath and adds **.nojekyll**. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for production hosting and contact-form options.

## Contact modes

The GitHub Pages demo uses **NEXT_PUBLIC_CONTACT_MODE=mailto**. A validated enquiry prepares an email in the visitor's own mail application; the demo does not store or transmit form data itself.

For a PHP-capable production host, **backend/contact.php** accepts JSON and sends mail through an external local configuration. Copy **backend/smtp_config.sample.php** to **backend/smtp_config.php** on the server and fill it there. The real file is ignored and must never be committed.

## Security and privacy

- No database, mailbox password, API key, deployment token or private environment file is included.
- Environment files, **smtp_config.php**, database dumps, private keys and provider state are ignored.
- SMTP uses an explicit placeholder until an operator supplies a server-local secret.
- The public demo replaces server submission with a transparent email-draft workflow.
- The repository is scanned for secrets before publication.
- Security headers must be configured on the production host; static export cannot implement request-time Next.js headers.

## Project status

The frontend and static demo are complete and build successfully. Business copy, project claims, phone numbers, photographs and client statements remain owner-managed content and should be reconfirmed before each production launch. The PHP mail endpoint is optional and requires host-specific deployment and SMTP configuration.

## Author

Built and documented by [Afnan Mehmood Awan](https://github.com/awanafnan17).

