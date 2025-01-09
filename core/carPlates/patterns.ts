import lettersTransform from './data/lettersTransform.json'
import numbersTransform from './data/numbersTransform.json'

type lettersKeys = keyof typeof lettersTransform
type numbersKeys = keyof typeof numbersTransform

const validNumLetters = Object.keys(numbersTransform).join('')
const validEngLetters = Object.keys(lettersTransform).join('')
const validNumLetters1 = (
  Object.keys(numbersTransform) as (keyof typeof numbersTransform)[]
)
  .filter((letter) => numbersTransform[letter].length === 1)
  .join('')
const validNumLetters2 = (
  Object.keys(numbersTransform) as (keyof typeof numbersTransform)[]
)
  .filter((letter) => numbersTransform[letter].length === 2)
  .join('')
function regExpBuilder(pattern: string, strictFind: boolean = true) {
  let regexpPattern = strictFind ? '^' : ''
  for (let val of pattern.matchAll(/(w|n|k|m)(\d?)(\d?)/g)) {
    const [_, w, n1, n2] = val
    if (w === 'w') {
      regexpPattern += `([${validEngLetters}]{${n1 || 1}${n2 ? ',' + n2 : ''}})`
    }
    if (w === 'n') {
      regexpPattern += `([${validNumLetters}]{${n1 || 1}${n2 ? ',' + n2 : ''}})`
    }
    if (w === 'k') {
      regexpPattern += `([${validNumLetters1}]{${n1 || 1}${n2 ? ',' + n2 : ''}})`
    }
    if (w === 'm') {
      regexpPattern += `([${validNumLetters2}]{${n1 || 1}${n2 ? ',' + n2 : ''}})`
    }
  }
  if (strictFind) regexpPattern += '$'
  return new RegExp(regexpPattern, 'i')
}

function wordTransform(word: string) {
  return word
    .split('')
    .map((letter) => lettersTransform[letter as lettersKeys] || '*')
    .join('')
}
function numTransform(word: string) {
  return word
    .split('')
    .map((letter) => numbersTransform[letter as numbersKeys] || '*')
    .join('')
}
export {
  validNumLetters,
  validEngLetters,
  validNumLetters2,
  validNumLetters1,
  regExpBuilder,
  wordTransform,
  numTransform,
}
