import styled from 'styled-components';

export const BackgroundImage = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(to bottom, #00000000, #000000),
    ${({ imageUrl }) => `url(${imageUrl})`};
`;
export const Body = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: absolute;
  bottom: 32px;
  left: 32px;
  font-weight: bold;
  font-size: 32px;
  color: #ffffff;
  transform: translateY(0);
  transition: transform 300ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const CategoriesItemContainer = styled.div`
  position: relative;
  min-width: 30%;
  min-height: 200px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #00000020;
  border-radius: 32px;
  margin: 0;
  overflow: hidden;
  & ${BackgroundImage} {
    transform: scale(1);
    transition: transform 300ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 300ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      transform: translateY(-4px);
    }
  }

  &:first-child {
    grid-column: 1 / span 4;
    grid-row: span 2;
  }

  &:nth-child(n + 2) {
    grid-column: span 2;
  }

  &:nth-child(n + 4) {
    grid-column: span 3;
  }
`;
