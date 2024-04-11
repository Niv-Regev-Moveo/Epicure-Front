import styled from "styled-components";
import { fontSizes, screenSizes } from "../../../Shared/constants";

export const StyledCOTWSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const StyledCOTWContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${screenSizes.medium}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const StyledImageTitleContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  max-height: 280px;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: ${screenSizes.medium}) {
    width: 45%;
    height: 45%;
  }

  @media (min-width: ${screenSizes.large}) {
    width: 60%;
    height: 60%;
  }
`;

export const ChefDescription = styled.p`
  max-width: 290px;
  margin-top: 0px;
`;

export const StyledChefImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
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
  }
`;
