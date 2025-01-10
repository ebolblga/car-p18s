<script setup lang="ts">
import type { Type } from '~~/composables/useGenOutput'
import { onMounted } from '#imports'
import getCarPlate from '~/core/carPlates/getCarPlate'

useHead({ title: 'Генератор' })
const dbNames = {
    'russianUTF-8.txt': 'Все русские слова',
    'swears.txt': 'Бранные слова',
    'ebeba.txt': 'Смешные слова',
    '': 'Свой файл',
}
const dbName = ref('russianUTF-8.txt')
const findTypes = {
    '6': 'Серия + номер (6 букв)',
    '3': 'Только серия (3 буквы)',
    ' ': 'С пробелами',
}
const findType = ref<Type>('6')

// let canvas, ctx, img
const {
    public: { base },
} = useRuntimeConfig()
const ctx = ref<CanvasRenderingContext2D>();
const carPlateImg = ref<HTMLImageElement>();
const canvas = ref<HTMLCanvasElement>();

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



const request = ref({
    data: [] as string[],
    loading: false,
    error: false,
})
const toPlate = (word: string) => {
    return getCarPlate(word)
}
const words = computed(() => request.value.data.map(word => word.replaceAll("*", "")))

const plates = computed(() => {
    return request.value.data.map((plate) => {
        return toPlate(plate)?.toUpperCase() || "******"
    })
})
// const platesUrls = computed(() => plates.value.map((plate) => drawPlate(plate)))
function Search() {
    if (dbName.value == '') {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.txt'
        input.click()
        input.onchange = (e) => {
            if (!input.files) return;
            const file = input.files[0]
            request.value = useGenOutputFile(file, findType.value)
        }
    } else {
        request.value = useGenOutput(dbName.value, findType.value)
    }
}
let popupShown = ref(false)
</script>

<template>
    <div class="content-center text-center pt-[5vh]">
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100" rel="stylesheet" />
        <BaseSelect :options="dbNames" v-model="dbName" />
        <BaseSelect :options="findTypes" v-model="findType" />
        <BaseButton @click="Search" :class="{
            'border-red-500 focus:ring-red-400 shake': request.error,
        }">Поиск</BaseButton>
        <span class="material-symbols-outlined icon w-0 cursor-help select-none"
            @click="popupShown = !popupShown">help</span>
        <BasePopup :popupShown="popupShown">
            <template #title>Поиск слов на номерах машин</template>
            <template #content>
                <p>1. Выберете базу данных для поиска</p>
                <p>2. Выберете метод совпадения</p>
                <p>3. Нажмите кнопку "Поиск"</p>
            </template>
        </BasePopup>
        <br />
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

<style>
.entry {
    flex: 1 0 25%;
}

.icon {
    color: rgb(156 163 175);
}

br {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
