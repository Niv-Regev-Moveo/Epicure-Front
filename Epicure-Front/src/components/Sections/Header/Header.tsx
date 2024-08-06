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
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledLeftContainer>
        <NavBar />
      </StyledLeftContainer>
      <StyledCenterContainer>
        <StyledHeaderLogo>
          <Link to={"/"}>
            <LogoSVG />
          </Link>
        </StyledHeaderLogo>
      </StyledCenterContainer>
      <StyledRightContainer>
        <HeaderIcons />
      </StyledRightContainer>
    </StyledHeaderContainer>
  );
};

export default Header;
