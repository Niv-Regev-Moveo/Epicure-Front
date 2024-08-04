import styled from "styled-components";
import {
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../../Shared/constants";
import SpicySVG from "../../../../assets/Icons/SpicySVG";

export const StyledCardDishContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-bottom: 15px;
  align-content: space-between;

  @media (min-width: ${screenSizes.medium}) {
    padding-left: 5px;
    padding-bottom: 0px;
  }
  @media (min-width: ${screenSizes.large}) {
    padding-left: 0px;
  }

  @media (min-width: ${screenSizes.big}) {
    padding-bottom: 10px;
  }
`;

export const StyledDIshIngredients = styled.h5`
  font-size: ${fontSizes.medium16};
  font-weight: 200;
  margin: 0;
  letter-spacing: ${letterSpacing.medium};
  width: 209px;
  height: 70px;

  @media (min-width: ${screenSizes.medium}) {
    text-align: center;
  }

  @media (min-width: ${screenSizes.large}) {
    text-align: center;
    order: 2;
  }
`;

export const StyledDishPrice = styled.div`
  position: relative;
  font-size: ${fontSizes.medium};
  font-weight: 400;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  flex-direction: row;

  &::before,
  &::after {
    display: none;
  }

  @media (min-width: ${screenSizes.medium}) {
    font-size: ${fontSizes.xlLarge};
    font-weight: 200;
    justify-content: center;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      height: 1px;
      background-color: silver;
      width: calc(60% + 10px - 85px);
    }

    &::before {
      left: 10px;
      display: block;
    }

    &::after {
      right: 25px;
      display: block;
    }
  }

  @media (min-width: ${screenSizes.large}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  @media (min-width: ${screenSizes.big}) {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      height: 1px;
      background-color: silver;
      width: calc(40% - 15px - 15px);
    }
  }
`;

export const StyledDescriptionAndIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media (min-width: ${screenSizes.medium}) {
    align-items: center;
  }
`;

export const StyledSpicySVG = styled(SpicySVG)``;

export const StyledSVGContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;

  @media (min-width: ${screenSizes.large}) {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;
