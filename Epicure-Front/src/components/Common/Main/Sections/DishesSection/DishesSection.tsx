import SectionsTitle from "../../SectionsTitle";
import SwiperEpicure from "../../SwiperEpicure";
import { StyledContainerSwipers } from "../../SwiperEpicure/styledSwiperEpicure";
import TitleArrow from "../../TitleArrow";

const DishesSection = () => {
  return (
    <StyledContainerSwipers>
      <SectionsTitle title="SIGNATURE DISH OF:" />
      <SwiperEpicure />
      <TitleArrow />
    </StyledContainerSwipers>
  );
};

export default DishesSection;
