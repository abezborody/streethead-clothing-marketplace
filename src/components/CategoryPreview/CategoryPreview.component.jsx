import ProductCard from "../ProductCard/ProductCard.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewLink,
  CategoryPreviewGrid,
} from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewLink to={title}>
          {title.toUpperCase()}
        </CategoryPreviewLink>
      </h2>
      <CategoryPreviewGrid>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewGrid>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
