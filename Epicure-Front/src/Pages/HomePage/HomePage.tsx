import SearchBar from "../../components/Common/SearchBar";
import AboutSection from "../../components/Sections/AboutSection";
import ChefOfTheWeekSection from "../../components/Sections/ChefOfTheWeekSection";
import ChefSection from "../../components/Sections/ChefsSection";
import DishesSection from "../../components/Sections/DishesSection";
import IconsMeaningSections from "../../components/Sections/IconsMeaningSections";
import RestaurantsSection from "../../components/Sections/RestaurantsSection";
import { StyledMainPageContainer } from "./styles";

const HomePage = () => {
  return (
    <StyledMainPageContainer>
      <SearchBar />
      <RestaurantsSection />
      <DishesSection />
      <IconsMeaningSections />
      <ChefOfTheWeekSection
        image={"Chef Image"}
        title={"Chef Name"}
        text={
          "Chef descriLorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nihil consequuntur? At impedit error similique nam reprehenderit nemo culpa, deleniti voluptate, qui ex hic consectetur ea unde. Ad, cupiditate tempore?ption"
        }
      />
      <ChefSection />
      <AboutSection />
    </StyledMainPageContainer>
  );
};

export default HomePage;
