import { numTransform, wordTransform } from './patterns'

export default function getCarPlate(word: string) {
    if (word.length == 5) {
        const [_, left, center, right] = word
            .toLowerCase()
            .match(/(.{1})(.{2})(.{2})/i) as [string, string, string, string]
        let centerTransform = numTransform(center)
        if (centerTransform.length > 3) return null
        return wordTransform(left) + centerTransform + wordTransform(right)
    }
    if (word.length == 6) {
        const [_, left, center, right] = word
            .toLowerCase()
            .match(/(.{1})(.{3})(.{2})/i) as [string, string, string, string]
        return wordTransform(left) + numTransform(center) + wordTransform(right)
    }
    return null
}
