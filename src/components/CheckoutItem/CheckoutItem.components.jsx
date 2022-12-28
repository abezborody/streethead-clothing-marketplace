import {
  CheckoutItemContainer,
  CheckoutItemOmageContainer,
  Arrow,
  Value,
  Name,
  Price,
  Quantity,
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
      <CheckoutItemOmageContainer src={imageUrl} alt={name} />
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={decreaseHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
