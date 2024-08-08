import styled from "styled-components";
import {
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../Shared/constants";

export const StyledImageTitleContainer = styled.div`
  position: relative;
  max-height: 338px;
  max-width: 378px;
  display: flex;
  padding-top: 10px;

  flex-direction: column;
  justify-content: center;
  filter: grayscale(100%);

  @media (min-width: ${screenSizes.large}) {
    align-items: center;
  }
`;

export const StyledChefImg = styled.img`
  object-fit: cover;
  object-position: 30% 10%;
  left: 0;
  display: flex;
  align-items: center;
  max-height: 338px;
  max-width: 378px;

  @media (min-width: ${screenSizes.small}) {
    height: 337px;
    width: 335px;
  }

  @media (min-width: ${screenSizes.big}) {
    height: 338px;
    width: 378px;
  }
`;

export const StyledChefNameTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78px;
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);

  @media (min-width: ${screenSizes.medium}) {
  }
`;
export const StylesChefName = styled.h3`
  letter-spacing: ${letterSpacing.large};
  font-size: ${fontSizes.xlLarge};
  font-weight: 400;

  @media (min-width: ${screenSizes.medium}) {
    font-size: ${fontSizes.bigLarge};
  }

  @media (min-width: ${screenSizes.big}) {
    font-size: ${fontSizes.Giant};
  }
`;
