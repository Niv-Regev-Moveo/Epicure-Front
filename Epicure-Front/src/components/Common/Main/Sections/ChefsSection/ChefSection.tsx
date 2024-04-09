import TitleArrow from "../../TitleArrow";
import SwiperEpicure from "../../SwiperEpicure";
import SectionsTitle from "../../SectionsTitle";
import { StyledContainerSwipers } from "../../SwiperEpicure/styledSwiperEpicure";

const ChefSection = () => {
  return (
    <StyledContainerSwipers>
      <SectionsTitle title="YOSSI'S RESTAURANTS " />
      <SwiperEpicure />
      <TitleArrow />
    </StyledContainerSwipers>
  );
};

export default ChefSection;
