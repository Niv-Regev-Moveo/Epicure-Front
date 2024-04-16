import ArrowsRightSVG from "../../../assets/Icons/ArrowsRightSVG";
import { StyledLinkedSectionTitle, StyledTitle } from "./styles";

const TitleArrow = () => {
  const title = "All Restaurants";

  return (
    <StyledLinkedSectionTitle to="/Restaurants">
      <StyledTitle>{title}</StyledTitle>
      <ArrowsRightSVG />
    </StyledLinkedSectionTitle>
  );
};

export default TitleArrow;
