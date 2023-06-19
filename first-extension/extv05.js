(function(global, factory) {
    (function() {
        global.ext = factory()
    }())
    
})(window, function() {
    let ext = {}
    let sum = (a,b) => a+b
    let multiply = (a,b) => a*b
    ext.sum = sum
    ext.multiply = multiply
    return ext
})
