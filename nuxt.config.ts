// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@invictus.codes/nuxt-vuetify',
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark'
      },
    },
  },
  content: {
    markdown: {
      // anchorLinks: cool that this is configurable but damn the default values suck
      anchorLinks: false,
    },
  },
  css: [
    '@/assets/global.css'
  ],
})
