(function(global, factory) {
    (global = global || self, (function() {
        global.ext = factory()
    }()))
    
})(window, (function() {
    let ext = {}
    function some(obj, predicate, context) {
        let _keys = !isArrayLike(obj) && keys(obj),
        length = (_keys || obj).length;
        for(let i = 0; i < length; i++) {
            let currentKey = _keys ? _keys[i] : i
            if (predicate(obj[currentKey], i, obj)) return true
        }
        return false
    }

    let MAX_ARRAY_INDEX = Math.pow(2, 53) - 1
    let getLength = shallowProperty('length')

    function shallowProperty(key) {
        return function(obj) {
            return obj === null ? void 0 : obj[key];
        };
    }
    function createSizePropertyCheck(getSizeProperty) {
        return function(collection) {
            let sizeProperty = getSizeProperty(collection);
            return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX
        }
    }

    let isArrayLike = createSizePropertyCheck(getLength);
    ext.isArrayLike = isArrayLike
    return ext
}))
