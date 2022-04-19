const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let updatedCart = [...state.cart];
      let updatedItemIndex = updatedCart.findIndex(
        (item) => item.id == action.payload.id
      );

      // if this product wasnt in the cart
      if (updatedItemIndex < 0) {
        // add quantity to object
        updatedCart.push({ ...action.payload, quantity: 1 });
        return {
          ...state,
          cart: updatedCart,
          total: state.total + action.payload.price,
        };
      } else {
        // increment quantity of product
        let updatedItem = updatedCart[updatedItemIndex];
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total + action.payload.price,
        };
      }
    }
    case "INCREMENT_QUANTITY": {
      let updatedCart = [...state.cart];
      let updatedItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      let updatedItem = updatedCart[updatedItemIndex];

      updatedItem.quantity++;
      return {
        ...state,
        cart: updatedCart,
        total: state.total + updatedItem.price,
      };
    }
    case "DECREMENT_QUANTITY": {
      let updatedCart = [...state.cart];
      let updatedItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      let updatedItem = updatedCart[updatedItemIndex];

      updatedItem.quantity--;
      if (updatedItem.quantity == 0) {
        updatedCart = updatedCart.filter((item) => item.id != action.payload);
        return {
          ...state,
          cart: updatedCart,
          total: state.total - updatedItem.price,
        };
      } else {
        return {
          ...state,
          cart: updatedCart,
          total: state.total - updatedItem.price,
        };
      }
    }

    // another way to computing total price
    // case "TOTAL_COMPUTING": {
    //   let updateTotal = state.total;
    //   let totalPrice = 0;
    //   state.cart.map(
    //     (item) => (totalPrice = totalPrice + item.price * item.quantity)
    //   );
    //   updateTotal = totalPrice;
    //   return { ...state, total: updateTotal };
    // }

    default:
      return state;
  }
};

export default cartReducer;
