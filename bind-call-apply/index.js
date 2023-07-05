const objA = {
    val: 1
}

function test(a, b) {
    // replace/modify this object value 
    console.log('this :: ', this) //Window object - After test.call(objB, 1, 2) - {val: 2}
    console.log('objA :: ', objA) // {val: 1}
    console.log('param a b :: ', a, b) //1,2
}

test(1, 2)
const objB = {
    val: 2
}

test.call(objB, 1, 2) 
