import AppleSVG from "../../../assets/Icons/AppleSVG";
import GooglePlaySVG from "../../../assets/Icons/GooglePlaySVG";
import LogoTitleSVG from "../../../assets/Icons/LogoTitleSVG";
import SectionsTitle from "../../Common/SectionsTitle";
import {
  StyledAboutUsSectionContainer,
  StyledButtonsAndDescriptionContainer,
  StyledButtonsContainer,
  StyledDescription,
} from "./styles";

const AboutSection = () => {
  return (
    <StyledAboutUsSectionContainer>
      <LogoTitleSVG></LogoTitleSVG>

      <StyledButtonsAndDescriptionContainer>
        <StyledButtonsContainer>
          <GooglePlaySVG></GooglePlaySVG>
          <AppleSVG></AppleSVG>
        </StyledButtonsContainer>

        <SectionsTitle title="ABOUT US:" />

        <StyledDescription />
      </StyledButtonsAndDescriptionContainer>
    </StyledAboutUsSectionContainer>
  );
};

export default AboutSection;
