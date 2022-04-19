import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";

const routes = [
  { path: "/cart", component: CartPage },
  { path: "/", component: HomePage, exact: true },
];

export default routes;
