import { CategoriesContainer } from "./CategoriesList.styles.jsx";

import CategoriesItem from "../CategoriesItem/CategoriesItem.component";

const CategoriesList = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoriesItem category={category} key={category.id} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoriesList;
