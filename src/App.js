import { Route, Switch } from "react-router-dom";
import CartProvider from "./Context/Cart/CartProvider";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <CartProvider>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </CartProvider>
    </Layout>
  );
}

export default App;
