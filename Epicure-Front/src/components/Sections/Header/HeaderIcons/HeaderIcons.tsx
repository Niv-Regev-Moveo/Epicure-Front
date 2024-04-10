import { StyledHeaderIconsContainer, StyledHeaderIconsIcon } from "./styles";

import UserSVG from "../../../../assets/Icons/UserSVG";
import SearchSVG from "../../../../assets/Icons/SearchSVG";
import BagSVG from "../../../../assets/Icons/BagSVG";

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
