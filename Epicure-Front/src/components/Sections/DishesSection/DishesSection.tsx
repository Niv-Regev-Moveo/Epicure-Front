import { useState, useEffect } from "react";
import Card from "../../Common/Card";
import SectionsTitle from "../../Common/SectionsTitle";
import SwiperEpicure from "../../Common/SwiperEpicure";
import { StyledCardContainerSwiper } from "./styles";
import TitleArrow from "../../Common/TitleArrow";
import CardDishes from "./CardDishes";
import claro from "../../../assets/Photos/claro.png";

const DishesSection = () => {
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

  return (
    <StyledCardContainerSwiper>
      <SectionsTitle title="SIGNATURE DISH OF:" />
      <SwiperEpicure
        card={
          <Card
            image={claro}
            title={"Pad Ki Mao"}
            bottomComponent={<CardDishes />}
          />
        }
      />
      {showTitleArrow && <TitleArrow />}
    </StyledCardContainerSwiper>
  );
};

export default DishesSection;
