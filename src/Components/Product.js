import { FaPlus } from "react-icons/fa";

const Product = ({ product, addProductHandler }) => {
  return (
    <div className="product">
      <FaPlus
        onClick={() => addProductHandler(product)}
        className="addToCard"
      />
      <img src={product.image} />
      <div className="details">
        <h3>{product.name}</h3>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default Product;
