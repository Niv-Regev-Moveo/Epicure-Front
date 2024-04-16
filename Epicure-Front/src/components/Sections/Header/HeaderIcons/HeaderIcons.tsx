import BagSVG from "../../../../assets/Icons/BagSVG";
import SearchSVG from "../../../../assets/Icons/SearchSVG";
import UserSVG from "../../../../assets/Icons/UserSVG";
import { StyledHeaderIconsContainer, StyledHeaderIconsIcon } from "./styles";

const HeaderIcons = () => {
  return (
    <StyledHeaderIconsContainer>
      <a href="">
        <StyledHeaderIconsIcon>
          <SearchSVG />
        </StyledHeaderIconsIcon>
      </a>
      <a href="">
        <StyledHeaderIconsIcon>
          <UserSVG />
        </StyledHeaderIconsIcon>
      </a>
      <a href="">
        <StyledHeaderIconsIcon>
          <BagSVG />
        </StyledHeaderIconsIcon>
      </a>
    </StyledHeaderIconsContainer>
  );
};

export default HeaderIcons;
