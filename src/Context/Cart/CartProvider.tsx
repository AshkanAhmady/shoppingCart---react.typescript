import { createContext, useContext, useReducer } from "react";
import { CartInterface } from "../../Interfaces";
import cartReducer from "./CartReducer";

const initialState: CartInterface = {
  cart: [],
  total: 0,
};

const CartContext = createContext<any>(null);

const CartProvider = ({ children }: any) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={[cart, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
