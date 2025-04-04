import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation Du Travail Pratique 2",
  description: "Revue de code du tp2",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Revues', link: '/revue-1' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Revue de code 1', link: '/revue-1' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
