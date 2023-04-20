import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  width: 100%;
  min-height: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;
`;
