import styled from "styled-components";
import {
  backgroundColors,
  fontSizes,
  screenSizes,
} from "../../../Shared/constants";

export const StyledCardContainer = styled.div`
  width: 245px;
  padding-left: 10x;

  @media (min-width: ${screenSizes.medium}) {
    margin-left: 20px;
  }
`;

export const StyledCardImgContainer = styled.div``;

export const StyledCardNameChef = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${backgroundColors.cards};
  min-height: 81px;
  padding-bottom: 15px;
`;

export const StyledCardImg = styled.img`
  height: 151.8px;
`;

export const StyledName = styled.h3`
  font-size: ${fontSizes.medium18};
  font-weight: 400;
  padding-left: 20px;
  margin: 0;
  padding-bottom: 5px;
`;

export const StyledChefName = styled.h5`
  font-size: ${fontSizes.medium16};
  font-weight: 200;
  padding-left: 20px;
  margin: 0;
  padding-top: 5px;
`;

export const StyledBottomComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
