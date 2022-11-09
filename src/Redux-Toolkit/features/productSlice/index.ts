import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ProductTypes {
    id?: number
    title: string
    price: string
}

interface ProductStateTypes {
    products: Array<ProductTypes>
}

const initialState: ProductStateTypes = {
    products: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action:PayloadAction<ProductTypes>) => {
            return {
                ...state,
                products: [...state.products, { 
                    id: Date.now(),
                    title: action.payload.title,
                    price: action.payload.price
                 }]
            }
        }
    }
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer