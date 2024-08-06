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
import { NavLink, useLocation } from "react-router-dom";

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
                      isCurrentPage={isActiveLink("/Restaurants")}
                    >
                      Restaurants
                    </NavBarLinkExtended>
                    <NavBarLinkExtended
                      to={"/Chefs"}
                      isCurrentPage={isActiveLink("/Chefs")}
                    >
                      Chefs
                    </NavBarLinkExtended>
                  </StyledTopNavBarBorder>
                  <StyledBottomNavBarBorder>
                    <NavBarLinkExtended
                      to={"/Contact-use"}
                      isCurrentPage={isActiveLink("/Contact-use")}
                    >
                      Contact use
                    </NavBarLinkExtended>
                    <NavBarLinkExtended
                      to={"/Term-Of-Use"}
                      isCurrentPage={isActiveLink("/Term-Of-Use")}
                    >
                      Term Of Use
                    </NavBarLinkExtended>
                    <NavBarLinkExtended
                      to={"/Privacy-Policy"}
                      isCurrentPage={isActiveLink("/Privacy-Policy")}
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
            <NavLink to={"/"}>
              <LogoNavBarSVG />
            </NavLink>
          </StyledLeftLogoNavBarContainer>

          <StyledEpicureLogoTitle />
          <NavBarLink
            to={"/Restaurants"}
            isCurrentPage={isActiveLink("/Restaurants")}
          >
            Restaurants
          </NavBarLink>
          <NavBarLink to={"/Chefs"} isCurrentPage={isActiveLink("/Chefs")}>
            Chefs
          </NavBarLink>
        </>
      )}
    </>
  );
};

export default NavBar;
