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
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [extendNavBar, setExtendNavBar] = useState(false);
  const location = useLocation();

  const isActiveLink = (path: string) => location.pathname === path;

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
                    <NavBarLinkExtended
                      to={"/Restaurants"}
                      isActive={isActiveLink("/Restaurants")}
                    >
                      Restaurants
                    </NavBarLinkExtended>
                    <NavBarLinkExtended
                      to={"/Chefs"}
                      isActive={isActiveLink("/Chefs")}
                    >
                      Chefs
                    </NavBarLinkExtended>
                  </StyledTopNavBarBorder>
                  <StyledBottomNavBarBorder>
                    <NavBarLinkExtended
                      to={"/Contact-use"}
                      isActive={isActiveLink("/Contact-use")}
                    >
                      Contact use
                    </NavBarLinkExtended>
                    <NavBarLinkExtended
                      to={"/Term-Of-Use"}
                      isActive={isActiveLink("/Term-Of-Use")}
                    >
                      Term Of Use
                    </NavBarLinkExtended>
                    <NavBarLinkExtended
                      to={"/Privacy-Policy"}
                      isActive={isActiveLink("/Privacy-Policy")}
                    >
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
            <Link to={"/"}>
              <LogoNavBarSVG />
            </Link>
          </StyledLeftLogoNavBarContainer>

          <StyledEpicureLogoTitle />
          <NavBarLink
            to={"/Restaurants"}
            isActive={isActiveLink("/Restaurants")}
          >
            Restaurants
          </NavBarLink>
          <NavBarLink to={"/Chefs"} isActive={isActiveLink("/Chefs")}>
            Chefs
          </NavBarLink>
        </>
      )}
    </>
  );
};

export default NavBar;
