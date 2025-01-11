<script setup lang="ts">
import type { Type } from '~~/composables/useGenOutput'
import { onMounted } from '#imports'
import getCarPlate from '~/core/carPlates/getCarPlate'

useSeoMeta({
    title: 'Генератор номеров | car-p18s',
    description: 'Веб генератор "интересных" автомобильных номеров',
    ogTitle: 'Генератор номеров | car-p18s',
    ogDescription: 'Веб генератор "интересных" автомобильных номеров',
    ogImage: '',
    ogUrl: '',
    twitterTitle: 'Генератор номеров | car-p18s',
    twitterDescription: 'Веб генератор "интересных" автомобильных номеров',
    twitterImage: '',
    twitterCard: 'summary',
})

const dbNames = {
    'russianUTF-8.txt': 'Все русские слова',
    'swears.txt': 'Бранные слова',
    'ebeba.txt': 'Смешные слова',
    '': 'Свой файл',
}
const selectedDb = ref('russianUTF-8.txt')
const findTypes = {
    '6': 'Серия + номер (6 букв)',
    '3': 'Только серия (3 буквы)',
    ' ': 'С пробелами',
}
const findType = ref<Type>('6')
const popupIsShown = ref(false)
const {
    public: { base },
} = useRuntimeConfig()
const ctx = ref<CanvasRenderingContext2D>()
const carPlateImg = ref<HTMLImageElement>()
const canvas = ref<HTMLCanvasElement>()
const request = ref({
    data: [] as string[],
    loading: false,
    error: false,
})

onMounted(async () => {
    const myFont = new FontFace('RoadNumbers', `url(${base}RoadNumbers2.0.ttf)`)
    const font = await myFont.load()
    document.fonts.add(font)
    canvas.value = document.createElement('canvas')
    Object.assign(canvas.value, { width: 156, height: 36 })
    ctx.value = canvas.value.getContext('2d')!
    carPlateImg.value = new Image()
    carPlateImg.value.src = `${base}TemplateRU.png`
})

const words = computed(() => request.value.data.map(word => word.replaceAll("*", "")))

const plates = computed(() => {
    return request.value.data.map((plate) => {
        return getCarPlate(plate)?.toUpperCase() || '******'
    })
})

function Search() {
    if (selectedDb.value == '') {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.txt'
        input.click()
        input.onchange = () => {
            if (!input.files) return
            const file = input.files[0]
            request.value = useGenOutputFile(file, findType.value)
        }
    } else {
        request.value = useGenOutput(selectedDb.value, findType.value)
    }
}
</script>

<template>
    <div class="content-center text-center pt-[5vh]">
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100" rel="stylesheet">
        <BaseSelect v-model="selectedDb" :options="dbNames" />
        <BaseSelect v-model="findType" :options="findTypes" />
        <BaseButton :class="{
            'border-red-500 focus:ring-red-400 shake': request.error,
        }" @click="Search">Поиск</BaseButton>
        <span class="material-symbols-outlined icon w-0 cursor-help select-none"
            @click="popupIsShown = !popupIsShown">help</span>
        <BasePopup :popup-shown="popupIsShown">
            <template #title>Поиск слов на номерах машин</template>
            <template #content>
                <p>1. Выберете базу данных для поиска</p>
                <p>2. Выберете метод совпадения</p>
                <p>3. Нажмите кнопку "Поиск"</p>
            </template>
        </BasePopup>
        <br>
        <span v-if="request.loading" class="text-green-300 pt-5">
            Загрузка...
        </span>
        <span v-else>
            <span class="text-gray-600 text-xl mb-10">Всего найдено: {{ request.data.length }}</span>
            <div v-if="request.data.length > 0" class="mx-[10vw] sm:mx-[25vw] overflow-x-hidden relative rounded-lg">
                <BaseTable :data="plates">
                    <template #head>
                        <th class="py-3 px-auto">№</th>
                        <th class="py-3 px-auto">Слово</th>
                        <th class="py-3 px-auto">Номер</th>
                        <th class="py-3 px-auto">Изображение</th>
                    </template>
                    <template #line="{ line: plate, i }">
                        <td class="py-4 px-auto">{{ i + 1 }}</td>
                        <td class="py-4 px-auto">{{ words[i] }}</td>
                        <td class="py-4 px-auto">{{ plate }}</td>
                        <td class="py-4 px-auto">
                            <BaseCarPlate :car-plate-number="plate" :region="177" :canvas="canvas!" :ctx="ctx!"
                                :car-plate-img="carPlateImg!" />
                        </td>
                    </template>
                </BaseTable>
            </div>
        </span>
    </div>
</template>

<style scoped>
.icon {
    color: #9ca3af;
}
</style>