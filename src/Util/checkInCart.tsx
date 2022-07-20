import { ProductInterface } from "../Interfaces";

export function checkInCart(cart: ProductInterface[], product: ProductInterface) {
  return cart.find((c: ProductInterface) => c.id === product.id);
}
