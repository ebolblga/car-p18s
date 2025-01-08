<script setup lang="ts">
const {
    public: { base },
} = useRuntimeConfig()
useHead({
    link: [
        {
            rel: 'icon',
            href: `${base}favicon.ico`,
            type: 'image/x-icon',
        },
    ],
})
</script>

<template>
    <div class="h-screen">
        <TheNavbar />
        <slot />
        <a
            href="https://github.com/ebolblga/CarPlatesWeb"
            target="_blank"
            class="fixed right-3 bottom-0 text-xs text-gray-500 select-none">
            ahibis & ebolblga © 2022
        </a>
    </div>
</template>

<style>
body {
    background: linear-gradient(90deg, #111827, #080b12, #111827);
    color: #d6d6d6;
}
@font-face {
    font-family: 'RoadNumbers';
    src: url('/RoadNumbers2.0.ttf');
}
</style>
