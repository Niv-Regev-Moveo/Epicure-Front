import {
  ChefDescription,
  StyledCOTWContainer,
  StyledChefImg,
  StyledChefNameTitle,
  StyledImageTitleContainer,
  StyledCOTWSectionContainer,
} from "./styledChefOfTheWeekSection";
import ChefImage from "../../../../Photos/ChefImage.png";
import SectionsTitle from "../../SectionsTitle";

interface ChefOfTheWeekSectionProps {
  image?: string;
  title?: string;
  text?: string;
}

const ChefOfTheWeekSection = ({ title, text }: ChefOfTheWeekSectionProps) => {
  return (
    <>
      <StyledCOTWSectionContainer>
        <SectionsTitle title="CHEF OF THE WEEK:" />
        <StyledCOTWContainer>
          <StyledImageTitleContainer>
            <StyledChefImg src={ChefImage} alt={title} />
            <StyledChefNameTitle>{title}</StyledChefNameTitle>
          </StyledImageTitleContainer>
          <ChefDescription>{text}</ChefDescription>
        </StyledCOTWContainer>
      </StyledCOTWSectionContainer>
    </>
  );
};

export default ChefOfTheWeekSection;
