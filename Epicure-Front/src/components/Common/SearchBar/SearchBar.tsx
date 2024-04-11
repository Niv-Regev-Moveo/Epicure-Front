import {
  StyledSearchImg,
  StyledSearchBarImageContainer,
  StyledDescriptionForSearchBar,
  StyledInputSearchBar,
  StyledSpanSearchIcon,
  StyledSearchBarContainer,
  StyledDescriptionAndSearchContainer,
} from "./styles";
import Hero from "../../../assets/Photos/Hero.png";

const SearchBar = () => {
  const description = "Epicure works with the top chef restaurants in Tel Aviv";
  const searchIcon = "\u{1F50D}";

  return (
    <StyledSearchBarImageContainer>
      <StyledSearchImg src={Hero} alt="" />
      <StyledDescriptionAndSearchContainer>
        <StyledSearchBarContainer>
          <StyledDescriptionForSearchBar>
            {description}
          </StyledDescriptionForSearchBar>
          <StyledInputSearchBar
            type="text"
            placeholder={`${searchIcon}   Search for restaurants cuisine, chef`}
          />
          <StyledSpanSearchIcon></StyledSpanSearchIcon>
        </StyledSearchBarContainer>
      </StyledDescriptionAndSearchContainer>
    </StyledSearchBarImageContainer>
  );
};

export default SearchBar;
