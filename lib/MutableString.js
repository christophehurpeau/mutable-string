/* global Iterator */

"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** @class MutableString 
* @param {string} string */
var MutableString = (function () {
    function MutableString(string) {
        _classCallCheck(this, MutableString);

        this.string = string;
    }

    _createClass(MutableString, [{
        key: "charAt",
        /** @memberof MutableString 
        * @instance 
        * @method charAt */value: function charAt() {
            var _string;

            return (_string = this.string).charAt.apply(_string, arguments);
        }
    }, {
        key: "charCodeAt",
        /** @memberof MutableString 
        * @instance 
        * @method charCodeAt */value: function charCodeAt() {
            var _string2;

            return (_string2 = this.string).charAt.apply(_string2, arguments);
        }
    }, {
        key: "concat",
        /** @memberof MutableString 
        * @instance 
        * @method concat 
        * @returns {MutableString} */value: function concat() {
            var _string3;

            this.string = (_string3 = this.string).concat.apply(_string3, arguments);
            return this;
        }
    }, {
        key: "endsWith",
        /** @memberof MutableString 
        * @instance 
        * @method endsWith */value: function endsWith() {
            var _string4;

            return (_string4 = this.string).endsWith.apply(_string4, arguments);
        }
    }, {
        key: "includes",
        /** @memberof MutableString 
        * @instance 
        * @method includes */value: function includes() {
            var _string5;

            return (_string5 = this.string).includes.apply(_string5, arguments);
        }
    }, {
        key: "indexOf",
        /** @memberof MutableString 
        * @instance 
        * @method indexOf */value: function indexOf() {
            var _string6;

            return (_string6 = this.string).indexOf.apply(_string6, arguments);
        }
    }, {
        key: "lastIndexOf",
        /** @memberof MutableString 
        * @instance 
        * @method lastIndexOf */value: function lastIndexOf() {
            var _string7;

            return (_string7 = this.string).lastIndexOf.apply(_string7, arguments);
        }
    }, {
        key: "localeCompare",
        /** @memberof MutableString 
        * @instance 
        * @method localeCompare */value: function localeCompare() {
            var _string8;

            return (_string8 = this.string).localeCompare.apply(_string8, arguments);
        }
    }, {
        key: "match",
        /** @memberof MutableString 
        * @instance 
        * @method match */value: function match() {
            var _string9;

            return (_string9 = this.string).match.apply(_string9, arguments);
        }
    }, {
        key: "normalize",
        /** @memberof MutableString 
        * @instance 
        * @method normalize 
        * @returns {MutableString} */value: function normalize() {
            var _string10;

            this.string = (_string10 = this.string).normalize.apply(_string10, arguments);
            return this;
        }
    }, {
        key: "repeat",
        /** @memberof MutableString 
        * @instance 
        * @method repeat 
        * @returns {MutableString} */value: function repeat() {
            var _string11;

            this.string = (_string11 = this.string).repeat.apply(_string11, arguments);
            return this;
        }
    }, {
        key: "replace",
        /** @memberof MutableString 
        * @instance 
        * @method replace 
        * @returns {MutableString} */value: function replace() {
            var _string12;

            this.string = (_string12 = this.string).replace.apply(_string12, arguments);
            return this;
        }
    }, {
        key: "search",
        /** @memberof MutableString 
        * @instance 
        * @method search */value: function search() {
            var _string13;

            return (_string13 = this.string).search.apply(_string13, arguments);
        }
    }, {
        key: "slice",
        /** @memberof MutableString 
        * @instance 
        * @method slice 
        * @returns {MutableString} */value: function slice() {
            var _string14;

            this.string = (_string14 = this.string).slice.apply(_string14, arguments);
            return this;
        }
    }, {
        key: "split",
        /** @memberof MutableString 
        * @instance 
        * @method split */value: function split() {
            var _string15;

            return (_string15 = this.string).split.apply(_string15, arguments);
        }
    }, {
        key: "startsWith",
        /** @memberof MutableString 
        * @instance 
        * @method startsWith */value: function startsWith() {
            var _string16;

            return (_string16 = this.string).startsWith.apply(_string16, arguments);
        }
    }, {
        key: "substr",
        /** @memberof MutableString 
        * @instance 
        * @method substr 
        * @returns {MutableString} */value: function substr() {
            var _string17;

            this.string = (_string17 = this.string).substr.apply(_string17, arguments);
            return this;
        }
    }, {
        key: "substring",
        /** @memberof MutableString 
        * @instance 
        * @method substring 
        * @returns {MutableString} */value: function substring() {
            var _string18;

            this.string = (_string18 = this.string).substring.apply(_string18, arguments);
            return this;
        }
    }, {
        key: "toLocaleLowerCase",
        /** @memberof MutableString 
        * @instance 
        * @method toLocaleLowerCase 
        * @returns {MutableString} */value: function toLocaleLowerCase() {
            var _string19;

            this.string = (_string19 = this.string).toLocaleLowerCase.apply(_string19, arguments);
            return this;
        }
    }, {
        key: "toLocaleUpperCase",
        /** @memberof MutableString 
        * @instance 
        * @method toLocaleUpperCase 
        * @returns {MutableString} */value: function toLocaleUpperCase() {
            var _string20;

            this.string = (_string20 = this.string).toLocaleUpperCase.apply(_string20, arguments);
            return this;
        }
    }, {
        key: "toLowerCase",
        /** @memberof MutableString 
        * @instance 
        * @method toLowerCase 
        * @returns {MutableString} */value: function toLowerCase() {
            var _string21;

            this.string = (_string21 = this.string).toLowerCase.apply(_string21, arguments);
            return this;
        }
    }, {
        key: "toString",
        /** @memberof MutableString 
        * @instance 
        * @method toString */value: function toString() {
            return this.string.toString();
        }
    }, {
        key: "toUpperCase",
        /** @memberof MutableString 
        * @instance 
        * @method toUpperCase 
        * @returns {MutableString} */value: function toUpperCase() {
            var _string22;

            this.string = (_string22 = this.string).toUpperCase.apply(_string22, arguments);
            return this;
        }
    }, {
        key: "trim",
        /** @memberof MutableString 
        * @instance 
        * @method trim 
        * @returns {MutableString} */value: function trim() {
            var _string23;

            this.string = (_string23 = this.string).trim.apply(_string23, arguments);
            return this;
        }
    }, {
        key: "trimLeft",
        /** @memberof MutableString 
        * @instance 
        * @method trimLeft 
        * @returns {MutableString} */value: function trimLeft() {
            var _string24;

            this.string = (_string24 = this.string).trimLeft.apply(_string24, arguments);
            return this;
        }
    }, {
        key: "trimRight",
        /** @memberof MutableString 
        * @instance 
        * @method trimRight 
        * @returns {MutableString} */value: function trimRight() {
            var _string25;

            this.string = (_string25 = this.string).trimRight.apply(_string25, arguments);
            return this;
        }
    }, {
        key: "valueOf",
        /** @memberof MutableString 
        * @instance 
        * @method valueOf */value: function valueOf() {
            return this.string.valueOf();
        }
    }, {
        key: _Symbol$iterator,
        /** @memberof MutableString 
        * @instance 
        * @returns {Iterator} */value: function value() {
            return _getIterator(this.string);
        }
    }]);

    return MutableString;
})();

exports["default"] = MutableString;
module.exports = exports["default"];
//# sourceMappingURL=MutableString.js.map