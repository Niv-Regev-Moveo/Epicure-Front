import {
  StyledCardRestaurantImg,
  StyledCardRestaurantImgContainer,
  StyledChefName,
  StyledCardRestaurantNameChef,
  StyledCardRestaurantContainer,
} from "./styles";

interface CardChefProps {
  chefName?: string;
  restaurantImg?: string;
}

const CardChefOfTheWeek = ({ chefName, restaurantImg }: CardChefProps) => {
  return (
    <StyledCardRestaurantContainer>
      <StyledCardRestaurantImgContainer>
        <StyledCardRestaurantImg src={restaurantImg} alt="" />
      </StyledCardRestaurantImgContainer>
      <StyledCardRestaurantNameChef>
        <StyledChefName>{chefName}</StyledChefName>
      </StyledCardRestaurantNameChef>
    </StyledCardRestaurantContainer>
  );
};

export default CardChefOfTheWeek;
