import { regExpBuilder } from '../patterns'

const reg2Num = regExpBuilder('m', false)
const reg = regExpBuilder('w01n03w02')

function worldTransform(word: string) {
  if (reg.test(word)) {
    let [parsed, left, center, right] = word.match(reg) as [
      string,
      string,
      string,
      string,
    ]
    if (parsed.length === 0) return null
    let centerSize = 3
    if (reg2Num.test(center)) {
      if (center.length > 2) return null
      centerSize = 2
    }
    if (left.length > 0) {
      center = center.padEnd(centerSize, '*')
    }
    if (right.length > 0) {
      center = center.padStart(centerSize, '*')
    }
    left = left.padStart(1, '*')
    right = right.padEnd(2, '*')
    return left + center + right
  }
  return null
}

export default function findWithSpacesCarPlates(words: string[]) {
  return words.map(worldTransform).filter((word) => word !== null)
}
