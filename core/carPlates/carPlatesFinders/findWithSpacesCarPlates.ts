import { regExpBuilder } from '../patterns'

const reg2Num = regExpBuilder('m', false)
const regCenter = regExpBuilder('w1k3w12')
const regCenter1 = regExpBuilder('w1n2w12')
const regLeft = regExpBuilder('w1k03')
const regLeft1 = regExpBuilder('w1n02')
const regRight = regExpBuilder('k03w12')
const regRight1 = regExpBuilder('n03w12')

function worldTransform(word: string) {
  if (reg2Num.test(word)) {
    const center = word.match(regCenter1)
    if (center) {
      return center[0].padEnd(5, '*')
    }
    const left = word.match(regLeft1)
    if (left) {
      return left[0].padEnd(5, '*')
    }
    const right = word.match(regRight1)
    if (right) {
      return '*' + right[0].padEnd(4, '*')
    }
    return null
  }
}

export default function findWithSpacesCarPlates() {}
