import {
  StyledDIshIngredients,
  StyledCardDishContainer,
  StyledDishPrice,
  StyledDescriptionAndIconContainer,
  StyledSpicySVG,
  StyledSVGContainer,
} from "./styles";

const CardDishes = () => {
  const dishIngredients =
    "dish Ingredients name from data , dish Ingredients name from data,  dish Ingredients name from data,  dish Ingredients name from data,";

  const dishPrice = "88";
  const shekelUnicode = "\u20AA";

  return (
    <StyledCardDishContainer>
      <StyledDescriptionAndIconContainer>
        <StyledDIshIngredients>{dishIngredients}</StyledDIshIngredients>
        <StyledSVGContainer>
          <StyledSpicySVG width="40" height="31" />
        </StyledSVGContainer>
      </StyledDescriptionAndIconContainer>
      <StyledDishPrice>
        {shekelUnicode} {dishPrice}
      </StyledDishPrice>
    </StyledCardDishContainer>
  );
};

export default CardDishes;
