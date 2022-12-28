import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  Arrow,
  CheckoutItemValue,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  RemoveButton,
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
      <CheckoutItemImageContainer src={imageUrl} alt={name} />
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <Arrow onClick={decreaseHandler}>&#10094;</Arrow>
        <CheckoutItemValue>{quantity}</CheckoutItemValue>
        <Arrow onClick={increaseHandler}>&#10095;</Arrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
