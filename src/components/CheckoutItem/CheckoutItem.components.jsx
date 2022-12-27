import {
  CheckoutItemContainer,
  CheckoutItemOmageContainer,
  Arrow,
} from "./CheckoutItem.styles.jsx";

import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
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
    <CheckoutItemContainer>
      <CheckoutItemOmageContainer src={imageUrl} alt={name} />
      <span className="name">{name}</span>
      <span className="quantity">
        <Arrow onClick={decreaseHandler}>&#10094;</Arrow>
        <span className="value">{quantity}</span>
        <Arrow onClick={increaseHandler}>&#10095;</Arrow>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
