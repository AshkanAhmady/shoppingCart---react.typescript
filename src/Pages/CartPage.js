import { useCart, useCartActions } from "../Context/Cart/CartProvider";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiPlusSm, HiMinusSm, HiOutlineTrash } from "react-icons/hi";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  const incrementHandler = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const decrementHandler = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  if (cart.length == 0) {
    return <h3>Cart Is Empty !</h3>;
  }

  return (
    <section className="cart">
      <article>
        {cart.map((item) => (
          <div className="singleProduct" key={item.id}>
            <div className="addedProduct">
              <div>
                <img src={item.image} />
                <h1>{item.name}</h1>
                <span>${item.price}</span>
              </div>

              <div className="quantity">
                <div
                  className="iconBox"
                  onClick={() => incrementHandler(item.id)}
                >
                  <HiPlusSm />
                </div>
                <div className="number">{item.quantity}</div>
                <div
                  className={`iconBox ${item.quantity == 1 && "trash"}`}
                  onClick={() => decrementHandler(item.id)}
                >
                  {item.quantity == 1 ? <HiOutlineTrash /> : <HiMinusSm />}
                </div>
              </div>
              <div className="description">
                <ul>
                  {item.description.map((desc, index) => (
                    <li key={index}>
                      <FaRegCheckCircle className="icon" />
                      {desc.support}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </article>
      <aside>
        <h1>total:</h1>
        <span>{total}</span>
      </aside>
    </section>
  );
};

export default CartPage;
