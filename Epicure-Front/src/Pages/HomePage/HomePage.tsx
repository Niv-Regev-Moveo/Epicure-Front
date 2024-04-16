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
        ChefName={"Yossi Shitrit"}
        text={
          "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish."
        }
      />
      <ChefSection />
      <AboutSection />
    </StyledMainPageContainer>
  );
};

export default HomePage;
