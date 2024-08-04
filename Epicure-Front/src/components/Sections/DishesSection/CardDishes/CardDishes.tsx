import React from "react";
import {
  StyledDIshIngredients,
  StyledCardDishContainer,
  StyledDishPrice,
  StyledDescriptionAndIconContainer,
} from "./styles";
import ShekelSVG from "../../../../assets/Icons/ShekelSVG";
import { EIconMeaning } from "../../../enum/iconMeaning.enum";
import DynamicIcon from "./DynamicIcon";

interface CardDishesProps {
  ingredients: string[];
  price: number;
  icon: EIconMeaning;
}

const CardDishes: React.FC<CardDishesProps> = ({
  ingredients,
  price,
  icon,
}) => {
  const separatedIngredients = ingredients.map((ingredient) =>
    ingredient.trim()
  );

  return (
    <StyledCardDishContainer>
      <StyledDescriptionAndIconContainer>
        <StyledDIshIngredients>
          {separatedIngredients.join(", ")}
        </StyledDIshIngredients>
        <DynamicIcon icon={icon} />
      </StyledDescriptionAndIconContainer>
      <StyledDishPrice>
        <ShekelSVG />
        {price}
      </StyledDishPrice>
    </StyledCardDishContainer>
  );
};

export default CardDishes;
