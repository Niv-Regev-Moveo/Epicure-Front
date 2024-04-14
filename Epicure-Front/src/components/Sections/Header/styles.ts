import styled from "styled-components";
import {
  backgroundColors,
  fontSizes,
  screenSizes,
} from "../../../Shared/constants";

export const StyledHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${backgroundColors.primary};
  position: sticky;
  height: 46px;

  @media (min-width: ${screenSizes.medium}) {
    height: 64px;
  }
`;

export const StyledHeaderLogo = styled.span`
  margin: 0px;
  font-size: ${fontSizes.small};

  @media (min-width: ${screenSizes.medium}) {
    display: none;
  }
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

  @media (min-width: ${screenSizes.medium}) {
    padding-left: 5%;
  }
  @media (min-width: ${screenSizes.medium}) {
    padding-left: 7%;
  }
`;

export const StyledRightContainer = styled.div`
  flex: 40%;
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${screenSizes.medium}) {
    padding-right: 5%;
  }
`;

export const StyledCenterContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
`;
