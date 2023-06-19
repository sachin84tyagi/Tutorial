// Without callback
function funcA() {
    console.log('A')
}
function funcB() {
    setTimeout(() => {
        console.log('B')
    }, 600)
}
function funcC() {
    console.log('C')
}
funcA()
funcB()
funcC()

// With callback
function funcA() {
    console.log('A')
}
function funcB(cb) {
    setTimeout(() => {
        console.log('B')
        cb()
    }, 600)
}
function funcC() {
    console.log('C')
}
funcA()
funcB(funcC)

// CallBack Example with Params
function sum(num1, num2, cb) {
    let sumVal = 0
    setTimeout(() => {
        sumVal = num1 + num2
        //we have to make another operation by taking sumVal
        cb(sumVal)
        console.log(sumVal * 2)
    }, 500)
    console.log(sumVal)
}
sum(3, 5, multiply)
function multiply(num) {
    for (i = 1; i <= 10; i++) {
        console.log(num * i)
    }
}
//
const category = [
    {
        id: 1,
        name: 'Electronics'
    },
    {
        id: 2,
        name: 'Grocery'
    },
    {
        id: 3,
        name: 'Appliances'
    },
    {
        id: 4,
        name: 'Garments'
    }
]
const products = [
    {
        id: 1,
        category_id: 1,
        name: 'Computer'
    },
    {
        id: 2,
        category_id: 1,
        name: 'Laptop'
    },
    {
        id: 3,
        category_id: 1,
        name: 'Tablet'
    },
    {
        id: 4,
        category_id: 3,
        name: 'TV'
    },
    {
        id: 5,
        category_id: 3,
        name: 'Washing Machine'
    }
]
console.log('A')
getCategory(1, function(data) {
    getProdcuts(data[0].id, function(productsData) {
        getProductsReview(productsData[0].id, function(productsReviewData) {
            //This nested structure is called CALLBACK HELL
            console.log('productsReviewData :: ', productsReviewData)
        })
    })
})
console.log('B')
function getCategory(id, callback) {
    setTimeout(() => {
        console.log('Reading categories from database')
        const data = category.filter((val) => val.id == id)
        callback(data)
    }, 2000)
}
function getProdcuts(id, callback) {
    setTimeout(() => {
        console.log('Reading products from database')
        const pData = products.filter((val) => val.category_id == id)
        callback(pData)
    }, 2000)
}