import SpicySVG from "../../../assets/Icons/SpicySVG";
import VeganSVG from "../../../assets/Icons/VeganSVG";
import VegetarianSVG from "../../../assets/Icons/VegetarianSVG";
import SectionsTitle from "../../Common/SectionsTitle";
import IconExplainTitle from "./IconExplainTitle";
import {
  StyledIconContainer,
  StyledIconExplanationContainer,
  StyledIconsMeaningContainer,
  StyledTitleContainer,
} from "./styles";

const IconsMeaningSections = () => {
  return (
    <>
      <StyledIconsMeaningContainer>
        <StyledTitleContainer>
          <SectionsTitle title="THE MEANING OF OUR ICONS:" />
        </StyledTitleContainer>

        <StyledIconContainer>
          <StyledIconExplanationContainer>
            <SpicySVG /> <IconExplainTitle title="Spicy" />
          </StyledIconExplanationContainer>

          <StyledIconExplanationContainer>
            <VegetarianSVG /> <IconExplainTitle title="Vegetarian" />
          </StyledIconExplanationContainer>

          <StyledIconExplanationContainer>
            <VeganSVG /> <IconExplainTitle title="Vegan" />
          </StyledIconExplanationContainer>
        </StyledIconContainer>
      </StyledIconsMeaningContainer>
    </>
  );
};

export default IconsMeaningSections;
