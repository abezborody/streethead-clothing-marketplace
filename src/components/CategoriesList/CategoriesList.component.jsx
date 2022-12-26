import "./CategoriesList.styles.scss";

import CategoriesItem from "../CategoriesItem/CategoriesItem.component";

const CategoriesList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoriesItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoriesList;
