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
            siteUrl: 'https://car-p18s.vercel.app',
        },
    },

    app: {
        baseURL: '/',
        buildAssetsDir: '/nuxt/',
        cdnURL: '/',
        head: {
            titleTemplate: '%s | Car P18s',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content:
                        'Веб-генератор «интересных» автомобильных номеров. Поиск русских слов на серии и номере по ГОСТ (12 букв: А, В, Е, К, М, Н, О, Р, С, Т, Х, У) и цифрам-буквам.',
                },
                { name: 'author', content: 'ahibis & ebolblga' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'Car P18s' },
                { property: 'og:locale', content: 'ru_RU' },
            ],
            link: [{ rel: 'manifest', href: '/manifest.json' }],
        },
    },

    tailwindcss: {
        cssPath: ['/assets/css/tailwind.css', { injectPosition: 0 }],
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        viewer: true,
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
