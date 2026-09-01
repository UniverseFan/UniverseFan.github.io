// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import edgeoneAdapter from "@edgeone/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://sorollaportfolio.edgeone.app/",
  output: "static",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  adapter: edgeoneAdapter()
});