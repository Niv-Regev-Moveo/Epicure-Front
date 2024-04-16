import styled from "styled-components";
import {
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../../Shared/constants";

export const StyledCardRestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 245px;

  @media (min-width: ${screenSizes.medium}) {
    align-items: center;
  }
`;

export const StyledRestaurantName = styled.h3`
  font-size: ${fontSizes.medium18};
  font-weight: 400;
  margin: 0;
  padding-bottom: 5px;
`;

export const StyledChefName = styled.h5`
  font-size: ${fontSizes.medium16};
  font-weight: 200;
  margin: 0;
  padding-left: 15px;
  text-align: start;
  letter-spacing: ${letterSpacing.medium};
  padding-top: 5px;

  @media (min-width: ${screenSizes.medium}) {
    text-align: center;
    margin-bottom: 10px;
  }

  @media (min-width: ${screenSizes.big}) {
    font-size: ${fontSizes.xlLarge};
  }
`;

export const StyledStarsImage = styled.img`
  display: none;

  @media (min-width: ${screenSizes.medium}) {
    display: block;
    width: 200px;
    height: 40px;
    padding-bottom: 10px;
  }

  @media (min-width: ${screenSizes.large}) {
    width: 216px;
  }
`;
