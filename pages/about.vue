<script setup>
const siteUrl = 'https://car-p18s.vercel.app'
useSeoMeta({
    title: 'О проекте',
    description:
        'Документация Car P18s: ГОСТ для номеров, буквы и цифры, базы слов, примеры (Моздок, Ободок, Удочка). Онлайн-версия проекта CarPlates.',
    ogTitle: 'О проекте | Car P18s',
    ogDescription:
        'Документация Car P18s: ГОСТ для номеров, буквы и цифры, базы слов, примеры. Онлайн-версия проекта CarPlates.',
    ogUrl: `${siteUrl}/about`,
})
useHead({
    link: [{ rel: 'canonical', href: `${siteUrl}/about` }],
})
</script>

<template>
    <div class="pt-[5vh] p-[10vw]">
        <ContentDoc />
    </div>
</template>
