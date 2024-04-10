import {
  StyledCardRestaurantImg,
  StyledCardRestaurantImgContainer,
  StyledChefName,
  StyledCardRestaurantNameChef,
  StyledCardRestaurantContainer,
} from "./styledCardChef";

interface CardChefProps {
  chefName?: string;
  restaurantImg?: string;
}

const CardChef = ({ chefName, restaurantImg }: CardChefProps) => {
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

export default CardChef;
