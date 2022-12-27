import { CartDropdownContainer, CartItems } from "./CartDropdown.styles";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";

import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);

  const navigate = useNavigate();
  const toCheckoutHandler = () => {
    const checkoutPath = "checkout";
    navigate(checkoutPath);
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span>Your cart is empty</span>
        )}
      </CartItems>
      <Button onClick={toCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
