import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store/store";
import { fetchChefOfTheWeek } from "../../../redux/chunk/collections/chefOfTheWeek/chefOfTheWeek.thunks";
import TitleArrow from "../../Common/TitleArrow";
import SwiperEpicure from "../../Common/SwiperEpicure";
import SectionsTitle from "../../Common/SectionsTitle";
import { StyledChefSectionContainer } from "./styles";

const ChefSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { chefOfTheWeek, loading, error } = useSelector(
    (state: RootState) => state.chefOfTheWeekState
  );

  useEffect(() => {
    dispatch(fetchChefOfTheWeek());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!chefOfTheWeek) {
    return <div>No Chef of the Week found</div>;
  }

  const restaurantCardsData = chefOfTheWeek.restaurants.map(
    (restaurant: { image: string; name: string }) => ({
      image: restaurant.image,
      title: restaurant.name,
      BottomComponent: () => null,
      bottomComponentProps: {},
    })
  );

  return (
    <StyledChefSectionContainer>
      <SectionsTitle title={`${chefOfTheWeek.name}'s RESTAURANTS`} />
      <SwiperEpicure cardsData={restaurantCardsData} />
      <TitleArrow />
    </StyledChefSectionContainer>
  );
};

export default ChefSection;
