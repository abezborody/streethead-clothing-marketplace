import { useNavigate } from 'react-router-dom';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component.jsx';

import {
  BackgroundImage,
  Body,
  CategoriesItemContainer,
} from './CategoriesItem.styles.jsx';

const CategoriesItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <CategoriesItemContainer onClick={onNavigateHandler}>
      <Body>{title.at(0).toUpperCase().concat(title.slice(1))}</Body>
      <BackgroundImage imageUrl={imageUrl} />
    </CategoriesItemContainer>
  );
};

export default CategoriesItem;
