import {
  ProductCartContainer,
  ProductCardImg,
  ProductCartFooter,
  ProductCardName,
  ProductCardPrice,
} from "./ProductCard.styles";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <ProductCardImg src={imageUrl} alt={`${name}`} />
      <ProductCartFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>${price}</ProductCardPrice>
      </ProductCartFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addToCartHandler}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
