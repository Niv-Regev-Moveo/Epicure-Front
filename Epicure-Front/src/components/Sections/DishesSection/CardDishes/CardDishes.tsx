import SpicySVG from "../../../../assets/Icons/SpicySVG";
import {
  StyledDIshName,
  StyledCardDishContainer,
  StyledDishPrice,
} from "./styles";

const CardDishes = () => {
  const dishIngredients =
    "dish Ingredients name from data , dish Ingredients name from data,  dish Ingredients name from data,  dish Ingredients name from data,";

  const dishPrice = "88";

  return (
    <StyledCardDishContainer>
      <StyledDIshName>{dishIngredients}</StyledDIshName>
      <SpicySVG />
      <StyledDishPrice>{dishPrice}</StyledDishPrice>
    </StyledCardDishContainer>
  );
};

export default CardDishes;
