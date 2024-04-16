import {
  StyledChefName,
  StyledCardRestaurantContainer,
  StyledStarsImage,
} from "./styles";

import starsImage from "../../../../assets/Photos/starsImage.png";

interface CardRestaurantProps {
  chefName?: string;
  starsImage?: string;
}

const CardRestaurant = ({ chefName }: CardRestaurantProps) => {
  return (
    <StyledCardRestaurantContainer>
      <StyledChefName>{chefName}</StyledChefName>
      <StyledStarsImage src={starsImage} />
    </StyledCardRestaurantContainer>
  );
};

export default CardRestaurant;
