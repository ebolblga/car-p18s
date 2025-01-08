import { expect, it } from 'vitest'
import find3lettersCarPlates from './find3lettersCarPlates'

it('find3lettersCarPlates', () => {
  expect(find3lettersCarPlates(['abc', 'аав', 'год', 'вех'])).toEqual([
    'аав',
    'вех',
  ])
})
