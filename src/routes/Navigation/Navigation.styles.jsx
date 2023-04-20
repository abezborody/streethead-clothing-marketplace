import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 8px 16px 8px 16px;
  border: 1px solid #00000050;
  /* background-color: #c1f377; */
  border-radius: 24px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  opacity: 1;
  transition: opacity 200ms ease-out;

  &:hover {
    opacity: 0.5;
    transition: opacity 200ms ease-out;
  }
`;

// .navigation {
//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//     }
//   }
// }
