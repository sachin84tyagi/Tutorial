'use strict'

const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1
export default class TodoHelper {
    constructor(initParam) {
        this.initParam = initParam
        //
        this.isFunction = this.tagTester('Function');
        this.isArray = this.tagTester('Array');
        this.isObject = this.tagTester('Object');
        this.isBoolean = this.tagTester('Boolean');
        this.isString = this.tagTester('String');
        this.isNumber = this.tagTester('Number');
        this.isDate = this.tagTester('Date');
        this.isArguments = this.tagTester('Arguments');
        this.getLength = this.shallowProperty('length')
        this.isArrayLike = this.createSizePropertyCheck(this.getLength);
    }

    static get TYPES() {
        return {
            YEAR: 'year',
            QUARTER: 'quarter',
            MONTH: 'month'
        }
    }

    tagTester(name) {
        var tag = '[object ' + name + ']';
        return function (obj) {
            return Object.prototype.toString.call(obj) === tag;
        };
    }

    shallowProperty(key) {
        return function (obj) {
            return obj === null ? void 0 : obj[key];
        };
    }

    createSizePropertyCheck(getSizeProperty) {
        return function (collection) {
            let sizeProperty = getSizeProperty(collection);
            return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX
        }
    }

    isNull(obj) {
        return obj === null;
    }

    isUndefined(obj) {
        return obj === void 0;
    }

    has$1(obj, key) {
        return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
    }

    isEmpty(obj) {
        if (obj == null) return true;
        var length = this.getLength(obj);
        if (typeof length == 'number' && (
            this.isArray(obj) || this.isString(obj) || this.isArguments(obj)
        )) return length === 0;
        return this.getLength(Object.keys(obj)) === 0;
    }
}