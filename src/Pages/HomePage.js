import * as data from "../data";
import Product from "../Components/Product";

const addProductHandler = (product) => {
  console.log(product);
};

const HomePage = () => {
  return (
    <section className="productList">
      {data.products.map((product) => (
        <Product
          key={product.image}
          product={product}
          addProductHandler={addProductHandler}
        />
      ))}
    </section>
  );
};

export default HomePage;
