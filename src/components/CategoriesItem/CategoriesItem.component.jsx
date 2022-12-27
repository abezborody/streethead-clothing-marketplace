import {
  BackgroundImage,
  Body,
  CategoriesItemContainer,
} from "./CategoriesItem.styles.jsx";

const CategoriesItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <CategoriesItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </CategoriesItemContainer>
  );
};

export default CategoriesItem;
