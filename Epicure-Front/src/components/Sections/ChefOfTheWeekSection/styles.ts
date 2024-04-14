import styled from "styled-components";
import { fontSizes, screenSizes } from "../../../Shared/constants";

export const StyledCOTWSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
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
  animation: reveal 7s linear forwards;
  opacity: 0;
  filter: blur(13px);

  @keyframes reveal {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  @media (min-width: ${screenSizes.medium}) {
    flex-direction: row;
    justify-content: start;
    align-items: start;
  }

  @media (min-width: ${screenSizes.large}) {
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
  align-items: center;

  @media (min-width: ${screenSizes.medium}) {
    width: 30%;
    padding-right: 3%;
    padding-left: 10%;
    min-width: 200px;
  }

  @media (min-width: ${screenSizes.large}) {
    width: 30%;
    max-width: 300px;
    height: 60%;
  }
`;

export const ChefDescription = styled.p`
  max-width: 290px;

  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${screenSizes.medium}) {
    width: 70%;
    margin-left: 5%;
    max-width: 450px;
  }
  @media (min-width: ${screenSizes.large}) {
    max-width: 500px;
  }
`;

export const StyledChefImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-width: 350px;

  @media (min-width: ${screenSizes.medium}) {
    max-width: 350px;
  }
`;

export const StyledChefNameTitle = styled.h3`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 51px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 8px;
  text-align: center;
  font-size: ${fontSizes.medium18};
  font-weight: 400;

  box-sizing: border-box;
  margin: 0;

  @media (min-width: ${screenSizes.medium}) {
    max-height: 78px;
    width: 72%;
  }
`;

export const StyledDescriptionContainer = styled.div`
  display: flex;
  width: 70%;

  @media (min-width: ${screenSizes.medium}) {
  }
`;
