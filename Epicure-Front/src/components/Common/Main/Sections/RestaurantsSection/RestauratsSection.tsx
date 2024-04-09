import SectionsTitle from "../../SectionsTitle";
import SwiperEpicure from "../../SwiperEpicure/SwiperEpicure";
import { StyledContainerSwipers } from "../../SwiperEpicure/styledSwiperEpicure";
import TitleArrow from "../../TitleArrow";

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
