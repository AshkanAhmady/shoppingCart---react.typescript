import * as data from "../data";
import Product from "../Components/Product";
import { useCart } from "../Context/Cart/CartProvider";
import { ProductInterface } from "../Interfaces";

const HomePage = () => {
  const [_, dispatch] = useCart();

  const addProductHandler = (product: ProductInterface) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="productList">
      {data.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addProductHandler={addProductHandler}
        />
      ))}
    </div>
  );
};

export default HomePage;
