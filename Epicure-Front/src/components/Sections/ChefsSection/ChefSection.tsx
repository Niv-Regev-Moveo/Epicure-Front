import TitleArrow from "../../Common/TitleArrow";
import SwiperEpicure from "../../Common/SwiperEpicure";
import SectionsTitle from "../../Common/SectionsTitle";
import Card from "../../Common/Card";
import claro from "../../../assets/Photos/claro.png";
import { StyledChefSectionContainer } from "./styles";

const ChefSection = () => {
  return (
    <StyledChefSectionContainer>
      <SectionsTitle title="YOSSI'S RESTAURANTS " />
      <SwiperEpicure
        card={<Card image={claro} title={"Restaurant name from data"} />}
      />
      <TitleArrow />
    </StyledChefSectionContainer>
  );
};

export default ChefSection;
