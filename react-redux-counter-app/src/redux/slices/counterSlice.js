import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        handleInc: (state) => {
            state.value += 1
        },
        handleDec: (state) => {
            state.value -= 1
        },
        handleIncByVal: (state, actions) => {
            state.value += actions.payload
        },
        handleDecByVal: (state, actions) => {
            state.value -= actions.payload
        },

    }
})

export const { handleInc, handleDec, handleIncByVal, handleDecByVal } = counterSlice.actions

export default counterSlice.reducer