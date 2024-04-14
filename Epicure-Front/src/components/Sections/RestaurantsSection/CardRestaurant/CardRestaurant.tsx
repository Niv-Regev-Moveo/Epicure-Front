import {
  StyledChefName,
  StyledCardRestaurantContainer,
  StyledStarsImage,
} from "./styledCardRestaurant";

interface CardRestaurantProps {
  chefName: string;
  starsImage: string;
}

const CardRestaurant = ({ chefName, starsImage }: CardRestaurantProps) => {
  return (
    <StyledCardRestaurantContainer>
      <StyledChefName>{chefName}</StyledChefName>
      <StyledStarsImage src={starsImage} />
    </StyledCardRestaurantContainer>
  );
};

export default CardRestaurant;
