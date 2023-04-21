import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../Button/Button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  border-radius: 16px;
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 1px solid #00000040;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  box-shadow: 0px 4px 8px 8px #00000020;

  ${BaseButton}
  ${GoogleSignInButton}
  ${InvertedButton} {
    margin-bottom: 24px;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

// .cart-dropdown-container {

//   .empty-message {

//   }

//   .cart-items {

//   }

// }
