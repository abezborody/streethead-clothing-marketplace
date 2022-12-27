import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutItemOmageContainer = styled.img`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

/*
.checkout-item-container {


  .image-container {

  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      
    }

    .value {
      margin: 0 16px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
}


*/
