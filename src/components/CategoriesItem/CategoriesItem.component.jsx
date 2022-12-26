import "./CategoriesItem.styles.scss";

const CategoriesItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="categories-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="categories-item-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoriesItem;
