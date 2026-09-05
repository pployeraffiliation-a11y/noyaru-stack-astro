import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `format: 'file'` builds `/blog` as `blog.html` instead of `blog/index.html`, and
// `trailingSlash: 'never'` makes `/blog/` the non-canonical spelling. That is the exact shape of
// the real defect this fixture reproduces: a page declaring a canonical the site redirects away
// from. See tests/fixtures/astro/README.md.
export default defineConfig({
  site: 'https://noyaru-stack-astro.netlify.app',
  trailingSlash: 'never',
  build: { format: 'file' },
  // The sitemap is GENERATED from this config: nothing named *sitemap* is committed. That is
  // the shape the corrector has to be able to fix on this stack.
  integrations: [sitemap()],
});
