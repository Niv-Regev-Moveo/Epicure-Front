import styled from "styled-components";
import {
  backgroundColors,
  fontSizes,
  screenSizes,
} from "../../SharedStyles/constants";

export const StyledHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${backgroundColors.primary};
  position: sticky;
  height: 64px;

  @media screen and (max-width: ${screenSizes.medium}) {
    height: 46px;
  }

  @media screen and (min-width: ${screenSizes.large}) {
    background-color: green;
  }
`;

export const StyledHeaderLogo = styled.span`
  margin: 0px;
  font-size: ${fontSizes.small};
`;

export const StyledHeaderEpicureLogo = styled.img`
  margin: 10px;
  max-width: 80px;
  height: auto;
`;

export const StyledLeftContainer = styled.div`
  flex: 40%;
  display: flex;
  align-items: center;
  padding-left: 2%;
`;

export const StyledRightContainer = styled.div`
  flex: 40%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledCenterContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
`;
