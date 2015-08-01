/* global suite, test */
/* eslint yoda:0 */

'use strict';

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

require('core-js');

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var _libMutableString = require('../../lib/MutableString');

var _libMutableString2 = _interopRequireDefault(_libMutableString);

var strings = ['', 'hello', '\n', 'hello\n'];

test('trim', function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _getIterator(strings), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var string = _step.value;

            var mutableString = new _libMutableString2['default'](string);
            mutableString.trim();
            _proclaim2['default'].strictEqual(mutableString.string, string.trim());
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
});

test('match', function () {
    _proclaim2['default'].deepEqual('foobar'.match(new _libMutableString2['default']('foo')), 'foobar'.match('foo'));

    _proclaim2['default'].deepEqual(new _libMutableString2['default']('foobar').match('foo'), 'foobar'.match('foo'));
});

test('replace', function () {
    _proclaim2['default'].strictEqual('foobar'.replace('bar', 'foo'), 'foobar'.replace(new _libMutableString2['default']('bar'), new _libMutableString2['default']('foo')));

    var mutableString = new _libMutableString2['default']('foobar');
    mutableString.replace('bar', 'foo');
    _proclaim2['default'].strictEqual(mutableString.toString(), 'foofoo');
});

test('includes', function () {
    _proclaim2['default'].isTrue('foobar'.includes('bar'));
    _proclaim2['default'].isTrue('foobar'.includes(new _libMutableString2['default']('bar')));
    _proclaim2['default'].isTrue(new _libMutableString2['default']('foobar').includes('bar'));

    _proclaim2['default'].isFalse('foobar'.includes('foooo'));
    _proclaim2['default'].isFalse('foobar'.includes(new _libMutableString2['default']('foooo')));
    _proclaim2['default'].isFalse(new _libMutableString2['default']('foobar').includes('foooo'));
});

test('operations', function () {
    _proclaim2['default'].isTrue('a' < 'b');
    _proclaim2['default'].isTrue('a' < new _libMutableString2['default']('b'));
    _proclaim2['default'].isTrue(new _libMutableString2['default']('a') < 'b');

    _proclaim2['default'].isFalse('a' > 'b');
    _proclaim2['default'].isFalse('a' > new _libMutableString2['default']('b'));
    _proclaim2['default'].isFalse(new _libMutableString2['default']('a') > 'b');

    _proclaim2['default'].strictEqual(new _libMutableString2['default']('a') + 'b', 'a' + 'b');
    _proclaim2['default'].strictEqual('a' + new _libMutableString2['default']('b'), 'a' + 'b');
});

test('iterator', function () {
    var letters = [];
    var mutableString = new _libMutableString2['default']('abc');

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = _getIterator(mutableString), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var letter = _step2.value;

            letters.push(letter);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                _iterator2['return']();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    _proclaim2['default'].strictEqual(letters.length, 3);
    _proclaim2['default'].deepEqual(letters, ['a', 'b', 'c']);
});
//# sourceMappingURL=MutableString.js.map