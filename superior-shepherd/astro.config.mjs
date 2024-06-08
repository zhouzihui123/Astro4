import { defineConfig } from 'astro/config';
import netlify from `astro/serverless`;
// https://astro.build/config
export default defineConfig({
  output: `server`,
  adapter: vercel(),
});