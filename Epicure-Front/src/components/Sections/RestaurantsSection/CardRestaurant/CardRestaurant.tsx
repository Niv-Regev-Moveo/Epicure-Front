// src/components/Common/Restaurant/CardRestaurant.tsx
import React from "react";
import {
  StyledChefName,
  StyledCardRestaurantContainer,
  StyledStarsContainer,
} from "./styles";
import getStars from "../../../../Utils/getStars";
import { CardRestaurantProps } from "../../../../redux/chunk/collections/restaurants/restaurants.types";

const CardRestaurant: React.FC<CardRestaurantProps> = ({
  chefName,
  rating,
}) => {
  return (
    <StyledCardRestaurantContainer>
      <StyledChefName>{chefName}</StyledChefName>
      <StyledStarsContainer>{getStars(rating)}</StyledStarsContainer>
    </StyledCardRestaurantContainer>
  );
};

export default CardRestaurant;
