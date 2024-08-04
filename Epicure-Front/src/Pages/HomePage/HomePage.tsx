import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/Common/SearchBar";
import AboutSection from "../../components/Sections/AboutSection";
import ChefOfTheWeekSection from "../../components/Sections/ChefOfTheWeekSection";
import ChefSection from "../../components/Sections/ChefsSection";
import DishesSection from "../../components/Sections/DishesSection";
import IconsMeaningSections from "../../components/Sections/IconsMeaningSections";
import RestaurantsSection from "../../components/Sections/RestaurantsSection";
import { StyledMainPageContainer } from "./styles";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useEffect } from "react";
import { fetchChefs } from "../../redux/chunk/collections/chefs/chefs.thunks";
import { fetchRestaurants } from "../../redux/chunk/collections/restaurants/restaurants.thunks";
import {
  fetchDishes,
  fetchSignatureDishes,
} from "../../redux/chunk/collections/dishes/dishes.thunks";
import { fetchChefOfTheWeek } from "../../redux/chunk/collections/chefOfTheWeek/chefOfTheWeek.thunks";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const chefOfTheWeekState = useSelector(
    (state: RootState) => state.chefOfTheWeekState
  );

  useEffect(() => {
    dispatch(fetchChefs());
    dispatch(fetchRestaurants());
    dispatch(fetchDishes());
    dispatch(fetchSignatureDishes());
    dispatch(fetchChefOfTheWeek());
  }, [dispatch]);

  return (
    <StyledMainPageContainer>
      <SearchBar />
      <RestaurantsSection />
      <DishesSection />
      <IconsMeaningSections />
      <ChefOfTheWeekSection
        image={chefOfTheWeekState.chefOfTheWeek?.image}
        name={chefOfTheWeekState.chefOfTheWeek?.name}
        description={chefOfTheWeekState.chefOfTheWeek?.description}
      />
      <ChefSection />
      <AboutSection />
    </StyledMainPageContainer>
  );
};

export default HomePage;
