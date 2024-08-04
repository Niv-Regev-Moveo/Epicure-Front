import { ChefOfTheWeekSectionProps } from "../../../redux/chunk/collections/chefOfTheWeek/chefOfTheWeek.types";
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

const ChefOfTheWeekSection = ({
  image,
  name,
  description,
}: ChefOfTheWeekSectionProps) => {
  return (
    <>
      <StyledCOTWSectionContainer>
        <StyledSectionsTitle>CHEF OF THE WEEK:</StyledSectionsTitle>

        <StyledCOTWContainer>
          <StyledImageTitleContainer>
            <StyledChefImg src={image} alt={name} />
            <StyledChefNameTitle>{name}</StyledChefNameTitle>
          </StyledImageTitleContainer>
          <StyledDescriptionContainer>
            <ChefDescription>{description}</ChefDescription>
          </StyledDescriptionContainer>
        </StyledCOTWContainer>
      </StyledCOTWSectionContainer>
    </>
  );
};

export default ChefOfTheWeekSection;
