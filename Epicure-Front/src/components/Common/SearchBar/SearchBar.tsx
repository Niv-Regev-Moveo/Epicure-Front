import {
  StyledSearchImg,
  StyledSearchBarImageContainer,
  StyledDescriptionForSearchBar,
  StyledSearchBarInputContainer,
  StyledSpanSearchIcon,
  StyledSearchBarContainer,
  StyledDescriptionAndSearchContainer,
  StyledSearchBarInput,
  StyledSearchBarButton,
  StylesSearchImage,
} from "./styles";

import Search from "../../../assets/Photos/Search.png";
import Hero from "../../../assets/Photos/Hero.png";

const SearchBar = () => {
  const description = "Epicure works with the top chef restaurants in Tel Aviv";
  const searchPlaceHolder = "Search for restaurants cuisine , chef";

  return (
    <StyledSearchBarImageContainer>
      <StyledSearchImg src={Hero} alt="" />
      <StyledDescriptionAndSearchContainer>
        <StyledSearchBarContainer>
          <StyledDescriptionForSearchBar>
            {description}
          </StyledDescriptionForSearchBar>
          <StyledSearchBarInputContainer>
            <StyledSearchBarButton>
              <StylesSearchImage src={Search} alt="search" />
            </StyledSearchBarButton>
            <StyledSearchBarInput type="text" placeholder={searchPlaceHolder} />
          </StyledSearchBarInputContainer>
          <StyledSpanSearchIcon />
        </StyledSearchBarContainer>
      </StyledDescriptionAndSearchContainer>
    </StyledSearchBarImageContainer>
  );
};

export default SearchBar;
