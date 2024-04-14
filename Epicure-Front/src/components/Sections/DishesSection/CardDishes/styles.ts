import styled from "styled-components";
import { fontSizes, screenSizes } from "../../../../Shared/constants";
import SpicySVG from "../../../../assets/Icons/SpicySVG";

export const StyledCardDishContainer = styled.div`
  width: 245px;
  display: flex;
  flex-direction: column;
  padding-left: 15px;

  @media (min-width: ${screenSizes.medium}) {
    padding-left: 10px;
  }
  @media (min-width: ${screenSizes.large}) {
    padding-left: 0px;
  }
`;

export const StyledDIshIngredients = styled.h5`
  font-size: ${fontSizes.medium16};
  font-weight: 200;
  margin: 0;

  @media (min-width: ${screenSizes.large}) {
    text-align: center;
    order: 2;
  }
`;

export const StyledDishPrice = styled.p`
  position: relative;
  font-size: ${fontSizes.medium};
  font-weight: 300;

  margin-bottom: 0px;

  &::before,
  &::after {
    display: none;
  }

  @media (min-width: ${screenSizes.medium}) {
    /* Add line before and after the text */
    font-size: ${fontSizes.large};

    text-align: center;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      height: 1px;
      background-color: silver;
      width: calc(50% - 25px - 22px); /* Adjust as needed */
    }

    &::before {
      left: 20px;
      display: block;
    }

    &::after {
      right: 20px;
      display: block;
    }
  }

  @media (min-width: ${screenSizes.medium}) {
  }

  @media (min-width: ${screenSizes.large}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  @media (min-width: ${screenSizes.medium}) {
  }

  @media (min-width: ${screenSizes.large}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  @media (min-width: ${screenSizes.medium}) {
  }

  @media (min-width: ${screenSizes.large}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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
  margin-top: 10px;

  @media (min-width: ${screenSizes.large}) {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;
