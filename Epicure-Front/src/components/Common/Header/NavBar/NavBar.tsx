import { useState } from "react";
import {
  StyledNavBarLinkContainer,
  OpenHamburgerLinksButton,
  NavBarExtendContainer,
  NavBarLinkExtended,
  StyledTopNavBarBorder,
  StyledBottomNavBarBorder,
  ClosedHamburgerLinkButton,
  NavBarLink,
} from "./styledNavBar";

const NavBar = () => {
  const [extendNavBar, setExtendNavBar] = useState(false);

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
          // i fscreen is more than 600px put LogoSVG
          <NavBarLink to={"/Restaurants"}>Restaurants</NavBarLink>
          <NavBarLink to={"/Chefs"}>Chefs</NavBarLink>
        </>
      )}
    </>
  );
};

export default NavBar;
