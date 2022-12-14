import "./CategoriesList.styles.scss";

import CategoryItem from "../CategoryItem/CategoryItem.component";

const CategoriesList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoriesList;
