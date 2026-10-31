# Deployment guide

## GitHub Pages demo

The included workflow installs pinned npm dependencies, runs ESLint and the asset validator, builds with the /Uraib-Dost base path, prepares public-file URLs and deploys **out/** through GitHub's official Pages actions.

The workflow sets:

~~~text
NEXT_PUBLIC_BASE_PATH=/Uraib-Dost
NEXT_PUBLIC_CONTACT_MODE=mailto
~~~

The second setting is important: GitHub Pages cannot execute contact.php, so the demo accurately prepares an email draft instead of displaying a false success state.

## Root-domain static hosting

For a root domain or subdomain:

1. Install dependencies with **npm ci**.
2. Run **npm run lint** and **npm run check:assets**.
3. Run **npm run build** without NEXT_PUBLIC_BASE_PATH.
4. Upload the contents of **out/** to the site's document root.
5. Configure HTTPS, caching and security headers at the CDN or web server.

Because trailingSlash is enabled, the host should serve directory indexes such as /about/index.html.

## PHP contact deployment

Static export and the contact endpoint are deployed separately:

1. Copy **backend/contact.php** to **<document-root>/api/contact.php**.
2. Copy **backend/smtp_config.sample.php** to **backend/smtp_config.php** outside source control.
3. Replace every placeholder on the server.
4. Restrict the configuration file to the web-server account.
5. Test delivery to a controlled mailbox before enabling the production form.
6. Build the frontend without NEXT_PUBLIC_CONTACT_MODE=mailto.

Never place real mailbox credentials in contact.php, the sample file, a JavaScript environment variable, a GitHub Actions log or this repository.

## Recommended host controls

- HTTPS-only with HSTS after the domain is confirmed.
- X-Content-Type-Options: nosniff.
- A strict Referrer-Policy.
- A tested Content Security Policy matching the Google Maps iframe and any chosen font sources.
- Rate limiting and request-size limits on /api/contact.php.
- Server-side logging that avoids message bodies and personal contact data.
- Long-lived immutable caching for hashed _next/static assets and shorter caching for HTML.

These controls belong to the actual host. They are not claimed by the source code or the GitHub Pages demo.

