import React from "react";
import { EIconMeaning } from "../../../../enum/iconMeaning.enum";
import VegetarianSVG from "../../../../../assets/Icons/VegetarianSVG";
import VeganSVG from "../../../../../assets/Icons/VeganSVG";
import SpicySVG from "../../../../../assets/Icons/SpicySVG";
import { StyledSVGContainer } from "../styles";

interface DynamicIconProps {
  icon: EIconMeaning;
}

const IconComponents = {
  [EIconMeaning.SPICY]: SpicySVG,
  [EIconMeaning.VEGAN]: VeganSVG,
  [EIconMeaning.VEGETARIAN]: VegetarianSVG,
};

const DynamicIcon: React.FC<DynamicIconProps> = ({ icon }) => {
  const IconComponent = IconComponents[icon];

  if (!IconComponent) return null;

  return (
    <StyledSVGContainer>
      <IconComponent width="40" height="31" />
    </StyledSVGContainer>
  );
};

export default DynamicIcon;
