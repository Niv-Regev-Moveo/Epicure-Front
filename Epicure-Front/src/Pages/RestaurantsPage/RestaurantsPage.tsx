import { useEffect, useMemo } from "react";
import Card from "../../components/Common/Card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { fetchRestaurants } from "../../redux/chunk/collections/restaurants/restaurants.thunks";
import { CardRestaurantProps } from "../../redux/chunk/collections/restaurants/restaurants.types";
import CardRestaurant from "../../components/Sections/RestaurantsSection/CardRestaurant";
import { StyledCardWrapper, StyledPageContainer } from "./styles";
import PageTitle from "../../components/Common/PageTitle";
import CategoriesBar from "../../components/Common/CategoriesBar";

const RestaurantsPage = () => {
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

  const categories = ["All", "New", "Most Popular", "Open Now", "Must Viewed"];
  return (
    <StyledPageContainer>
      <PageTitle title={"RESTAURANTS"} />
      <CategoriesBar categories={categories} />
      {restaurantCardsData.map((cardData, index) => (
        <StyledCardWrapper key={index}>
          <Card
            image={cardData.image}
            title={cardData.title}
            BottomComponent={cardData.BottomComponent}
            bottomComponentProps={cardData.bottomComponentProps}
            restaurantPageStyle={true}
          />
        </StyledCardWrapper>
      ))}
    </StyledPageContainer>
  );
};

export default RestaurantsPage;
