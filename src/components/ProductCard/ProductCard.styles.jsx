import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    opacity: 1;
    transition: opacity 200ms ease-out;
  }

  button {
    width: 80%;
    opacity: 0;
    position: absolute;
    top: 266px;
    transform: translateY(50%);
  }

  &:hover {
    img {
      opacity: 0.9;
      transition: opacity 200ms ease-out;
    }

    button {
      transform: translateY(0);
      transition: all 200ms ease-out;
      opacity: 1;
      display: flex;
    }
  }
`;

export const ProductCardImg = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 8px;
  border-radius: 24px;
`;

export const ProductCartFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 8px;
`;

export const ProductCardName = styled.span``;

export const ProductCardPrice = styled.span`
  font-weight: 600;
`;
