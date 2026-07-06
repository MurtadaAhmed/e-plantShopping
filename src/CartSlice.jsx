import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Remove an item from the cart based on its name
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      // Extract the item's name and amount from the action.payload
      const { name, quantity } = action.payload;
      // Look for the item in the state.items array that matches the extracted name
      const itemToUpdate = state.items.find(item => item.name === name);
      // If the item is found, update its quantity to the new amount
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export the action creators to use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;