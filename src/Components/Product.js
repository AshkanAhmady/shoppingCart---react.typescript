import { HiPlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useCart } from "../Context/Cart/CartProvider";
import { checkInCart } from "../Util/checkInCart";

const Product = ({ product, addProductHandler }) => {
  const { cart } = useCart();

  return (
    <div className="product">
      {checkInCart(cart, product) ? (
        <Link className="continueBtn" to="/cart">
          Continue ordering
        </Link>
      ) : (
        <HiPlusSm
          onClick={() => addProductHandler(product)}
          className="addToCard"
        />
      )}

      <img src={product.image} />
      <div className="details">
        <h3>{product.name}</h3>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default Product;
