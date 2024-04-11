import styled from "styled-components";
import {
  backgroundColors,
  fontSizes,
  screenSizes,
} from "../../../../Shared/constants";

export const StyledCardRestaurantContainer = styled.div`
  width: 245px;
  padding-left: 10x;

  @media (min-width: ${screenSizes.medium}) {
    margin-left: 20px;
  }
`;

export const StyledCardRestaurantImgContainer = styled.div``;

export const StyledCardRestaurantNameChef = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${backgroundColors.cards};
  height: 81px;
`;

export const StyledCardRestaurantImg = styled.img`
  height: 151.8px;
`;

export const StyledChefName = styled.h5`
  font-size: ${fontSizes.medium16};
  font-weight: 200;
  padding-left: 20px;
  margin: 0;
  padding-top: 5px;
`;
