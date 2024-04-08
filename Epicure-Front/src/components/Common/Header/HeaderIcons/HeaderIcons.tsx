import {
  StyledHeaderIconsContainer,
  StyledHeaderIconsIcon,
} from "./styledHeaderIcons";

import UserSVG from "../../../Icons/UserSVG";
import SearchSVG from "../../../Icons/SearchSVG";
import BagSVG from "../../../Icons/BagSVG";

const HeaderIcons = () => {
  return (
    <StyledHeaderIconsContainer>
      <div>
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
      </div>
    </StyledHeaderIconsContainer>
  );
};

export default HeaderIcons;
