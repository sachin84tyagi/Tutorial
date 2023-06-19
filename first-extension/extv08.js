(function(global, factory) {
    (global = global || self, (function() {
        global.ext = factory()
    }()))
    
})(window, (function() {
    let ext = {}
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
