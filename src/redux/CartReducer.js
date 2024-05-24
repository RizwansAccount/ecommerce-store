import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'CartReducer',
    initialState: {
        cartItems: []
    },
    reducers: {
        addproduct: (state, action) => {
          console.log(action)
          const itemInCart = state.cartItems.find( item => item.id === action.payload.id);
          if (itemInCart) { itemInCart.quantity++; } 
          else { state.cartItems.push({...action.payload, quantity: 1}); }
        },
        incrementQuantity: (state, action) => {
          const item = state.cartItems.find(item => item.id === action.payload.id);
          item.quantity++;
        },
        decrementQuantity: (state, action) => {
          const item = state.cartItems.find(item => item.id === action.payload.id);
          if (item.quantity === 1) {
            item.quantity = 1;
          } else {
            item.quantity--;
          }
        },
        removeproduct: (state, action) => {
          const removeItem = state.cartItems.filter(item => item.id !== action.payload);
          state.cartItems = removeItem;
        },
      },
})

export const { addproduct, decrementQuantity, incrementQuantity, removeproduct } = slice.actions;

export const selectedCartSelector = (state) => state.CartReducer.cartItems;

export default slice.reducer;
  