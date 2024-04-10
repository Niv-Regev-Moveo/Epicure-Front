import {
  StyledCardRestaurantImg,
  StyledCardRestaurantImgContainer,
  StyledRestaurantName,
  StyledChefName,
  StyledCardRestaurantNameChef,
  StyledCardRestaurantContainer,
} from "./styledCardRestaurant";

interface CardRestaurantProps {
  restaurantName?: string;
  chefName?: string;
  chefImg?: string;
  restaurantImg?: string;
  dishImg?: string;
  dishName?: string;
  dishTypeIcon?: JSX.Element;
  dishPrice?: number;
}

const CardRestaurant = ({
  restaurantName,
  chefName,
  restaurantImg,
}: CardRestaurantProps) => {
  return (
    <StyledCardRestaurantContainer>
      <StyledCardRestaurantImgContainer>
        <StyledCardRestaurantImg src={restaurantImg} alt="" />
      </StyledCardRestaurantImgContainer>
      <StyledCardRestaurantNameChef>
        <StyledRestaurantName>{restaurantName}</StyledRestaurantName>
        <StyledChefName>{chefName}</StyledChefName>
      </StyledCardRestaurantNameChef>
    </StyledCardRestaurantContainer>
  );
};

export default CardRestaurant;
