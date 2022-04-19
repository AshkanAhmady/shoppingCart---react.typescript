import { createContext, useContext, useReducer } from "react";
import cartReducer from "./CartReducer";

const initialState = {
  cart: [],
  total: 0,
};

const CartContext = createContext();
const CartContextDispatcher = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher value={dispatch}>{children}</CartContextDispatcher>
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
