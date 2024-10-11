import { createSelector } from "@reduxjs/toolkit"

const state2 = {
    category: [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Furniture' },
        { id: 3, name: 'Appliances' },
        { id: 4, name: 'Kitchen' }
    ],
    items: [
        { id: 1, name: 'Laptops', category: 1 },
        { id: 2, name: 'Printers', category: 1 },
        { id: 3, name: 'Projectors', category: 1 },
        { id: 4, name: 'Bed', category: 2 },
        { id: 5, name: 'Tables', category: 2 },
        { id: 6, name: 'Sofa', category: 2 },
        { id: 7, name: 'Washing Machine', category: 3 },
        { id: 8, name: 'Flask', category: 4 }
    ]
}

// const selectMySum = createSelector(
//     stateItems,
//     stateCategory,
//     (state, i) => i,
//     (s, p, i) => s + p + i
// );

const stateItems = (state) => state.items
const stateCategory = (state) => state.category

const getSelectedItem = createSelector([stateItems, (state, itemId) => itemId], (items, itemId) => items.filter(item => item.id === itemId))
const getSelectedCategory = createSelector([stateCategory], (categories) => categories.filter((category) => category.id > 1))
const getItemsByCategory = createSelector([stateCategory, stateItems], (cat, item) => {
    return item.filter((v) => {
        return v.category > 1
    })
})

const getItemsByCategory2 = createSelector([stateCategory, stateItems, (state, i) => i], (cat, item, i) => {
    return item.filter((v) => {
        return v.category == i
    })
})

console.log(getSelectedItem(state2, 3))
console.log(getSelectedCategory(state2))
console.log(getItemsByCategory(state2))
console.log(getItemsByCategory2(state2, 3))


const state = {
    a: 6,
    b: 10,
    c: {
        first: 15
    },
    d: {
        second: 2
    }
}

const stateA = (state) => state.a
const stateB = (state) => state.b
const stateC = (state) => state.c
const stateD = (state) => state.d

const getCValue = createSelector([stateC], (c) => c.first)
const getDValue = createSelector([stateD], (d) => d.second)

const getABMultiply = createSelector([stateA, stateB], (a, b) => a * b)
const getABAddition = createSelector(stateA, stateB, (a, b) => a + b)
console.log(getABMultiply(state), getABAddition(state))
const getCDMultiply = createSelector([getCValue, getDValue], (c, d) => c * d)
const getCDAddition = createSelector([getCValue, getDValue], (c, d) => c + d)
console.log(getCDMultiply(state), getCDAddition(state))


// const selectItemsByCategory = createSelector(
//     [
//       // Usual first input - extract value from `state`
//       state => state.items,
//       // Take the second arg, `category`, and forward to the output selector
//       (state, category) => category
//     ],
//     // Output selector gets (`items, category)` as args
//     (items, category) => items.filter(item => item.category === category)
//   )
// const electronicItems = selectItemsByCategory(state, "electronics");



const makeSelectItemsByCategory = () => {
    const selectItemsByCategory = createSelector(
        [state => state.items, (state, category) => category],
        (items, category) => items.filter(item => item.category === category)
    )
    return selectItemsByCategory
}

console.log('makeSelectItemsByCategory :: ', makeSelectItemsByCategory()(state2, 1))

// const selectItemsByCategory = createSelector(
//     [
//       // Usual first input - extract value from `state`
//       state => state.items,
//       // Take the second arg, `category`, and forward to the output selector
//       (state, category) => category
//     ],
//     // Output selector gets (`items, category)` as args
//     (items, category) => items.filter(item => item.category === category)
//   )
// const electronicItems = selectItemsByCategory(state, "electronics");



// const makeSelectItemsByCategory = () => {
//     const selectItemsByCategory = createSelector(
//       [state => state.items, (state, category) => category],
//       (items, category) => items.filter(item => item.category === category)
//     )
//     return selectItemsByCategory
//   }



// import { createSelector } from 'reselect'

// const selectTodoDescriptionsReselect = createSelector(
//   [state => state.todos],
//   todos => todos.map(todo => todo.text)
// )