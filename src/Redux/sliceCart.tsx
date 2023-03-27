import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    id: string;
}

const initialState: CartState[] = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }: PayloadAction<string>) => {
            return [...state, { id: payload }]
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            return state.filter((item) => item.id !== itemId);
        },
        clearCart: (state) => {
            return []
        }
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const useCart = (state: any) => {
    return state.items as CartState[]
}
