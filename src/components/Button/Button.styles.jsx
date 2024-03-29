import styled from 'styled-components';

export const BaseButton = styled.button`
  width: auto;
  letter-spacing: 0.5px;
  padding: 12px 20px;
  border-radius: 16px;
  font-size: 15px;
  background-color: #c1f377;
  color: black;
  text-transform: uppercase;
  font-family: 'Inter';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  transition: all 100ms ease-out;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: 1px solid transparent;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid transparent;

  &:hover {
    background-color: #c1f377;
    border: 1px solid transparent;
  }
`;
