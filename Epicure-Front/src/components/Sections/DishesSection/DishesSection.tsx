import Card from "../../Common/Card";
import SectionsTitle from "../../Common/SectionsTitle";
import SwiperEpicure from "../../Common/SwiperEpicure";
import { StyledContainerSwipers } from "../../Common/SwiperEpicure/styles";
import TitleArrow from "../../Common/TitleArrow";
import CardDishes from "./CardDishes";
import claro from "../../../assets/Photos/claro.png";

const DishesSection = () => {
  return (
    <StyledContainerSwipers>
      <SectionsTitle title="SIGNATURE DISH OF:" />
      <SwiperEpicure
        card={
          <Card
            image={claro}
            title={"dish name from data"}
            bottomComponent={<CardDishes />}
          />
        }
      />
      <TitleArrow />
    </StyledContainerSwipers>
  );
};

export default DishesSection;
