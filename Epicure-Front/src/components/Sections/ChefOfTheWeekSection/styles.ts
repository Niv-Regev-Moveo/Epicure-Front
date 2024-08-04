import styled from "styled-components";
import {
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../Shared/constants";

export const StyledCOTWSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;

  @media (min-width: ${screenSizes.medium}) {
    padding-left: 30px;
  }

  @media (min-width: ${screenSizes.big}) {
    padding-left: 0px;
  }
`;

export const StyledCOTWContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  animation: reveal 2s linear forwards;
  filter: blur(13px);

  @keyframes reveal {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  @media (min-width: ${screenSizes.medium}) {
    flex-direction: row;
    justify-content: space-around;
    padding-left: 20px;
    width: 95%;
  }

  @media (min-width: ${screenSizes.big}) {
    justify-content: center;
    /* padding-left: 200px; */
    padding-top: 30px;
    margin-left: 40px;
  }
`;

export const StyledImageTitleContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  max-height: 280px;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  filter: grayscale(100%);

  @media (min-width: ${screenSizes.medium}) {
    width: 30%;
    padding-right: 3%;
    align-items: center;
    min-width: 200px;
  }

  @media (min-width: ${screenSizes.large}) {
    width: 30%;
    max-width: 300px;
    height: 60%;
  }

  @media (min-width: ${screenSizes.big}) {
    width: 90%;

    max-height: 372px;
    padding-left: 180px;
  }
`;

export const ChefDescription = styled.p`
  font-size: ${fontSizes.medium18};
  letter-spacing: ${letterSpacing.medium};
  font-weight: 200;
  width: 100%;

  @media (min-width: ${screenSizes.medium}) {
    text-align: start;
    font-size: ${fontSizes.medium16};
  }
  @media (min-width: ${screenSizes.large}) {
    min-width: 500px;
  }

  @media (min-width: ${screenSizes.big}) {
    width: 100%;
    font-size: ${fontSizes.xlLarge};
    line-height: 1.5;
    margin-top: 0px;
  }
`;

export const StyledChefImg = styled.img`
  height: auto;
  display: block;
  max-width: 350px;

  @media (min-width: ${screenSizes.medium}) {
    max-width: 250px;
  }

  @media (min-width: ${screenSizes.big}) {
    max-width: none;
    height: 372px;
  }
`;

export const StyledChefNameTitle = styled.h3`
  letter-spacing: ${letterSpacing.large};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 51px;
  background-color: rgba(255, 255, 255, 0.7);
  padding-top: 18px;
  text-align: center;
  font-size: ${fontSizes.medium18};
  font-weight: 400;
  box-sizing: border-box;
  margin: 0;

  @media (min-width: ${screenSizes.medium}) {
    max-height: 78px;
    width: 250px;
  }

  @media (min-width: ${screenSizes.big}) {
    height: 78px;
    width: 480px;
    font-size: ${fontSizes.xlLarge};
  }
`;

export const StyledDescriptionContainer = styled.div`
  display: flex;
  width: 80%;
  @media (min-width: ${screenSizes.medium}) {
    width: 270px;
  }

  @media (min-width: ${screenSizes.large}) {
    min-width: 642px;
  }

  @media (min-width: ${screenSizes.big}) {
    min-width: 740px;
    padding-left: 80px;
    height: 350px;
  }
`;

export const StyledSectionsTitle = styled.h3`
  font-size: ${fontSizes.medium18};

  font-weight: 200;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 20px;
  letter-spacing: ${letterSpacing.small};

  @media (min-width: ${screenSizes.medium}) {
    font-size: ${fontSizes.big};
    text-align: center;

    margin-left: 10px;
  }

  @media (min-width: ${screenSizes.big}) {
    font-size: ${fontSizes.big};
    text-align: center;
    margin-bottom: 0px;
  }
`;
