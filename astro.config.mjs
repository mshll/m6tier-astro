import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import { SITE } from './src/config.mjs';
import react from '@astrojs/react';
import icon from 'astro-icon';
import { astroImageTools } from 'astro-imagetools';
import alpinejs from '@astrojs/alpinejs';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) =>
  SITE.googleAnalyticsId ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'static',
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
  },
  integrations: [
    astroImageTools,
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    mdx(),
    ...whenExternalScripts(() =>
      partytown({
        config: {
          forward: ['dataLayer.push'],
        },
      })
    ),
    // compress({
    //   css: true,
    //   html: {
    //     removeAttributeQuotes: false,
    //   },
    //   img: false,
    //   js: true,
    //   svg: false,
    //   logger: 1,
    // }),
    react(),
    icon({
      include: {
        solar: ['*'],
        ri: ['*'],
        tabler: ['*'],
      },
    }),
    alpinejs(),
  ],
  vite: {
    ssr: {
      noExternal: [/^@radix-ui\/*/, 'react-wrap-balancer'],
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
