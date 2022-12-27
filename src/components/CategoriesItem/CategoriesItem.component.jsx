import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  CategoriesItemContainer,
} from "./CategoriesItem.styles.jsx";

const CategoriesItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <CategoriesItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </CategoriesItemContainer>
  );
};

export default CategoriesItem;
