import find3lettersCarPlates from '~/core/carPlates/carPlatesFinders/find3lettersCarPlates'
import find6lettersCarPlates from '~/core/carPlates/carPlatesFinders/find6lettersCarPlates'
import findWithSpacesCarPlates from '~/core/carPlates/carPlatesFinders/findWithSpacesCarPlates'
import parseWords from '~/core/carPlates/parseWords'

async function getWordsFromUrl(url = 'russianUTF-8.txt') {
    const data: string = await $fetch('/Library/' + url)
    return parseWords(data)
}
async function getWordsFromFile(file: File) {
    const data: string = await file.text()
    return parseWords(data)
}

export type Type = ' ' | '6' | '3'

function wordsHandler(words: string[], type: Type) {
    const funcs = {
        ' ': findWithSpacesCarPlates,
        '3': find3lettersCarPlates,
        '6': find6lettersCarPlates,
    } as Record<Type, (word: string[]) => string[]>
    return funcs[type](words)
}

export function useGenOutputFile(file: File, type: Type = ' ') {
    const response = reactive({
        loading: true,
        error: false,
        data: [] as string[],
    })
    console.log('Получение слов')
    console.time('слова получены')
    getWordsFromFile(file)
        .then((words) => {
            console.timeEnd('слова получены')
            console.time('слова обработаны')
            response.data = wordsHandler(words, type)
            console.timeEnd('слова обработаны')
            response.loading = false
        })
        .catch((e) => {
            response.error = true
            response.loading = false
            console.error(e)
        })
    return response
}

export function useGenOutput(url = 'russianUTF-8.txt', type: Type = ' ') {
    const response = reactive({
        loading: true,
        error: false,
        data: [] as string[],
    })
    console.log('Получение слов')
    console.time('слова получены')
    getWordsFromUrl(url)
        .then((words) => {
            console.timeEnd('слова получены')
            console.time('слова обработаны')
            response.data = wordsHandler(words, type)
            console.timeEnd('слова обработаны')
            response.loading = false
        })
        .catch((e) => {
            response.error = true
            response.loading = false
            console.error(e)
        })
    return response
}
