import Card from "../../Common/Card";
import SectionsTitle from "../../Common/SectionsTitle";
import SwiperEpicure from "../../Common/SwiperEpicure/SwiperEpicure";
import { StyledContainerSwipers } from "./styles";
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
            title={"Claro"}
            bottomComponent={
              <CardRestaurant starsImage={""} chefName={"Ran Shmueli"} />
            }
          />
        }
      />
      <TitleArrow />
    </StyledContainerSwipers>
  );
};

export default RestaurantsSection;
