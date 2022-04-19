import { NavLink, withRouter } from "react-router-dom";
import {
  RiShoppingCartLine,
  RiHomeLine,
  RiHomeFill,
  RiShoppingCartFill,
} from "react-icons/ri";

const Navigation = ({ location }) => {
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
