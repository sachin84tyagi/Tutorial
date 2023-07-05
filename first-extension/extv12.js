(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define('underscore', factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (function() {
            var current = global._;
            var exports = global._ = factory();
        }()));
}(window, (function() {
    function _$1(obj) {
        if (obj instanceof _$1) return obj;
        if (!(this instanceof _$1)) return new _$1(obj);
        this._wrapped = obj;
    }

    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    function isObject(obj) {
        var type = typeof obj;
        return type === 'function' || (type === 'object' && !!obj);
    }
    function tagTester(name) {
        var tag = '[object ' + name + ']';
        return function(obj) {
            return toString.call(obj) === tag;
        };
    }

    function createSizePropertyCheck(getSizeProperty) {
        return function(collection) {
            var sizeProperty = getSizeProperty(collection);
            return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
        }
    }
    function shallowProperty(key) {
        return function(obj) {
            return obj == null ? void 0 : obj[key];
        };
    }
    var getLength = shallowProperty('length');
    var isArrayLike = createSizePropertyCheck(getLength);
    function keys(obj) {
        if (!isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj)
            if (has$1(obj, key)) keys.push(key);
        // Ahem, IE < 9.
        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
    }

    function isEmpty(obj) {
        if (obj == null) return true;
        var length = getLength(obj);
        if (typeof length == 'number' && (
                isArray(obj) || isString(obj) || isArguments$1(obj)
            )) return length === 0;
        return getLength(keys(obj)) === 0;
    }

    var isFunction = tagTester('Function');
    var isFunction$1 = isFunction;
    function functions(obj) {
        var names = [];
        for (var key in obj) {
            if (isFunction$1(obj[key])) names.push(key);
        }
        return names.sort();
    }

    function memoize(func, hasher) {
        var memoize = function(key) {
            var cache = memoize.cache;
            var address = '' + (hasher ? hasher.apply(this, arguments) : key);
            if (!has$1(cache, address)) cache[address] = func.apply(this, arguments);
            return cache[address];
        };
        memoize.cache = {};
        return memoize;
    }

    function find(obj, predicate, context) {
        var keyFinder = isArrayLike(obj) ? findIndex : findKey;
        var key = keyFinder(obj, predicate, context);
        if (key !== void 0 && key !== -1) return obj[key];
    }

    function map(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        var _keys = !isArrayLike(obj) && keys(obj),
            length = (_keys || obj).length,
            results = Array(length);
        for (var index = 0; index < length; index++) {
            var currentKey = _keys ? _keys[index] : index;
            results[index] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
    }
    
    function filter(obj, predicate, context) {
        var results = [];
        predicate = cb(predicate, context);
        each(obj, function(value, index, list) {
            if (predicate(value, index, list)) results.push(value);
        });
        return results;
    }
    
    function every(obj, predicate, context) {
        predicate = cb(predicate, context);
        var _keys = !isArrayLike(obj) && keys(obj),
            length = (_keys || obj).length;
        for (var index = 0; index < length; index++) {
            var currentKey = _keys ? _keys[index] : index;
            if (!predicate(obj[currentKey], currentKey, obj)) return false;
        }
        return true;
    }

    function some(obj, predicate, context) {
        predicate = cb(predicate, context);
        var _keys = !isArrayLike(obj) && keys(obj),
            length = (_keys || obj).length;
        for (var index = 0; index < length; index++) {
            var currentKey = _keys ? _keys[index] : index;
            if (predicate(obj[currentKey], currentKey, obj)) return true;
        }
        return false;
    }

    function optimizeCb(func, context, argCount) {
        if (context === void 0) return func;
        switch (argCount == null ? 3 : argCount) {
            case 1:
                return function(value) {
                    return func.call(context, value);
                };
                // The 2-argument case is omitted because we’re not using it.
            case 3:
                return function(value, index, collection) {
                    return func.call(context, value, index, collection);
                };
            case 4:
                return function(accumulator, value, index, collection) {
                    return func.call(context, accumulator, value, index, collection);
                };
        }
        return function() {
            return func.apply(context, arguments);
        };
    }

    function baseIteratee(value, context, argCount) {
        if (value == null) return identity;
        if (isFunction$1(value)) return optimizeCb(value, context, argCount);
        if (isObject(value) && !isArray(value)) return matcher(value);
        return property(value);
    }

    function iteratee(value, context) {
        return baseIteratee(value, context, Infinity);
    }
    _$1.iteratee = iteratee;

    function cb(value, context, argCount) {
        if (_$1.iteratee !== iteratee) return _$1.iteratee(value, context);
        return baseIteratee(value, context, argCount);
    }

    function each(obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;
        if (isArrayLike(obj)) {
            for (i = 0, length = obj.length; i < length; i++) {
                iteratee(obj[i], i, obj);
            }
        } else {
            var _keys = keys(obj);
            for (i = 0, length = _keys.length; i < length; i++) {
                iteratee(obj[_keys[i]], _keys[i], obj);
            }
        }
        return obj;
    }
    // Add your own custom functions to the Underscore object.
    function mixin(obj) {
        each(functions(obj), function(name) {
            var func = _$1[name] = obj[name];
            _$1.prototype[name] = function() {
                var args = [this._wrapped];
                push.apply(args, arguments);
                return chainResult(this, func.apply(_$1, args));
            };
        });
        return _$1;
    }
    // Named Exports
    var allExports = {
        some: some,
        mixin: mixin,
        keys: keys,
        every: every,
        filter: filter,
        map: map,
        find: find,
        memoize: memoize,
        isEmpty: isEmpty        
    };
    var _ = mixin(allExports);
    _._ = _;

    return _;

})));


var values = [1, 3, 5, 7, 9];
var isEven = function(value) {
    return value % 2 === 0;
};
_.some(values, isEven);

//var values = [1, 3, 5, 7, 9];
//console.log(_.map(values, (v) => v*v))