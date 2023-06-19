//The Promise object represents the eventual completion (or failure) 
//of an asynchronous operation and its resulting value.
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//resolve(value): This indicates that the asynchronous task was successful. 
// This will call the fulfillment callback in the then() handler.
//reject(error): This indicates an error while trying to run the asynchronous task. 
// This will call the rejection callback in the then() handler.

// If the promise is successful, the fulfillment callback will be called. 
// If the promise is rejected, the rejected call back will be called instead.

//A basic promises structure 
new Promise(/*...a callback function with 2 resolve, reject params*/
    // a function block with consuming resolve, reject method   
)

// A basic example of promise
const promises = new Promise((resolve, reject) => {
    //Kick of some async work
    //resolve('Done Done Done')
    reject ('Not Done')
})
promises.then((res) => console.log(res)) //when resolve -> Done Done Done
.catch((err) => console.log(err)) //when reject -> Not Done

//
const promises = new Promise((resolve, reject) => {
    //Kick of some async work
    setTimeout(() => {
        //resolve('Done Done Done')
        reject ('Not Done')
    }, 2000)
})

promises.then((res) => console.log(res))
//Promise {<pending>}
// Done Done Done
.catch((err) => console.log(err))
//Promise {<pending>}
// Not Done

// A typical example
const category = [{
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

const products = [{
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

getCategory(3)
.then((category) => getProdcuts(category[0].id))
.then((products) => console.log('products :: ', products))
.catch((err) => console.log('Err :: ', err))

function getCategory(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading categories from database')
            const data = category.filter((val) => val.id == id)
            resolve(data)
        }, 2000)
    })
}

function getProdcuts(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading products from database')
            const pData = products.filter((val) => val.category_id == id)
            resolve(pData)
        }, 2000)
    })
}