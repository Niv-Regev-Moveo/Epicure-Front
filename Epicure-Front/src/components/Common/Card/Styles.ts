import styled, { css } from "styled-components";
import {
  backgroundColors,
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../Shared/constants";

interface StyledCardContainerProps {
  restaurantPageStyle?: boolean;
}

export const StyledCardContainer = styled.div<StyledCardContainerProps>`
  width: 245px;
  background-color: ${backgroundColors.cards};

  @media (min-width: ${screenSizes.medium}) {
    margin-left: 20px;
    padding-bottom: 0px;
  }

  @media (min-width: ${screenSizes.large}) {
    width: 260px;
  }

  @media (min-width: ${screenSizes.big}) {
    min-width: 379px;
    min-height: 404px;
  }

  ${({ restaurantPageStyle }) =>
    restaurantPageStyle &&
    css`
      width: 335px;

      @media (max-width: ${screenSizes.medium}) {
        width: 335px;
      }
    `}
`;

export const StyledCardNameChef = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 81px;
`;

export const StyledCardImg = styled.img<StyledCardContainerProps>`
  width: 100%;
  object-fit: cover;
  height: 151px;

  @media (min-width: ${screenSizes.big}) {
    height: 236px;
  }

  ${({ restaurantPageStyle }) =>
    restaurantPageStyle &&
    css`
      @media (max-width: ${screenSizes.medium}) {
        height: 207px;
      }
    `}
`;

export const StyledName = styled.h3`
  font-size: ${fontSizes.medium18};
  font-weight: 400;
  padding-left: 15px;
  margin: 0;
  padding-bottom: 5px;
  padding-top: 16px;
  letter-spacing: ${letterSpacing.medium};

  @media (min-width: ${screenSizes.medium}) {
    text-align: center;
    padding-left: 0px;
    font-size: ${fontSizes.large};
  }

  @media (min-width: ${screenSizes.large}) {
    font-size: ${fontSizes.bigLarge};
  }
  @media (min-width: ${screenSizes.big}) {
    font-size: ${fontSizes.Giant};
  }
`;

export const StyledBottomComponent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.big}) {
    align-items: center;
  }
`;

export const StyledCardImgContainer = styled.div``;
