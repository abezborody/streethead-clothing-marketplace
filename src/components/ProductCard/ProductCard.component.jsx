import "./ProductCard.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button from "../Button/Button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCartHandler}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
