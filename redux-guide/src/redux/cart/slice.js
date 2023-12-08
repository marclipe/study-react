import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

export const cartSlice = createSlice({
  name: 'cart', 
  initialState, 
  reducers: { //aqui colocamos as actions que vão alterar esse reducer
    addProduct: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      //se ele estiver, aumentar a sua quantidade em 1
      if (productIsAlreadyInCart) {
          state.products = state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        
          return; //para sair do if
      }

      //se ele não estiver no carrinho, adicioná-lo
        state.products = [...state.products, { ...action.payload, quantity: 1 }];
    }, 
    removeProduct: (state, action) => {
      state.products = state.products.filter(
          (product) => product.id !== action.payload
        )
    },
    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
    },
    decreaseProductQuantity: (state, action) => {
        state.products = state.products
          .map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0) //Se a quantity for 1 quero que ele tire do carrinho. Para isso o produto deve ser maior que zero
    }
  }
})

export const { addProduct, removeProduct, increaseProductQuantity, decreaseProductQuantity } = cartSlice.actions;

export default cartSlice.reducer;


