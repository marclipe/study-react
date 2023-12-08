export const selectProductsCount = (rootReducer) => {
  console.log("State: ", rootReducer.cart);
  return rootReducer.cart.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0 
  );
}

export const selectProductsTotalPrice = (rootReducer) => {
  return (
    rootReducer.cart.products.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    ) 
  );
}