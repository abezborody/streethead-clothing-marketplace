import {
  CartItemContainer,
  CartItemImg,
  CartItemDetails,
  ItemDetailsName,
  ItemDetailsPrice,
} from "./CartItem.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={name} />
      <CartItemDetails>
        <ItemDetailsName>{name}</ItemDetailsName>
        <ItemDetailsPrice>
          {quantity} x ${price}$
        </ItemDetailsPrice>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
