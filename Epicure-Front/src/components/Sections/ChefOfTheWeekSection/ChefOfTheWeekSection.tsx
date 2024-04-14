import {
  ChefDescription,
  StyledCOTWContainer,
  StyledChefImg,
  StyledChefNameTitle,
  StyledImageTitleContainer,
  StyledCOTWSectionContainer,
  StyledDescriptionContainer,
} from "./styles";
import ChefImage from "../../../assets/Photos/ChefImage.png";
import SectionsTitle from "../../Common/SectionsTitle";

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
          <StyledDescriptionContainer>
            <ChefDescription>{text}</ChefDescription>
          </StyledDescriptionContainer>
        </StyledCOTWContainer>
      </StyledCOTWSectionContainer>
    </>
  );
};

export default ChefOfTheWeekSection;
