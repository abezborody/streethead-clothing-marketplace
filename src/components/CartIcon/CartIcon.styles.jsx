import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 44px;
  height: 44px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 4px;
`;
export const ShoppingCartIcon = styled(ShoppingIcon)`
  width: 32px;
  height: 32px;
`;

export const ItemCounter = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 9px;
`;
