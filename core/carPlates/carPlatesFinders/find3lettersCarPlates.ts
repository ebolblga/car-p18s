import { regExpBuilder } from '../patterns'

const findWordsRegex = regExpBuilder('w3')

export default function find3lettersCarPlates(words: string[]) {
  return words
    .filter((word) => findWordsRegex.test(word))
    .map((word) => {
      return word[0] + '***' + word[1] + word[2]
    })
}
