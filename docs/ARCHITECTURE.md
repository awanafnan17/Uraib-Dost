# Architecture

## System view

~~~text
typed content in src/lib/constants.ts
                 │
                 ├───────────────┐
                 ▼               ▼
       server page modules   metadata + JSON-LD
                 │               │
                 └───────┬───────┘
                         ▼
              static Next.js export
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
 semantic pre-rendered HTML      hydrated client islands
                                 motion, filtering, forms
~~~

The site uses the Next.js App Router and the static export output mode. Page modules produce the initial semantic HTML at build time. Components that require browser state—navigation menus, portfolio filters, motion, counters, FAQ disclosure and the contact form—are explicit client components.

## Route generation

The six primary sections are conventional static routes. **src/app/projects/[slug]/page.tsx** maps the typed PROJECTS collection through generateStaticParams, so every known project has its own HTML directory in **out/projects/<slug>/**. Unknown slugs fall through to the static not-found experience.

## Component boundaries

| Area | Responsibility |
|---|---|
| src/app/*/page.tsx | Route metadata and server-rendered page entrypoints |
| *PageContent.tsx | Interactive page-level composition |
| src/components/layout | Navigation, footer, loader, smooth scrolling and JSON-LD |
| src/components/sections | Reusable homepage narratives |
| src/components/ui | Buttons, cards, counters, headings and image collages |
| src/lib/constants.ts | Company, service, project and editorial content |
| src/lib/metadata.ts | Shared search and social metadata |

## Design system

The interface uses a black, graphite, silver and white palette with Times New Roman as the principal typeface. Tailwind utilities handle local composition; Bootstrap supplies the responsive grid; **globals.css** defines the shared visual primitives and responsive rules. clsx and tailwind-merge normalize conditional classes.

Framer Motion owns component entry and transition choreography. Lenis provides smooth scrolling while preserving ordinary links and document structure.

## Images

Public media lives under **public/images**. Next Image is configured as unoptimized because the production target is a static export without an image-optimization server. **scripts/check-assets.mjs** scans application source and fails when a referenced local asset is missing.

GitHub project sites live below a repository path. Next.js basePath handles routes and framework chunks; **scripts/prepare-pages.mjs** updates public-file references such as /images/... inside the generated artifact.

## Contact boundary

There are two intentionally separate delivery modes:

1. **Static demo:** the form validates input in the browser and prepares a mailto draft. No website-controlled system receives or stores the data.
2. **PHP host:** the browser posts JSON to /api/contact.php. The server validates required fields, applies a honeypot check and sends through configured SMTP or the host's mail facility.

The PHP implementation reads credentials only from **backend/smtp_config.php**, which is excluded from Git. The sample contains placeholders, not working credentials.

## SEO model

The root metadata sets the canonical production brand URL, descriptions, social cards, icons and crawler directives. Each route adds page-specific title and description data. Project routes generate item-level social metadata. **JsonLd.tsx** supplies organization/local-business and navigation schema, and the public directory includes sitemap, robots and LLM-readable summary files.

## Deployment boundaries

Static hosts cannot execute PHP and cannot apply Next.js request-time headers. The GitHub demo therefore excludes backend execution and uses email-draft mode. A production operator can either:

- deploy **out/** to a static host and connect a separately secured form service; or
- deploy the static frontend plus **backend/contact.php** to a PHP-capable host and keep SMTP configuration outside the public tree.

