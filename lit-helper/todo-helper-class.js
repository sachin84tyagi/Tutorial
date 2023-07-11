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
        this.getLength = this.shallowProperty('length');
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

    //immutable
    extend() {
        var target = {}
        for (var i = 0; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                }
            }
        }
        return target
    }

    // var combination = extend({
    //     a: "a",
    //     b: "c"
    // }, {
    //     b: "b"
    // })
    // { a: "a", b: "b" }

    //mutable
    extend(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                }
            }
        }
        return target
    }

    customMap(xs, f) {
        if (xs.map) {
            return xs.map(f);
        }
        var res = [];
        for (var i = 0; i < xs.length; i++) {
            var x = xs[i];
            if (Object.prototype.hasOwnProperty.call(xs, i)) {
                res.push(f(x, i, xs));
            }
        }
        return res;
    };
    // var letters = map([97,98,99], function (c) {
    //     return String.fromCharCode(c);
    // });

    isArrayish(obj) {
        if (!obj || typeof obj === 'string') {
            return false;
        }
        return obj instanceof Array || Array.isArray(obj) ||
            (obj.length >= 0 && (obj.splice instanceof Function ||
                (Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
    };
    //isArrayish({length:10});

    unique_pred(list, compare) {
        var ptr = 1
            , len = list.length
            , a = list[0], b = list[0]
        for (var i = 1; i < len; ++i) {
            b = a
            a = list[i]
            if (compare(a, b)) {
                if (i === ptr) {
                    ptr++
                    continue
                }
                list[ptr++] = a
            }
        }
        list.length = ptr
        return list
    }

    unique_eq(list) {
        var ptr = 1
            , len = list.length
            , a = list[0], b = list[0]
        for (var i = 1; i < len; ++i) {
            b = a
            a = list[i]
            if (a !== b) {
                if (i === ptr) {
                    ptr++
                    continue
                }
                list[ptr++] = a
            }
        }
        list.length = ptr
        return list
    }

    unique(list, compare, sorted) {
        if (list.length === 0) {
            return list
        }
        if (compare) {
            if (!sorted) {
                list.sort(compare)
            }
            return this.unique_pred(list, compare)
        }
        if (!sorted) {
            list.sort()
        }
        return this.unique_eq(list)
    }

    find(array, predicate, context) {
        if (typeof Array.prototype.find === 'function') {
            return array.find(predicate, context);
        }

        context = context || this;
        var length = array.length;
        var i;

        if (typeof predicate !== 'function') {
            throw new TypeError(predicate + ' is not a function');
        }

        for (i = 0; i < length; i++) {
            if (predicate.call(context, array[i], i, array)) {
                return array[i];
            }
        }
    }
    //  var robots = [{ name: 'Flexo' }, { name: 'Bender' }, { name: 'Buster' }];

    // find(robots, function (robot, index, array) {
    //     return robot.name === 'Bender';
    // });

    sortKeys(object, options = {}) {
        const isPlainObject = (o) => {
            return o
        }

        if (!isPlainObject(object) && !Array.isArray(object)) {
            throw new TypeError('Expected a plain object or array');
        }

        const { deep, compare } = options;
        const seenInput = [];
        const seenOutput = [];

        const deepSortArray = array => {
            const seenIndex = seenInput.indexOf(array);
            if (seenIndex !== -1) {
                return seenOutput[seenIndex];
            }

            const result = [];
            seenInput.push(array);
            seenOutput.push(result);

            result.push(...array.map(item => {
                if (Array.isArray(item)) {
                    return deepSortArray(item);
                }

                if (isPlainObject(item)) {
                    return _sortKeys(item);
                }

                return item;
            }));

            return result;
        };

        const _sortKeys = object => {
            const seenIndex = seenInput.indexOf(object);
            if (seenIndex !== -1) {
                return seenOutput[seenIndex];
            }

            const result = {};
            const keys = Object.keys(object).sort(compare);

            seenInput.push(object);
            seenOutput.push(result);

            for (const key of keys) {
                const value = object[key];
                let newValue;

                if (deep && Array.isArray(value)) {
                    newValue = deepSortArray(value);
                } else {
                    newValue = deep && isPlainObject(value) ? _sortKeys(value) : value;
                }

                Object.defineProperty(result, key, {
                    ...Object.getOwnPropertyDescriptor(object, key),
                    value: newValue
                });
            }

            return result;
        };

        if (Array.isArray(object)) {
            return deep ? deepSortArray(object) : object.slice();
        }

        return _sortKeys(object);
    }

    // sortKeys({b: [{b: 0, a: 0}], a: 0}, {deep: true});
    // //=> {a: 0, b: [{a: 0, b: 0}]}

    object(template) {
        var newObject = {};
        var properties = Object.getOwnPropertyNames(template);
        for (var i = 0; i < properties.length; ++i) {
            var property = properties[i];
            var randomDescriptor = template[property];
            newObject[property] = this._fromDescriptor(randomDescriptor);
        }
        return newObject;
    }
    _fromDescriptor(randomDescriptor) {
        var randomValue = null;
        if (
            randomDescriptor == null ||
            !randomDescriptor.shift ||
            randomDescriptor.length <= 0 ||
            typeof randomDescriptor[0] !== "function"
        ) {
            randomValue = randomDescriptor;
        } else {
            var randomFunction = randomDescriptor[0];
            if (randomDescriptor.length > 1) {
                var propertyValueArgs = randomDescriptor.slice(1, randomDescriptor.length);
                randomValue = randomFunction.apply(this, propertyValueArgs);
            } else {
                randomValue = randomFunction();
            }
        }
        return randomValue;
    }

    objectArray(length, template) {
        return this._array(length, this.object, [template]);
    }
    // objectArray(10, {
    //     name: [randomExt.string, 10, 5],
    //     age: [randomExt.integer, 100],
    // })

    string(maxLength, minLength) {
        return this._stringFromRanges(maxLength, minLength, [[32, 126]]);
    }
    _stringFromRanges(maxLength, minLength, ranges) {
        var dString = "";
        var length = this.integer(maxLength, minLength);
        var unicodeNumbers = this._integerArrayFromRanges(length, ranges);
        dString = String.fromCharCode.apply(this, unicodeNumbers);
        return dString;
    }
    _integerArrayFromRanges(length, ranges) {
        var numberArray = [];
        if (length != null && ranges != null) {
            for (var i = 0; i < length; ++i) {
                numberArray[i] = this._integerFromRanges(ranges);
            }
        } else {
            throw "length and ranges is required.";
        }
        return numberArray;
    }
    _integerFromRanges(ranges) {
        if (ranges != null) {
            var span = 0;
            for (var i = 0; i < ranges.length; ++i) {
                span += ranges[i][1] - ranges[i][0] + 1;
            }
            var randomNumber = Math.floor(Math.random() * span);
            for (var i = 0; i < ranges.length; ++i) {
                randomNumber += ranges[i][0];
                if (randomNumber <= ranges[i][1]) {
                    break;
                } else {
                    randomNumber -= ranges[i][1] + 1;
                }
            }
            return randomNumber;
        } else {
            throw "ranges is required.";
        }
    }

    stringArray(arrayLength, stringMaxLength, stringMinLength) {
        return this._array(arrayLength, this.string, [stringMaxLength, stringMinLength]);
    }
    //stringArray(10, 4, 2);

    integer(max, min) {
        if (max != null) {
            if (min != null) {
                if (max < min) {
                    throw "max [" + max + "] is less than min [" + min + "]";
                }
                return Math.floor(Math.random() * (max - min + 1)) + min;
            } else {
                return Math.floor(Math.random() * (max + 1));
            }
        } else {
            throw "max is required.";
        }
    }

    integerArray(length, max, min) {
        return this._array(length, this.integer, [max, min]);
    }
    //integerArray(12, 99, 10);

    boolean() {
        return Math.random() < 0.5;
    }

    booleanArray(length) {
        return this._array(length, this.boolean);
    }
    //booleanArray(10)

    _array(length, elementFunction, args) {
        var array = [];
        if (length != null) {
            for (var i = 0; i < length; ++i) {
                array[i] = elementFunction.apply(this, args);
            }
        } else {
            throw "length is required.";
        }
        return array;
    }


    filterObjectByKey(object, keys, throwError = true) {
        let returnObj = {};
        if (throwError && !keys.every(key => Object.keys(object).includes(key))) {
            throw new Error(`Unrecognised key passed to filter-object-by-keys`);
        }
        keys.map(key => {
            returnObj[key] = object[key];
        });
        return returnObj;
    }
    //const myObject = { name: 'John Smith', age: 45, job: 'Accountant' };
    //console.log(filterObjectByKey(myObject, ['name', 'job'])); // { name: 'John Smith', job: 'Accountant' }
    //console.log(filterObjectByKey(myObject, ['age', 'name'])); // { age: 45, name: 'John Smith' }


    sortObjByKey(unsorted) {
        const sorted = {}
        Object.keys(unsorted).sort().forEach(k => {
            sorted[k] = unsorted[k]
        })
        return sorted
    }
    //const unsorted = {3: 3, 1: 1, 2: 2, 0: 0}
    //const result = sortObjectKeys(unsorted)
    // result === {0: 0, 1: 1, 2: 2, 3: 3}


    sortObjByValue(obj, opts) {
        if (!isPlainObj(obj)) {
            throw new TypeError('Expected a plain object');
        }

        const options = opts || {};
        const reverse = options.reverse;
        const reverseKey = options.reverseKey;

        const sortKeysByValue = (x) => {
            const sortable = [];
            const newObj = {};

            Object.keys(x).forEach((key) => {
                sortable.push([key, x[key]]);
            });

            sortable.sort((a, b) => {
                let ord;
                if (reverse) {
                    ord = b[1] - a[1];
                } else {
                    ord = a[1] - b[1];
                }
                if (ord === 0) {
                    if (reverseKey) {
                        ord = b[0].localeCompare(a[0]);
                    } else {
                        ord = a[0].localeCompare(b[0]);
                    }
                }
                return ord;
            });

            sortable.forEach((arr) => {
                newObj[arr[0]] = arr[1];
            });

            return newObj;
        };

        return sortKeysByValue(obj);
    }
    //sortObjByValue({ a: 2, b: 2, c: 1, d: 3 });
    //=> { c: 1, a: 2, b: 2, d: 3 }
    //sortObjByValue({ a: 2, b: 2, c: 1, d: 3 }, { reverse: true });
    //=> { d: 3, a: 2, b: 2, c: 1 }

    objSortByKeyFunc(obj, reverse) {
        var newObject = {};
        var keys = Object.keys(obj).sort();

        if (reverse) {
            keys.reverse();
        }

        keys.forEach(function (key) {
            newObject[key] = obj[key];
        });

        return newObject;
    };
    //var obj = {b: 3, c: 5, a: 1};
    //objSortByKeyFunc(obj); // {a: 1, b: 3, c: 5}


    //Generates random documents based on a simple schema using Chance.js functions.
    generateRandomDocument() {
        //const chance = new require('chance')();
        const getChance = ({ type, args }) => chance[type] ? chance[type](args) : chance.string();

        const arrayField = ({ _type, _array, args }, fieldName) => {
            if (_array.empty && chance.bool({ likelihood: _array.empty })) {
                return { [fieldName]: [] }
            }
            return { [fieldName]: [...new Array(_array.length || 1)].map(_ => getChance({ type: _type, args })) };
        }

        const specialRandomDocument = (fieldName, schema) => {
            if (schema._exists && !chance.bool({ likelihood: schema._exists })) {
                return {};
            }
            if (schema._array) {
                return arrayField(schema, fieldName);
            }
            if (schema._type === 'enum') {
                return { [fieldName]: chance.pickone(schema.options) };
            }
            return { [fieldName]: getChance({ type: schema._type, args: schema.args }) };
        };

        const randomDocument = (fieldSchema) => Object.entries(fieldSchema).reduce((record, [fieldName, type]) => {
            if (Array.isArray(type)) {
                return Object.assign({}, record, { [fieldName]: [].concat(type.map(randomDocument)) });
            }
            if (typeof type === 'object' && type !== null) {
                return (type._type)
                    ? Object.assign({}, record, specialRandomDocument(fieldName, type))
                    : Object.assign({}, record, { [fieldName]: randomDocument(type) });
            }
            return Object.assign({}, record, { [fieldName]: getChance({ fieldName, type }) });
        }, {});

        const randomDocuments = (schema, n) => [...Array(n)].map(() => randomDocument(schema));
        return randomDocuments
    }

    //const lots = randomDocuments({ name: 'first', employed: 'bool' }, 7);
    /* [ { name: 'Chase', employed: false },
    { name: 'Alejandro', employed: true },
    { name: 'Lewis', employed: true },
    { name: 'Lulu', employed: true },
    { name: 'Ora', employed: false },
    { name: 'Tony', employed: false },
    { name: 'Nellie', employed: false }]
    */
    removeDuplicate(a, k) {
        if (!this.isArray(a)) return `Please provide an Array type.`
        if (k && !this.isString(k)) return `Please provide key of String type.`
        if (k && this.isString(k)) {
            return a.filter((obj, index, a) => {
                return a.map((mapObj) => {
                    return mapObj[k];
                }).indexOf(obj[k]) === index;
            });
        } else {
            return a.filter((item, index, a) => {
                return a.indexOf(item) == index;
            });
        }
    }

    removeOne(arr = [], fn) {
        const len = arr.length;
        if (!(fn.call && fn.apply)) {
            const val = fn;
            fn = el => el === val;
        }
        for (let i = 0; i < len; i++) {
            if (fn(arr[i], i, arr)) {
                return [...arr.slice(0, i), ...arr.slice(i + 1)];
            }
        }
        return arr.slice();
    };
    //const data = [{name: 'Phil'}, {name: 'Andrea'}, {name: 'Sam'}, {name: 'Dam'}, {name: 'Jam'}];
    //console.log(removeOne(data, (v) => v.name === 'Sam'));

    //const letters = ['a', 'b', 'c', 'd', 'e'];
    //console.log(removeOne(letters, 'd'));

    sortjsonarray(arr, prop, order) {
        if (arr == null) {
            return [];
        }
        if (!Array.isArray(arr)) {
            throw new TypeError('sort-json-array expects an array.');
        }
        if (arguments.length === 1) {
            return arr.sort();
        }
        if (arguments[2] == null || arguments[2] == "asc") {
            return arr.sort(compare(prop, 1));
        } else if (arguments[2] == "des") {
            return arr.sort(compare(prop, 0));
        } else {
            throw new TypeError('Wrong argument.');
        }

        function compare(attr, value) {
            if (value) {
                return function (a, b) {
                    var x = (a[attr] === null) ? "" : "" + a[attr],
                        y = (b[attr] === null) ? "" : "" + b[attr];
                    return x < y ? -1 : (x > y ? 1 : 0)
                }
            } else {
                return function (a, b) {
                    var x = (a[attr] === null) ? "" : "" + a[attr],
                        y = (b[attr] === null) ? "" : "" + b[attr];
                    return x < y ? 1 : (x > y ? -1 : 0)
                }
            }
        }
    };

    //sortjsonarray([{name: 'c'}, {name: 'a'}, {name: 'b'}], 'name');
    //=> [{name: 'a'}, {name: 'b'}, {name: 'c'}]
    //sortJsonArray([{name: 'c'}, {name: 'a'}, {name: 'b'}], 'name','des');
    //=> [{name: 'c'}, {name: 'b'}, {name: 'a'}]

    sortArrayofObject(arrayData, sortType, keyName) {
        let sortedArray = arrayData.sort((a, b) => {
            return keyName
                ? sortType === "desc"
                    ? a[keyName] > b[keyName]
                        ? -1
                        : a[keyName] < b[keyName]
                            ? 1
                            : 0
                    : a[keyName] < b[keyName]
                        ? -1
                        : a[keyName] > b[keyName]
                            ? 1
                            : 0
                : sortType === "desc"
                    ? b - a
                    : a - b;
        });
        return sortedArray;
    }

    //   sortArrayofObject(
    //     [
    //       { name: "Test", age: 18 },
    //       { name: "Sam", age: 9 },
    //       { name: "Randon", age: 75 },
    //     ],
    //     "asc",
    //     "age"
    //   );
}