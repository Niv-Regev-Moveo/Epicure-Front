import {
  ChefDescription,
  StyledCOTWContainer,
  StyledChefImg,
  StyledChefNameTitle,
  StyledImageTitleContainer,
  StyledCOTWSectionContainer,
  StyledDescriptionContainer,
  StyledSectionsTitle,
} from "./styles";
import ChefImage from "../../../assets/Photos/ChefImage.png";

interface ChefOfTheWeekSectionProps {
  image?: string;
  ChefName?: string;
  text?: string;
}

const ChefOfTheWeekSection = ({
  text,
  ChefName,
}: ChefOfTheWeekSectionProps) => {
  return (
    <>
      <StyledCOTWSectionContainer>
        <StyledSectionsTitle>CHEF OF THE WEEK:</StyledSectionsTitle>

        <StyledCOTWContainer>
          <StyledImageTitleContainer>
            <StyledChefImg src={ChefImage} alt={ChefName} />
            <StyledChefNameTitle>{ChefName}</StyledChefNameTitle>
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
