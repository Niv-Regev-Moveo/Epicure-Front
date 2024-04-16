import { useMediaQuery } from "react-responsive";
import AppleSVG from "../../../assets/Icons/AppleSVG";
import GooglePlaySVG from "../../../assets/Icons/GooglePlaySVG";
import LogoTitleSVG from "../../../assets/Icons/LogoTitleSVG";

import {
  StyledAboutUsSectionContainer,
  StyledButtonsAndDescriptionContainer,
  StyledButtonsContainer,
  StyledDescription,
  StyledSectionsTitle,
  StyledTitleAndDescriptionContainer,
  StyledLogoContainer,
} from "./styles";
import BigLogoTitle from "../../../assets/Icons/biglogoTitle";

const AboutSection = () => {
  const title = "ABOUT US:";
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
eu ipsum. Cras porta malesuada eros, eget blandit
turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
dignissim a vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
eu ipsum. Cras porta malesuada eros.`;

  const isBigScreen = useMediaQuery({ minWidth: 1439 });

  return (
    <StyledAboutUsSectionContainer>
      <StyledLogoContainer>
        {isBigScreen ? <BigLogoTitle /> : <LogoTitleSVG />}
      </StyledLogoContainer>

      <StyledButtonsAndDescriptionContainer>
        <StyledButtonsContainer>
          <GooglePlaySVG></GooglePlaySVG>
          <AppleSVG></AppleSVG>
        </StyledButtonsContainer>

        <StyledTitleAndDescriptionContainer>
          <StyledSectionsTitle>{title}</StyledSectionsTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledTitleAndDescriptionContainer>
      </StyledButtonsAndDescriptionContainer>
    </StyledAboutUsSectionContainer>
  );
};

export default AboutSection;
