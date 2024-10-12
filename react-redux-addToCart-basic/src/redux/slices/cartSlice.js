import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    data: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addInCart: (state, action) => {
            //push payload obj into cart state

            const findIndex = state.data.findIndex((d) => d.id == action.payload.id)
            if (findIndex > -1) {
                state.data.map((c) => {
                    if (c.id == action.payload.id) {
                        c.counter += 1
                        c.priceByQuantity = c.counter * c.price
                    }
                })
            } else {
                state.data.push({ ...action.payload, counter: 1, priceByQuantity: action.payload.price })
            }


        },
        removeFromCart: (state, action) => {
            //remove payload obj into cart state
            state.data = state.data.filter((c) => c.id != action.payload.id)
        },
        increment: (state, action) => {
            console.log('action.payload :: ', action.payload)
            state.data.map((c) => {
                if (c.id == action.payload.id) {
                    c.counter += 1
                    c.priceByQuantity = c.counter * c.price
                }
            })
        },
        decrement: (state, action) => {
            state.data.map((c) => {
                if (c.id == action.payload.id) {
                    c.counter > 1 ? c.counter -= 1 : c.counter = 1
                    c.priceByQuantity = c.counter * c.price
                }
            })
        }
    }
})

export const { addInCart, removeFromCart, increment, decrement } = cartSlice.actions

export default cartSlice.reducer

export const cartData = (state) => state.data

export const getQuantityPrice = createSelector([cartData, (state, prop) => prop], (carts, prop) => carts.filter((cart) => cart.id == prop.id))
export const getQuantityPrice2 = createSelector([getQuantityPrice], (quantities) => quantities.map((quantity) => {
    return quantity.counter * quantity.price
}))

export const getTotalPrice = createSelector([cartData], (carts) => {
    let sum = 0
    for (let i = 0; i < carts.length; i++) {
        console.log(carts[i].priceByQuantity)
        sum += carts[i].priceByQuantity
    }
    return sum + 100
})
