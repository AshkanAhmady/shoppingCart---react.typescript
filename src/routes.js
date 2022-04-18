import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/cart", component: CartPage },
];

export default routes;
