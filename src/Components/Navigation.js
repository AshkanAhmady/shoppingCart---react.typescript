import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact={true}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
