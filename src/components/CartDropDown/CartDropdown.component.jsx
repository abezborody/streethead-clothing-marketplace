import "./CartDropdown.styles.scss";

import Button from "../Button/Button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
