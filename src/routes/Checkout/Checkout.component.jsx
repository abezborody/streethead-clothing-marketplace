import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.components";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <span>Total price: {totalPrice} USD</span>
    </div>
  );
};

export default Checkout;
