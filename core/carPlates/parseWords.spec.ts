import { expect, it } from 'vitest'
import parseWords from './parseWords'

it('parseWords', async () => {
  expect(parseWords('')).toEqual([''])
  expect(parseWords('abc')).toEqual(['abc'])
  expect(parseWords('слово\r\nслово2')).toEqual(['слово', 'слово2'])
})
