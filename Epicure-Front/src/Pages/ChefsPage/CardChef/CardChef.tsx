import React from "react";
import {
  StyledChefImg,
  StyledChefNameTitleContainer,
  StyledImageTitleContainer,
  StylesChefName,
} from "./styles";

interface CardChefProps {
  name: string;
  image: string;
}

const CardChef: React.FC<CardChefProps> = ({ name, image }) => {
  return (
    <StyledImageTitleContainer>
      <StyledChefImg src={image} alt={name} />
      <StyledChefNameTitleContainer>
        <StylesChefName>{name}</StylesChefName>
      </StyledChefNameTitleContainer>
    </StyledImageTitleContainer>
  );
};

export default CardChef;
