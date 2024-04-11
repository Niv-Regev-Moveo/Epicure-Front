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
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 125px;
  margin-top: 30px;

  @media (min-width: ${screenSizes.small}) {
    align-items: center;
  }
`;

export const StyledDescription = styled.p`
  font-weight: 200;
  font-size: ${fontSizes.medium18};

  @media (min-width: ${screenSizes.small}) {
    text-align: center;
    font-size: ${fontSizes.large};
  }

  @media (min-width: ${screenSizes.medium}) {
    text-align: start;
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
`;

export const StyledButtonsAndDescriptionWrapper = styled.div`
  order: 1;

  @media (min-width: ${screenSizes.medium}) {
    order: 2;
    margin-right: auto;
  }
`;

export const StyledSectionsTitle = styled.h3`
  font-size: ${fontSizes.medium18};
  font-weight: 200;
  margin-bottom: 20px;
  margin-top: 30px;
  letter-spacing: ${letterSpacing.small};

  @media (min-width: ${screenSizes.small}) {
    text-align: center;
    font-size: ${fontSizes.large};
  }

  @media (min-width: ${screenSizes.medium}) {
    font-size: ${fontSizes.big};
    text-align: start;
  }
`;
