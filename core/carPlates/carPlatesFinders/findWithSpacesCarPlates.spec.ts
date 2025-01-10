import { expect, it } from 'vitest'
import findWithSpacesCarPlates from './findWithSpacesCarPlates'

it('find6lettersCarPlates', () => {
    expect(
        findWithSpacesCarPlates([
            'вздора',
            'аав',
            '',
            'вюора',
            'взюора',
            'сво',
            'сою',
            'юра',
            'юо',
            'ю',
        ])
    ).toEqual([
        'вздора',
        'а***ав',
        'вюора',
        'сво***',
        'сою**',
        '**юра',
        '*юо**',
        '*ю***',
    ])
})
