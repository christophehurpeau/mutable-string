/* global Iterator */

export default class MutableString {
    string: string;

    constructor(string: string) {
        this.string = string;
    }

    charAt() {
        return this.string.charAt(...arguments);
    }

    charCodeAt() {
        return this.string.charAt(...arguments);
    }

    concat(): MutableString {
        this.string = this.string.concat(...arguments);
        return this;
    }

    endsWith() {
        return this.string.endsWith(...arguments);
    }

    includes() {
        return this.string.includes(...arguments);
    }

    indexOf() {
        return this.string.indexOf(...arguments);
    }

    lastIndexOf() {
        return this.string.lastIndexOf(...arguments);
    }

    localeCompare() {
        return this.string.localeCompare(...arguments);
    }

    match() {
        return this.string.match(...arguments);
    }

    normalize(): MutableString {
        this.string = this.string.normalize(...arguments);
        return this;
    }

    repeat(): MutableString {
        this.string = this.string.repeat(...arguments);
        return this;
    }

    replace(): MutableString {
        this.string = this.string.replace(...arguments);
        return this;
    }

    search() {
        return this.string.search(...arguments);
    }

    slice(): MutableString {
        this.string = this.string.slice(...arguments);
        return this;
    }

    split() {
        return this.string.split(...arguments);
    }

    startsWith() {
        return this.string.startsWith(...arguments);
    }

    substr(): MutableString {
        this.string = this.string.substr(...arguments);
        return this;
    }

    substring(): MutableString {
        this.string = this.string.substring(...arguments);
        return this;
    }

    toLocaleLowerCase(): MutableString {
        this.string = this.string.toLocaleLowerCase(...arguments);
        return this;
    }

    toLocaleUpperCase(): MutableString {
        this.string = this.string.toLocaleUpperCase(...arguments);
        return this;
    }

    toLowerCase(): MutableString {
        this.string = this.string.toLowerCase(...arguments);
        return this;
    }

    toString() {
        return this.string.toString();
    }

    toUpperCase(): MutableString {
        this.string = this.string.toUpperCase(...arguments);
        return this;
    }

    trim(): MutableString {
        this.string = this.string.trim(...arguments);
        return this;
    }

    trimLeft(): MutableString {
        this.string = this.string.trimLeft(...arguments);
        return this;
    }

    trimRight(): MutableString {
        this.string = this.string.trimRight(...arguments);
        return this;
    }

    valueOf() {
        return this.string.valueOf();
    }

    /**
     * Symbol.iterator
     *
     * @method @@iterator
     */
    [Symbol.iterator](): Iterator {
        return this.string[Symbol.iterator]();
    }
}

