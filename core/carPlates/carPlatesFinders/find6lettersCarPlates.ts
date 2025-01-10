import { regExpBuilder } from '../patterns'

const findWords1Regex = regExpBuilder('wk3w2')
const findWords2Regex = regExpBuilder('wn2w2')
const validWorldWith2NumsRegex = regExpBuilder('m', false)
function wordIsCarPlate(word: string) {
    if (validWorldWith2NumsRegex.test(word)) {
        return word.length === 5 && findWords2Regex.test(word)
    }
    return word.length === 6 && findWords1Regex.test(word)
}

export default function find6lettersCarPlates(words: string[]) {
    return words.filter((word) => wordIsCarPlate(word))
}
