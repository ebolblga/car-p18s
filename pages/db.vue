<script setup lang="ts">
useSeoMeta({
    title: 'Базы данных | car-p18s',
    description: 'Веб генератор "интересных" автомобильных номеров',
    ogTitle: 'Базы данных | car-p18s',
    ogDescription: 'Веб генератор "интересных" автомобильных номеров',
    ogImage: '',
    ogUrl: '',
    twitterTitle: 'Базы данных | car-p18s',
    twitterDescription: 'Веб генератор "интересных" автомобильных номеров',
    twitterImage: '',
    twitterCard: 'summary',
})

const popupShown = ref(false)
const files = {
    'russianUTF-8.txt': 'Все русские слова',
    'swears.txt': 'Бранные слова',
    'ebeba.txt': 'Смешные слова',
}
const file = ref('russianUTF-8.txt')

const words = ref<string[]>([])
const wordsLength = computed(() => words.value.length)
const pageSize = ref(15)
const {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next,
} = useOffsetPagination({
    total: wordsLength,
    page: 1,
    pageSize,
})
async function Load() {
    const data: string = await $fetch('/Library/' + file.value)
    words.value = data
        .split('\n')
        .map((word) => (word.at(-1) == '\r' ? word.slice(0, -1) : word))
}
Load()
async function Download() {
    const a = document.createElement('a')
    a.download = file.value
    a.href = '/Library/' + file.value
    a.click()
}
</script>

<template>
    <div class="content-center text-center pt-[5vh]">
        <select v-model="file"
            class="min-w-[220px] h-[40px] mb-5 text-center focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
            @change="Load">
            <option value="" disabled>Выберете базу данных</option>
            <option v-for="(option, i) in files" :key="i" :value="i">{{ option }}</option>
        </select>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100" rel="stylesheet">
        <span class="material-symbols-outlined icon w-0 cursor-help select-none"
            @click="popupShown = !popupShown">help</span>
        <div class="inline-block absolute z-10 w-86 ml-8 mt-[-40px] text-sm font-light rounded-lg border shadow-sm text-gray-400 border-gray-600 bg-gray-800"
            :class="{ hidden: !popupShown }">
            <div class="py-2 px-3 rounded-t-lg border-b border-gray-600 bg-gray-700">
                <h3 class="font-semibold text-white">Источники данных</h3>
            </div>
            <div class="py-2 px-3">
                <a href="https://github.com/danakt/russian-words" target="_blank" class="underline">Все русские слова из
                    репозитория danakt</a>
                <br>
                <a href="https://2yxa.ru/mat/" target="_blank" class="underline">Бранные слова запарсены с сайта
                    2yxa.ru</a>
                <br>
                <a href="https://github.com/ahibis/hahaRU/blob/master/hahaRU/WordGeneration.cs" target="_blank"
                    class="underline">Смешные слова из старого проекта</a>
            </div>
            <div data-popper-arrow />
        </div>
        <br>
        <BaseButton @click="Download">Скачать</BaseButton>
        <br>
        <span v-if="!words.length" class="text-green-300 pt-5">
            Не загружено
        </span>
        <span v-else class="text-gray-600 text-xl">
            <p>Всего записей: {{ words.length }}</p>
            <div v-for="i in currentPageSize" :key="i">
                {{ words[(currentPage - 1) * pageSize + i] }}
            </div>
            <div class="flex justify-center">
                <div :class="{
                    flex: 1,
                    'justify-between': isFirstPage && isLastPage,
                    'w-[300px]': 1,
                    'justify-center': !(isFirstPage && isLastPage),
                }">
                    <div class="pt-10 content-center text-center">
                        <p class="text-base">
                            ({{ currentPage }} / {{ pageCount }})
                        </p>
                        <span v-if="!isFirstPage" class="material-symbols-outlined icon cursor-pointer select-none"
                            @click="prev">arrow_back</span>
                        <span v-if="!isLastPage" class="material-symbols-outlined icon cursor-pointer select-none"
                            @click="next">arrow_forward</span>
                    </div>
                </div>
            </div>
        </span>
    </div>
</template>
