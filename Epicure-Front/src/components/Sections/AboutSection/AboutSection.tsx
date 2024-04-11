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

interface AboutUsProps {
  description: string;
}

const AboutSection = ({ description }: AboutUsProps) => {
  const title = "ABOUT US:";
  description =
    "orecabo optillo m us at eligendi atque? Vitae quisquam maiores teerat, illosectetur adipisicing elit. Necessitatibus distinctio explicabo optio ab molestiae quaerat at eligendi atque? Vitae quisquam maiores tempora placeat velit numquam est animi quaerat, illo minima? consectetur adipisicing elit. Necessitatibus distinctio explicabo optio ab molestiae quaerat at eligendi atque? Vitae quisquam maiores tempora placeat velit numquam est animi quaerat, illo m consectetur adipisicing elit. Necessitatibus distinctio explicabo optio ab molestiae quaerat at eligendi atque? Vitae quisquam maiores tempora placeat velit numquam est animi quaerat, illo m ";
  return (
    <StyledAboutUsSectionContainer>
      <StyledLogoContainer>
        <LogoTitleSVG />
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
