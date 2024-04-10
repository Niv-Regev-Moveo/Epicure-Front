import TitleArrow from "../../Common/TitleArrow";
import SwiperEpicure from "../../Common/SwiperEpicure";
import SectionsTitle from "../../Common/SectionsTitle";
import { StyledContainerSwipers } from "../../Common/SwiperEpicure/styles";

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
