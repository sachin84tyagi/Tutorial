(function(global, factory) {
    (global = global || self, (function() {
        factory(function(val) {
            //console.log("val", val)
            global['ext'] = val
            // console.log('ext :: ', ext)
            console.log('global :: ', global)
            // console.log('ext.isArrayLike :: ', ext.isArrayLike([1,2,3,4]))
        })
    }()))
})(window, (function(cb) {
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
    setTimeout(function() {
        console.log('setTimeout called')
        ext.isArrayLike = isArrayLike
        cb(ext)
    }, 9000)
}))
