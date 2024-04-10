import SectionsTitle from "../../Common/SectionsTitle";
import SwiperEpicure from "../../Common/SwiperEpicure/SwiperEpicure";
import { StyledContainerSwipers } from "../../Common/SwiperEpicure/styles";
import TitleArrow from "../../Common/TitleArrow";

const RestaurantsSection = () => {
  return (
    <StyledContainerSwipers>
      <SectionsTitle title="POPULAR RESTAURANTS IN EPICURE" />
      <SwiperEpicure />
      <TitleArrow />
    </StyledContainerSwipers>
  );
};

export default RestaurantsSection;
