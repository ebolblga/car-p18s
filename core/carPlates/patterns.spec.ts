import { expect, it } from 'vitest'
import { regExpBuilder } from './patterns'

const tests = {
    '': new RegExp('^$', 'i'),
    w: new RegExp('^([авекмнорстху]{1})$', 'i'),
    w1: new RegExp('^([авекмнорстху]{1})$', 'i'),
    w02: new RegExp('^([авекмнорстху]{0,2})$', 'i'),
    n02: new RegExp('^([бвдзочю]{0,2})$', 'i'),
    wn02: new RegExp('^([авекмнорстху]{1})([бвдзочю]{0,2})$', 'i'),
    w2k3w: new RegExp(
        '^([авекмнорстху]{2})([бвдзоч]{3})([авекмнорстху]{1})$',
        'i'
    ),
}
const tests1 = {
    w: new RegExp('([авекмнорстху]{1})', 'i'),
    wn02: new RegExp('([авекмнорстху]{1})([бвдзочю]{0,2})', 'i'),
}
it.each(Object.entries(tests))(
    'regExpBuilder for pattern %s',
    (pattern, regexp) => {
        expect(regExpBuilder(pattern)).toEqual(regexp)
    }
)
it.each(Object.entries(tests1))(
    'regExpBuilder for pattern %s without strictFind',
    (pattern, regexp) => {
        expect(regExpBuilder(pattern, false)).toEqual(regexp)
    }
)
