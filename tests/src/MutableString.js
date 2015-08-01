/* global suite, test */
/* eslint yoda:0 */

import 'core-js';
import assert from 'proclaim';
import MutableString from '../../lib/MutableString';

const strings = [
    '',
    'hello',
    '\n',
    'hello\n',
];

test('trim', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.trim();
        assert.strictEqual(mutableString.string, string.trim());
    }
});

test('match', () => {
    assert.deepEqual(
        'foobar'.match(new MutableString('foo')),
        'foobar'.match('foo')
    );

    assert.deepEqual(
        new MutableString('foobar').match('foo'),
        'foobar'.match('foo')
    );
});

test('replace', () => {
    assert.strictEqual(
        'foobar'.replace('bar', 'foo'),
        'foobar'.replace(new MutableString('bar'), new MutableString('foo'))
    );

    const mutableString = new MutableString('foobar');
    mutableString.replace('bar', 'foo');
    assert.strictEqual(mutableString.toString(), 'foofoo');
});

test('includes', () => {
    assert.isTrue('foobar'.includes('bar'));
    assert.isTrue('foobar'.includes(new MutableString('bar')));
    assert.isTrue(new MutableString('foobar').includes('bar'));

    assert.isFalse('foobar'.includes('foooo'));
    assert.isFalse('foobar'.includes(new MutableString('foooo')));
    assert.isFalse(new MutableString('foobar').includes('foooo'));
});

test('operations', () => {
    assert.isTrue('a' < 'b');
    assert.isTrue('a' < new MutableString('b'));
    assert.isTrue(new MutableString('a') < 'b');

    assert.isFalse('a' > 'b');
    assert.isFalse('a' > new MutableString('b'));
    assert.isFalse(new MutableString('a') > 'b');

    assert.strictEqual(new MutableString('a') + 'b', 'a' + 'b');
    assert.strictEqual('a' + new MutableString('b'), 'a' + 'b');
});

test('iterator', () => {
    const letters = [];
    const mutableString = new MutableString('abc');

    for (let letter of mutableString) {
        letters.push(letter);
    }

    assert.strictEqual(letters.length, 3);
    assert.deepEqual(letters, ['a', 'b', 'c']);
});
