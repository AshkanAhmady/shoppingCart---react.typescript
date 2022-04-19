import * as data from "../data";
import Product from "../Components/Product";
import { useCartActions } from "../Context/Cart/CartProvider";

const HomePage = () => {
  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <section className="productList">
      {data.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addProductHandler={addProductHandler}
        />
      ))}
    </section>
  );
};

export default HomePage;
