import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  fontSizes,
  backgroundColors,
  colors,
  screenSizes,
  letterSpacing,
} from "../../../../Shared/constants";

interface NavBarProps {
  extendNavBar: boolean;
}
export const StyledNavBarLinkContainer = styled.nav<NavBarProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.extendNavBar ? "100%" : "40%")};
  background-color: white;
  position: absolute;
  top: 5px;
`;

export const NavBarLink = styled(Link)`
  color: ${colors.primary};
  margin: 10px;
  text-decoration: none;
  font-weight: 200;

  @media (max-width: ${screenSizes.medium}) {
    display: none;
  }
`;

export const OpenHamburgerLinksButton = styled.button`
  height: 24px;
  color: ${colors.primary};
  background-color: ${backgroundColors.primary};
  color: ${colors.primary};
  font-size: ${fontSizes.large};
  border: none;
  cursor: pointer;
  margin-left: 15px;
  padding-bottom: 0px;
  font-size: ${fontSizes.large};
  display: block;

  @media (min-width: ${screenSizes.medium}) {
    display: none;
  }
`;

export const NavBarExtendContainer = styled.nav<NavBarProps>`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  padding-top: 10px;
  font-weight: 200;
  letter-spacing: ${letterSpacing.small};
  font-size: ${fontSizes.medium};
  z-index: ${(props) => (props.extendNavBar ? "999" : "1")};

  @media (min-width: ${screenSizes.medium}) {
    display: none;
  }
`;

export const NavBarLinkExtended = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 5px;

  cursor: pointer;
`;

export const StyledTopNavBarBorder = styled.div`
  margin-top: 15px;
  border-bottom: 1px solid ${colors.navBarBorder};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledBottomNavBarBorder = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
`;

export const ClosedHamburgerLinkButton = styled.button`
  width: 24px;
  height: 24px;
  color: ${colors.primary};
  background-color: ${backgroundColors.primary};
  color: ${colors.primary};
  font-size: ${fontSizes.large};
  border: none;
  cursor: pointer;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 0px;

  @media (min-width: ${screenSizes.medium}) {
    display: none;
  }
`;

export const StyledBigScreenNavBar = styled.div<NavBarProps>`
  @media (min-width: ${screenSizes.medium}) {
    display: none;
  }

  @media (min-width: ${screenSizes.large}) {
    background-color: red;
  }
`;

export const StyledContainerLogoNavBar = styled.div`
  @media (max-width: ${screenSizes.medium}) {
    display: none;
  }
`;

export const StyledEpicureLogoTitle = styled.div`
  font-size: ${fontSizes.large};
  font-weight: 300;
  letter-spacing: ${letterSpacing.small};
  margin-right: 15px;
  margin-left: 10px;
  @media (max-width: ${screenSizes.medium}) {
    display: none;
  }
`;
