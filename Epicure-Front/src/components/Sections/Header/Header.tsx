import {
  StyledCenterContainer,
  StyledHeaderContainer,
  StyledHeaderLogo,
  StyledLeftContainer,
  StyledRightContainer,
} from "./styles";

import NavBar from "./NavBar";
import HeaderIcons from "./HeaderIcons";
import LogoSVG from "../../../assets/Icons/LogoSVG";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledLeftContainer>
        <NavBar />
      </StyledLeftContainer>
      <StyledCenterContainer>
        <StyledHeaderLogo>
          <LogoSVG />
        </StyledHeaderLogo>
      </StyledCenterContainer>
      <StyledRightContainer>
        <HeaderIcons />
      </StyledRightContainer>
    </StyledHeaderContainer>
  );
};

export default Header;
