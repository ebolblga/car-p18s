export default defineNuxtConfig({
  compatibilityDate: '2025-01-08',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/eslint',
  ],

  runtimeConfig: {
    public: {
      base: '/',
    },
  },

  tailwindcss: {
    cssPath: ['/assets/css/tailwind.css', { injectPosition: 0 }],
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  },

  app: {
    baseURL: '/',
    buildAssetsDir: '/nuxt/',
    cdnURL: '/',
  },

  // router:{
  //   base:process.env.NODE_ENV =="production" ? "/CarPlatesWeb/": "/"
  // },

  //target:"static"
  content: {
    api: {
      baseURL: '/content',
    },
    highlight: {
      theme: 'github-dark',
    },
  },
  alias: {
    '@core': './core',
  },
})
