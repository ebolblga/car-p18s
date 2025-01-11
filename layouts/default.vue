<script setup lang="ts">

useHead({
    htmlAttrs: {
        lang: 'ru',
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'Car p18s', content: 'Authors: ahibis & ebolblga' },
    ],
    link: [
        {
            rel: 'icon',
            href: '/favicon.ico',
            crossorigin: 'anonymous',
        },
        {
            rel: 'prefetch',
            href: '/RoadNumbers2.0.ttf',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
        },
    ],
})
</script>

<template>
    <div class="h-screen">
        <TheNavbar />
        <slot />
        <a href="https://github.com/ebolblga/CarPlatesWeb" target="_blank"
            class="fixed right-3 bottom-0 text-xs text-text-secondary select-none">
            ahibis & ebolblga © 2022
        </a>
    </div>
</template>

<style>
body {
    margin: 0;
    background: linear-gradient(90deg,
            theme('colors.background'),
            theme('colors.background-secondary'),
            theme('colors.background'));
    color: theme('colors.text');
    background-color: theme('colors.background');
}

@font-face {
    font-family: 'RoadNumbers';
    src: url('/RoadNumbers2.0.ttf');
}

::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}

::-webkit-scrollbar-track {
    box-shadow: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: theme('colors.text-secondary');
    outline: 1px solid slategrey;
    border-radius: 4px;
}

::-webkit-scrollbar-corner {
    background: transparent;
}
</style>
