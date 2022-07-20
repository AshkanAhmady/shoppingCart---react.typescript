import { Link } from "react-router-dom";
import { UseAuth } from "../Context/Auth/AuthProvider";
import { useCart } from "../Context/Cart/CartProvider";
import { CartInterface, ProductInterface } from "../Interfaces";

const CheckoutPage = () => {
  const auth = UseAuth();
  const { cart, total }: CartInterface = useCart();

  if (!cart.length)
    return (
      <Link to="/" className="shoppingLink">
        Go To Shopping
      </Link>
    );

  return (
    <div className="checkout">
      <article>
        <h2>Checkout Details</h2>
        <hr />
        {auth && (
          <div>
            <div>
              <h4>Name:</h4>
              <span>{auth.name}</span>
            </div>
            <div>
              <h4>Email:</h4>
              <span>{auth.email}</span>
            </div>
            <div>
              <h4>Phone number:</h4>
              <span>{auth.phoneNumber}</span>
            </div>
          </div>
        )}
      </article>
      <aside>
        {cart.map((product: ProductInterface) => (
          <div key={product.id}>
            <span>
              <strong>{product.name}</strong> * {product.quantity} :{" "}
              {product.offPrice}
            </span>
          </div>
        ))}
        <hr />
        <span>
          <strong>Total Price:</strong> {total}
        </span>
      </aside>
    </div>
  );
};

export default CheckoutPage;
