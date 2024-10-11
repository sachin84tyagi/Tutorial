import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialCounterState = {
    x: 0,
    y: 0,
    z: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        incCounterX: (state, action) => {
            state.x += 1
        },
        decCounterX: (state, action) => {
            state.x -= 1
        },
        incCounterY: (state, action) => {
            state.y += 1
        },
        decCounterY: (state, action) => {
            state.y -= 1
        },
        incCounterZ: (state, action) => {
            state.z += 1
        },
        decCounterZ: (state, action) => {
            state.z -= 1
        },
        selectTimes: (state, times = 5) =>
            counterSlice.getSelectors().incCounterZ(state) * times,

    }
})

export const { incCounterX, decCounterX, incCounterY, decCounterY, incCounterZ, decCounterZ } = counterSlice.actions

export default counterSlice.reducer


// Try to define reusable selectors alongside their corresponding reducers.
// input selectors
export const selectX = (state) => state.x;
export const selectY = (state) => state.y;
export const selectZ = (state) => state.z;

const selectSum = createSelector(
    [selectX, selectY, selectZ], // notation 1
    (x, y, z) => x + y + z
);
const selectProduct = createSelector(
    selectX, // notation 2
    selectY,
    selectZ,
    (x, y, z) => x * y * z
);
const selectMySum = createSelector(
    selectSum,
    selectProduct,
    (state, i) => i,
    (s, p, i) => s + p + i
);
const experiment = createSelector(selectX, selectY, (x, y) => x * y)
export { selectSum, selectProduct, selectMySum, experiment };


// const mySelector = createSelector(
//     state => state.todos,
//     todos => todos.filter(todo => todo.completed),
//     {
//       memoize: lruMemoize, // Use LRU cache, runs the input selectors and compares their current results with the previous ones
//       memoizeOptions: { resultEqualityCheck: (a, b) => a === b } // Custom equality comparison
//       argsMemoize: defaultMemoize, // Use default memoize function, compares the current arguments with the previous ones
//       argsMemoizeOptions: { isEqual: (a, b) => a === b }, // Custom equality comparison for argsMemoize
//       inputStabilityCheck: true, // Enable input stability check
//     }
//   );



// // Assume we have a state with a users slice containing a list of users
// const selectUsers = state => state.users.list;

// // Now we create a memoized selector using createSelector
// // This selector will not recompute as long as the list of users doesn't change.
// export const selectUserNames = createSelector(
//     [selectUsers],
//     (users) => users.map(user => user.name)
// );



// export const { selectAll: selectAllUsers } = usersSlice.getSelectors(state => state.users);



// // Arrow function, direct lookup
// const selectEntities = state => state.entities

// // Function declaration, mapping over an array to derive values
// function selectItemIds(state) {
//   return state.items.map(item => item.id)
// }

// // Function declaration, encapsulating a deep lookup
// function selectSomeSpecificField(state) {
//   return state.some.deeply.nested.field
// }

// // Arrow function, deriving values from an array
// const selectItemsWhoseNamesStartWith = (items, namePrefix) =>
//   items.filter(item => item.name.startsWith(namePrefix))