import SpicySVG from "../../../../Icons/SpicySVG";
import VeganSVG from "../../../../Icons/VeganSVG";
import VegetarianSVG from "../../../../Icons/VegetarianSVG";
import SectionsTitle from "../../SectionsTitle";
import IconExplainTitle from "./IconExplainTitle";
import {
  StyledIconContainer,
  StyledIconExplanationContainer,
  StyledIconsMeaningContainer,
  StyledTitleContainer,
} from "./styledIconsMeaningSections";

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
