import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
    data: [
        { id: 1, name: 'Laptops', price: 90 },
        { id: 2, name: 'Printers', price: 60 },
        { id: 3, name: 'Projectors', price: 50 },
        { id: 4, name: 'Bed', price: 40 },
        { id: 5, name: 'Tables', price: 24 },
        { id: 6, name: 'Sofa', price: 36 },
        { id: 7, name: 'Washing Machine', price: 38 },
        { id: 8, name: 'Flask', price: 10 }
    ]
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {
        addProduct: (state, action) => {
            //
        },
        deleteProduct: (state, action) => {
            //
        }
        //
    }
})
export const { addProduct, deleteProduct } = productSlice.actions
export default productSlice.reducer
