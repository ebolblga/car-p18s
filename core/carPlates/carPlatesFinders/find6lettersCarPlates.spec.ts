import { expect, it } from 'vitest'
import find6lettersCarPlates from './find6lettersCarPlates'

it('find6lettersCarPlates', () => {
    expect(
        find6lettersCarPlates([
            'вздора',
            'аав',
            '',
            'вюора',
            'взюора',
            'Азовом',
        ])
    ).toEqual(['вздора', 'вюора', 'Азовом'])
})
