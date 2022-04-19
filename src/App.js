import { Route, Switch } from "react-router-dom";
import CartProvider from "./Context/Cart/CartProvider";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </Layout>
    </CartProvider>
  );
}

export default App;
