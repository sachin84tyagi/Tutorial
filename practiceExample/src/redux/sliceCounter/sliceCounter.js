import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    k: 0
}

export const sliceCounter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incK: (state, payload) => {
            state.k += 1
        },
        decK: (state, payload) => {
            state.k -= 1
        }
    }
})

export const { incK, decK } = sliceCounter.actions
export default sliceCounter.reducer