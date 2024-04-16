import React from "react";
import {
  StyledDIshIngredients,
  StyledCardDishContainer,
  StyledDishPrice,
  StyledDescriptionAndIconContainer,
  StyledSpicySVG,
  StyledSVGContainer,
} from "./styles";
import ShekelSVG from "../../../../assets/Icons/ShekelSVG";

const CardDishes = () => {
  const separateIngredients = (ingredients: string): string[] => {
    const separatedIngredients: string[] = ingredients.split(",");

    const trimmedIngredients: string[] = separatedIngredients.map(
      (ingredient) => ingredient.trim()
    );

    return trimmedIngredients;
  };

  const dishIngredients = `Shrimps, Glass 
    Noodles, Kemiri Nuts,
    Shallots,
    Lemon Grass, Magic
    Chili Brown Coconut`;

  const separatedIngredients = separateIngredients(dishIngredients);

  const dishPrice = "88";

  return (
    <StyledCardDishContainer>
      <StyledDescriptionAndIconContainer>
        <StyledDIshIngredients>
          {separatedIngredients.join(", ")}
        </StyledDIshIngredients>
        <StyledSVGContainer>
          <StyledSpicySVG width="40" height="31" />
        </StyledSVGContainer>
      </StyledDescriptionAndIconContainer>
      <StyledDishPrice>
        <ShekelSVG /> {dishPrice}
      </StyledDishPrice>
    </StyledCardDishContainer>
  );
};

export default CardDishes;
