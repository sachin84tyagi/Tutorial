(function(global) {
    let ext = {}
    let sum = (a,b) => a+b
    let multiply = (a,b) => a*b
    ext.sum = sum
    ext.multiply = multiply
    global.ext = ext
})(window)
