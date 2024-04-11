import {
  StyledChefName,
  StyledCardRestaurantContainer,
} from "./styledCardRestaurant";

// interface CardRestaurantProps {
//   chefName?: string;
// }
// { chefName }: CardRestaurantProps
const CardRestaurant = () => {
  const chefName = "chef name from data";
  return (
    <StyledCardRestaurantContainer>
      <StyledChefName>{chefName}</StyledChefName>
    </StyledCardRestaurantContainer>
  );
};

export default CardRestaurant;
