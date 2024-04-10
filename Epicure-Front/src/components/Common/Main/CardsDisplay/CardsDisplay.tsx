import CardRestaurant from "../Sections/RestaurantsSection/CardRestaurant";
import { CardsDisplayContainer } from "./styledCardsDisplay";

const CardsDisplay = () => {
  return (
    <CardsDisplayContainer>
      <CardRestaurant
        restaurantImg="hello"
        restaurantName="claro"
        chefName="Dan Dan"
      ></CardRestaurant>
      <CardRestaurant
        restaurantImg="hello"
        restaurantName="claro"
        chefName="Dan Dan"
      ></CardRestaurant>
      <CardRestaurant
        restaurantImg="hello"
        restaurantName="claro"
        chefName="Dan Dan"
      ></CardRestaurant>
    </CardsDisplayContainer>
  );
};

export default CardsDisplay;
