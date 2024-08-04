import { useState } from "react";
import {
  StyledNavBarLinkContainer,
  OpenHamburgerLinksButton,
  NavBarExtendContainer,
  NavBarLinkExtended,
  StyledTopNavBarBorder,
  StyledBottomNavBarBorder,
  StyledClosedHamburgerLinkButton,
  StyledBigScreenNavBar,
  NavBarLink,
  StyledEpicureLogoTitle,
  StyledLeftLogoNavBarContainer,
} from "./styles";
import HamburgerSVG from "../../../../assets/Icons/HamburgerSVG";
import LogoNavBarSVG from "../../../../assets/Icons/LogoNavBarSVG";
import RestaurantsPage from "../../../../Pages/RestaurantsPage";

const NavBar = () => {
  const [extendNavBar, setExtendNavBar] = useState(false);

  return (
    <>
      <OpenHamburgerLinksButton
        onClick={() => {
          setExtendNavBar((currentValue) => !currentValue);
        }}
      />
      {extendNavBar ? (
        <>
          <StyledNavBarLinkContainer extendNavBar={extendNavBar}>
            {extendNavBar && (
              <>
                <StyledClosedHamburgerLinkButton
                  onClick={() => {
                    setExtendNavBar((currentValue) => !currentValue);
                  }}
                >
                  &#10005;
                </StyledClosedHamburgerLinkButton>
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
          <StyledBigScreenNavBar>
            <HamburgerSVG />
          </StyledBigScreenNavBar>

          <StyledLeftLogoNavBarContainer>
            <LogoNavBarSVG />
          </StyledLeftLogoNavBarContainer>

          <StyledEpicureLogoTitle />
          <NavBarLink to={"/Restaurants"}>Restaurants</NavBarLink>
          <NavBarLink to={"/Chefs"}>Chefs</NavBarLink>
        </>
      )}
    </>
  );
};

export default NavBar;
