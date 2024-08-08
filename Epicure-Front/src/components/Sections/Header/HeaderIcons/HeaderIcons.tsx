import { useState } from "react";
import BagSVG from "../../../../assets/Icons/BagSVG";
import SearchSVG from "../../../../assets/Icons/SearchSVG";
import UserSVG from "../../../../assets/Icons/UserSVG";
import { StyledHeaderIconsContainer, StyledHeaderIconsIcon } from "./styles";
import MobileIconPopUp from "../../../../components/Common/MobileIconPopUp";

const HeaderIcons = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopupVisibility = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <StyledHeaderIconsContainer>
      <a href="">
        <StyledHeaderIconsIcon>
          <SearchSVG />
        </StyledHeaderIconsIcon>
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          togglePopupVisibility();
        }}
      >
        <StyledHeaderIconsIcon>
          <UserSVG />
        </StyledHeaderIconsIcon>
      </a>
      <a href="">
        <StyledHeaderIconsIcon>
          <BagSVG />
        </StyledHeaderIconsIcon>
      </a>
      {isPopupVisible && <MobileIconPopUp onClose={togglePopupVisibility} />}
    </StyledHeaderIconsContainer>
  );
};

export default HeaderIcons;
