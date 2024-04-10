import "swiper/css";
import { SwiperSlide } from "swiper/react";
import CardRestaurant from "../../Sections/RestaurantsSection/CardRestaurant";
import claro from "../../../assets/Photos/claro.png";
import { StyledSwiper } from "./styles";
import { useEffect, useState } from "react";
import { breakPointsSwiper } from "../../../Shared/constants";
import CardsDisplay from "../CardsDisplay";

const SwiperEpicure = () => {
  const [slidersPerView, setSlidersPerView] = useState<number>(1);
  const [showSwiper, setShowSwiper] = useState<boolean>(true); // State to toggle between Swiper and CardsDisplayContainer

  useEffect(() => {
    const updateSlidersPerView = () => {
      const mobileWidth = parseInt(breakPointsSwiper.breakPointMobile);
      const smallWidth = parseInt(breakPointsSwiper.breakPointSmall);
      const mediumWidth = parseInt(breakPointsSwiper.breakPointMedium);
      const regularWidth = parseInt(breakPointsSwiper.breakPointRegular);
      const bigWidth = parseInt(breakPointsSwiper.breakPointBig);
      const largeWidth = parseInt(breakPointsSwiper.BreakPointLarge);

      if (window.innerWidth >= largeWidth) {
        setSlidersPerView(3);
      } else if (window.innerWidth >= bigWidth) {
        setSlidersPerView(2.7);
      } else if (window.innerWidth >= regularWidth) {
        setSlidersPerView(2.5);
      } else if (window.innerWidth >= mediumWidth) {
        setSlidersPerView(2);
      } else if (window.innerWidth >= smallWidth) {
        setSlidersPerView(1.8);
      } else if (window.innerWidth >= mobileWidth) {
        setSlidersPerView(1.5);
      }
      setShowSwiper(window.innerWidth < 900);
    };

    window.addEventListener("resize", updateSlidersPerView);

    updateSlidersPerView();

    return () => {
      window.removeEventListener("resize", updateSlidersPerView);
    };
  }, []);

  return showSwiper ? (
    <StyledSwiper
      spaceBetween={50}
      slidesPerView={slidersPerView}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <CardRestaurant
          restaurantName="ali"
          chefName="baba"
          restaurantImg={claro}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CardRestaurant
          restaurantName="ali"
          chefName="baba"
          restaurantImg={claro}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CardRestaurant
          restaurantName="ali"
          chefName="baba"
          restaurantImg={claro}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CardRestaurant
          restaurantName="ali"
          chefName="baba"
          restaurantImg={claro}
        />
      </SwiperSlide>
    </StyledSwiper>
  ) : (
    <CardsDisplay />
  );
};

export default SwiperEpicure;
