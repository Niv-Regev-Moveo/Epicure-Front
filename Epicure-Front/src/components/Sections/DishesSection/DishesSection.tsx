// src/components/Sections/DishesSection.tsx
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store/store";
import { fetchSignatureDishes } from "../../../redux/chunk/collections/dishes/dishes.thunks";
import SectionsTitle from "../../Common/SectionsTitle";
import SwiperEpicure from "../../Common/SwiperEpicure/SwiperEpicure";
import { StyledCardContainerSwiper } from "./styles";
import TitleArrow from "../../Common/TitleArrow";
import CardDishes from "./CardDishes";
import { EIconMeaning } from "../../enum/iconMeaning.enum";
import { CardDishProps } from "../../../redux/chunk/collections/dishes/dishes.types";

const DishesSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { signatureDishes, loading, error } = useSelector(
    (state: RootState) => state.dishesState
  );

  useEffect(() => {
    dispatch(fetchSignatureDishes());
  }, [dispatch]);

  const [showTitleArrow, setShowTitleArrow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1439) {
        setShowTitleArrow(false);
      } else {
        setShowTitleArrow(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dishCardsData = useMemo(() => {
    return signatureDishes.map((dish) => ({
      image: dish.image,
      title: dish.name,
      BottomComponent: CardDishes,
      bottomComponentProps: {
        ingredients: dish.ingredients,
        price: dish.price,
        icon: dish.type as EIconMeaning,
      },
    }));
  }, [signatureDishes]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledCardContainerSwiper>
      <SectionsTitle title="SIGNATURE DISH OF:" />
      <SwiperEpicure<CardDishProps> cardsData={dishCardsData} />
      {showTitleArrow && <TitleArrow />}
    </StyledCardContainerSwiper>
  );
};

export default DishesSection;
