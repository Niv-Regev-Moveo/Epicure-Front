import { useState } from "react";
import {
  StyledNavBarLinkContainer,
  OpenHamburgerLinksButton,
  NavBarExtendContainer,
  NavBarLinkExtended,
  StyledTopNavBarBorder,
  StyledBottomNavBarBorder,
  ClosedHamburgerLinkButton,
  StyledBigScreenNavBar,
  NavBarLink,
  StyledEpicureLogoTitle,
} from "./styles";
import LogoSVG from "../../../../assets/Icons/LogoSVG";
import HamburgerSVG from "../../../../assets/Icons/HamburgerSVG";

const NavBar = () => {
  const [extendNavBar, setExtendNavBar] = useState(false);

  const title = "EPICURE";

  return (
    <>
      <OpenHamburgerLinksButton
        onClick={() => {
          setExtendNavBar((currentValue) => !currentValue);
        }}
      ></OpenHamburgerLinksButton>
      {extendNavBar ? (
        <>
          <StyledNavBarLinkContainer extendNavBar={extendNavBar}>
            {extendNavBar && (
              <>
                <ClosedHamburgerLinkButton
                  onClick={() => {
                    setExtendNavBar((currentValue) => !currentValue);
                  }}
                >
                  &#10005;
                </ClosedHamburgerLinkButton>
                <NavBarExtendContainer extendNavBar={extendNavBar}>
                  <StyledTopNavBarBorder>
                    <NavBarLinkExtended to={"/Restaurants"}>
                      Restaurants
                    </NavBarLinkExtended>
                    <NavBarLinkExtended to={"/Chefs"}>Chefs</NavBarLinkExtended>
                  </StyledTopNavBarBorder>
                  <StyledBottomNavBarBorder>
                    <NavBarLinkExtended to={"/Contact-use"}>
                      Contact use
                    </NavBarLinkExtended>
                    <NavBarLinkExtended to={"/Term-Of-Use"}>
                      Term Of Use
                    </NavBarLinkExtended>
                    <NavBarLinkExtended to={"/Privacy-Policy"}>
                      Privacy Policy
                    </NavBarLinkExtended>
                  </StyledBottomNavBarBorder>
                </NavBarExtendContainer>
              </>
            )}
          </StyledNavBarLinkContainer>
        </>
      ) : (
        <>
          <StyledBigScreenNavBar extendNavBar={extendNavBar}>
            <HamburgerSVG />
          </StyledBigScreenNavBar>
          <LogoSVG></LogoSVG>
          <StyledEpicureLogoTitle>{title}</StyledEpicureLogoTitle>
          <NavBarLink to={"/Restaurants"}>Restaurants</NavBarLink>
          <NavBarLink to={"/Chefs"}>Chefs</NavBarLink>
        </>
      )}
    </>
  );
};

export default NavBar;
