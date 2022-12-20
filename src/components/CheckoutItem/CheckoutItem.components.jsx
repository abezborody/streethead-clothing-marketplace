import "./CheckoutItem.styles.scss";

import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
  console.log(item.id);
  const { increaseItemCart } = useContext(CartContext);

  const increaseHandler = () => {
    increaseItemCart(item);
  };
  // const decreaseHandler = () => {
  //   decreaseItemQuantity(cartItems, item);
  // };

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div>
        <h2>{name}</h2>
        <div>
          <button>—</button>
          <span>{quantity}</span>
          <button onClick={increaseHandler}>+</button>
        </div>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
