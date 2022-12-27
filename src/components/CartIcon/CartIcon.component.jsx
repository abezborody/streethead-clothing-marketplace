import {
  CartIconContainer,
  ItemCounter,
  ShoppingCartIcon,
} from "./CartIcon.styles";

import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingCartIcon />
      <ItemCounter>{cartCount}</ItemCounter>
    </CartIconContainer>
  );
};

export default CartIcon;
