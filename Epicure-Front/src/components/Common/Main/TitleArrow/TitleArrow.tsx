import React from "react";
import ArrowsRightSVG from "../../../Icons/ArrowsRightSVG";
import {
  StyledLinkedSectionTitle,
  StyledTitle,
  StyledArrowTitleContainer,
} from "./styledTitleArrow";
const TitleArrow = () => {
  const title = "All Restaurants";
  return (
    <StyledArrowTitleContainer>
      <StyledLinkedSectionTitle to={"/Restaurants"}>
        <StyledTitle> {title}</StyledTitle>

        <a href="">
          <ArrowsRightSVG />
        </a>
      </StyledLinkedSectionTitle>
    </StyledArrowTitleContainer>
  );
};

export default TitleArrow;
