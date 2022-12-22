import "./CheckoutItem.styles.scss";

import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
  console.log(item.id);
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const increaseHandler = () => {
    addItemToCart(item);
  };
  const decreaseHandler = () => {
    removeItemFromCart(item);
  };
  const clearItemHandler = () => {
    clearItemFromCart(item);
  };

  return (
    <div className="checkout-item-container">
      <img className="image-container" src={imageUrl} alt={name} />
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;