// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxt/fonts',
    '@unocss/nuxt',
    'nuxt-og-image'
  ],
  css: [
    '@/assets/styles/main.scss'
  ]
})