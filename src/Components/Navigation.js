import { NavLink, withRouter } from "react-router-dom";
import { useCart } from "../Context/Cart/CartProvider";
import {
  RiShoppingCartLine,
  RiHomeLine,
  RiHomeFill,
  RiShoppingCartFill,
} from "react-icons/ri";

const Navigation = ({ location }) => {
  const { cart } = useCart();

  return (
    <header>
      <div className="logo">
        <div></div>
        <h1>Shopping App</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact={true}>
              {location.pathname == "/" ? (
                <RiHomeFill className="icon" />
              ) : (
                <RiHomeLine className="icon" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              {location.pathname == "/cart" ? (
                <RiShoppingCartFill className="icon" />
              ) : (
                <RiShoppingCartLine className="icon" />
              )}
            </NavLink>
            {cart.length > 0 && (
              <div className="number">
                <span>{cart.length}</span>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
