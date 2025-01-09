import { expect, it } from 'vitest'
import parseWords from './parseWords'
import getCarPlate from './getCarPlate'

it('getCarPlate', async () => {
  expect(
    [
      'вздора',
      'а***ав',
      'вюора',
      'сво***',
      'сою**',
      '**юра',
      '*юо**',
      '*юю**',
      'Азовом',
    ].map(getCarPlate)
  ).toEqual([
    'b390pa',
    'a***ab',
    'b100pa',
    'c80***',
    'c010**',
    '**10pa',
    '*100**',
    null,
    'a308om',
  ])
})
