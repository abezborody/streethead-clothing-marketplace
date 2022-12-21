import "./CheckoutItem.styles.scss";

import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
  console.log(item.id);
  const { addItemToCart, removeItemFromCart, deleteCartItemFromCart } =
    useContext(CartContext);

  const increaseHandler = () => {
    addItemToCart(item);
  };
  const decreaseHandler = () => {
    removeItemFromCart(item);
  };
  const deleteHandler = () => {
    deleteCartItemFromCart(item);
  };
  // const decreaseHandler = () => {
  //   decreaseItemQuantity(cartItems, item);
  // };

  return (
    <div className="checkout-item-container">
      <img className="image-container" src={imageUrl} alt={name} />
      <span className="name">{name}</span>
      <div className="quantity">
        <button onClick={decreaseHandler}>—</button>
        <br />
        <span className="quantity">{quantity}</span>
        <br />
        <button onClick={increaseHandler}>+</button>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
