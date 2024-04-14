import Card from "../../Common/Card";
import SectionsTitle from "../../Common/SectionsTitle";
import SwiperEpicure from "../../Common/SwiperEpicure/SwiperEpicure";
import { StyledContainerSwipers } from "../../Common/SwiperEpicure/styles";
import TitleArrow from "../../Common/TitleArrow";
import CardRestaurant from "./CardRestaurant";
import claro from "../../../assets/Photos/claro.png";

const RestaurantsSection = () => {
  return (
    <StyledContainerSwipers>
      <SectionsTitle title="POPULAR RESTAURANTS IN EPICURE:" />
      <SwiperEpicure
        card={
          <Card
            image={claro}
            title={"Restaurant name from data"}
            bottomComponent={
              <CardRestaurant starsImage={""} chefName={"chef name"} />
            }
          />
        }
      />
      <TitleArrow />
    </StyledContainerSwipers>
  );
};

export default RestaurantsSection;
