// src/components/Common/RestaurantsSection/RestaurantsSection.tsx
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store/store";
import { fetchRestaurants } from "../../../redux/chunk/collections/restaurants/restaurants.thunks";
import SectionsTitle from "../../Common/SectionsTitle";
import SwiperEpicure from "../../Common/SwiperEpicure/SwiperEpicure";
import { StyledContainerSwipers } from "./styles";
import TitleArrow from "../../Common/TitleArrow";
import CardRestaurant from "./CardRestaurant";
import { CardRestaurantProps } from "../../../redux/chunk/collections/restaurants/restaurants.types";

const RestaurantsSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { restaurants, loading, error } = useSelector(
    (state: RootState) => state.restaurantsState
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const restaurantCardsData = useMemo(() => {
    return restaurants.map((restaurant) => ({
      image: restaurant.image,
      title: restaurant.name,
      BottomComponent: CardRestaurant,
      bottomComponentProps: {
        chefName: restaurant.chef.name,
        rating: restaurant.rating,
      } as CardRestaurantProps,
    }));
  }, [restaurants]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledContainerSwipers>
      <SectionsTitle title="POPULAR RESTAURANTS IN EPICURE:" />
      <SwiperEpicure cardsData={restaurantCardsData} />
      <TitleArrow />
    </StyledContainerSwipers>
  );
};

export default RestaurantsSection;
