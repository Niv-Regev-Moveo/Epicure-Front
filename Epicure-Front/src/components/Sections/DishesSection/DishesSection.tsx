import SectionsTitle from "../../Common/SectionsTitle";
import SwiperEpicure from "../../Common/SwiperEpicure";
import { StyledContainerSwipers } from "../../Common/SwiperEpicure/styles";
import TitleArrow from "../../Common/TitleArrow";

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
