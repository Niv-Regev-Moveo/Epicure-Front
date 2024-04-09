// import CardRestaurant from "./CardRestaurant";
import RestaurantsSection from "./Sections/RestaurantsSection";
import SearchBar from "./SearchBar";
import { StyledMainPageContainer } from "./styledMain";
import ChefSection from "./Sections/ChefsSection";
import DishesSection from "./Sections/DishesSection";
import ChefOfTheWeekSection from "./Sections/ChefOfTheWeekSection";
import AboutSection from "./Sections/AboutSection";
import IconsMeaningSections from "./Sections/IconsMeaningSections";

const Main = () => {
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

export default Main;
