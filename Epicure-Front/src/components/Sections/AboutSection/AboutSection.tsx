import React from "react";
import AppleSVG from "../../../assets/Icons/AppleSVG";
import GooglePlaySVG from "../../../assets/Icons/GooglePlaySVG";
import LogoTitleSVG from "../../../assets/Icons/LogoTitleSVG";
import {
  StyledAboutUsSectionContainer,
  StyledButtonsAndDescriptionContainer,
  StyledButtonsContainer,
  StyledDescription,
  StyledSectionsTitle,
} from "./styles";

interface AboutUsProps {
  description: string;
}

const AboutSection = ({ description }: AboutUsProps) => {
  const title = "ABOUT US:";
  description =
    "orem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio explicabo optio ab molestiae quaerat at eligendi atque? Vitae quisquam maiores tempora placeat velit numquam est animi quaerat, illo minima?";
  return (
    <StyledAboutUsSectionContainer>
      <LogoTitleSVG></LogoTitleSVG>

      <StyledButtonsAndDescriptionContainer>
        <StyledButtonsContainer>
          <GooglePlaySVG></GooglePlaySVG>
          <AppleSVG></AppleSVG>
        </StyledButtonsContainer>

        <StyledSectionsTitle>{title}</StyledSectionsTitle>

        <StyledDescription>{description}</StyledDescription>
      </StyledButtonsAndDescriptionContainer>
    </StyledAboutUsSectionContainer>
  );
};

export default AboutSection;
