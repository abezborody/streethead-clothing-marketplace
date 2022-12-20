import "./CartDropdown.styles.scss";

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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={toCheckoutHandler}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
