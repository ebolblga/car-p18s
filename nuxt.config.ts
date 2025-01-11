export default defineNuxtConfig({
    compatibilityDate: '2025-01-08',
    devtools: { enabled: false },
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

    eslint: {
        config: {
            typescript: true,
        },
    },

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
