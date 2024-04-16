import SpicySVG from "../../../assets/Icons/SpicySVG";
import VeganSVG from "../../../assets/Icons/VeganSVG";
import VegetarianSVG from "../../../assets/Icons/VegetarianSVG";
import IconExplainTitle from "./IconExplainTitle";
import {
  StyledIconContainer,
  StyledIconExplanationContainer,
  StyledIconsMeaningContainer,
  StyledIconsSectionsTitle,
  StyledTitleContainer,
} from "./styles";

const IconsMeaningSections = () => {
  return (
    <>
      <StyledIconsMeaningContainer>
        <StyledTitleContainer>
          <StyledIconsSectionsTitle>
            THE MEANING OF OUR ICONS:
          </StyledIconsSectionsTitle>
        </StyledTitleContainer>

        <StyledIconContainer>
          <StyledIconExplanationContainer>
            <SpicySVG width={"60"} height={"45"} />
            <IconExplainTitle title="Spicy" />
          </StyledIconExplanationContainer>

          <StyledIconExplanationContainer>
            <VegetarianSVG width={"77px"} height={"60px"} />
            <IconExplainTitle title="Vegetarian" />
          </StyledIconExplanationContainer>

          <StyledIconExplanationContainer>
            <VeganSVG width={"77px"} height={"60px"} />
            <IconExplainTitle title="Vegan" />
          </StyledIconExplanationContainer>
        </StyledIconContainer>
      </StyledIconsMeaningContainer>
    </>
  );
};

export default IconsMeaningSections;
