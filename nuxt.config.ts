// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

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