import styled from "styled-components";
import {
  backgroundColors,
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../Shared/constants";

export const StyledAboutUsSectionContainer = styled.div`
  background-color: ${backgroundColors.secondary};
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.small}) {
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${screenSizes.medium}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;
    position: relative;
    min-height: 350px;
    padding-left: 8%;
    padding-right: 8%;
  }

  @media (min-width: ${screenSizes.large}) {
    padding-right: 8%;
    height: 500px;
    min-height: 500px;
  }
  @media (min-width: ${screenSizes.big}) {
    padding-right: 10%;
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 125px;
  margin-top: 30px;

  @media (min-width: ${screenSizes.medium}) {
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 380px;
    height: 55px;
    margin-top: 0px;
    top: 85%;
    left: 8%;
  }
  @media (min-width: ${screenSizes.large}) {
    top: 85%;
    left: 10%;
  }
`;

export const StyledTitleAndDescriptionContainer = styled.div`
  @media (min-width: ${screenSizes.medium}) {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 10%;
    bottom: 20%;
    margin-top: 0px;

    @media (min-width: ${screenSizes.large}) {
      right: 40%;
    }
  }
`;

export const StyledDescription = styled.p`
  font-weight: 200;
  letter-spacing: ${letterSpacing.medium};
  width: 100%; //
  max-width: 570px;

  @media (min-width: ${screenSizes.medium}) {
    text-align: start;
    width: 380px;
  }

  @media (min-width: ${screenSizes.large}) {
    text-align: start;
    width: 500px;
  }
  @media (min-width: ${screenSizes.big}) {
    font-size: ${fontSizes.large};
    letter-spacing: ${letterSpacing.large};
    line-height: 1.5;
  }
`;

export const StyledButtonsAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.medium}) {
    margin-left: 20px;
  }
`;

export const StyledLogoTitle = styled.div`
  order: 2;

  @media (min-width: ${screenSizes.medium}) {
    order: 1;
    margin-left: auto;
  }

  @media (min-width: ${screenSizes.big}) {
  }
`;

export const StyledSectionsTitle = styled.h3`
  font-size: ${fontSizes.medium18};
  font-weight: 200;
  margin-bottom: 0px;
  margin-top: 30px;
  letter-spacing: ${letterSpacing.small};

  @media (min-width: ${screenSizes.small}) {
    font-size: ${fontSizes.large};
  }

  @media (min-width: ${screenSizes.medium}) {
    font-size: ${fontSizes.big};
    text-align: start;
  }
`;

export const StyledLogoContainer = styled.div`
  margin-right: 230px;

  @media (min-width: ${screenSizes.medium}) {
    position: relative;
    margin-right: none;
    top: -20px;
    left: 85%;
  }

  @media (min-width: ${screenSizes.large}) {
    top: 0px;
    right: 10%;
  }

  @media (min-width: ${screenSizes.big}) {
    top: 0px;
    right: 20%;
  }
`;
