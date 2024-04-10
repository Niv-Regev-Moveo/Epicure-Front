import styled from "styled-components";
import { fontSizes, screenSizes } from "../../../../Shared/constants";

export const StyledCardRestaurantContainer = styled.div`
  width: 245px;
  padding-left: 10x;

  @media (min-width: ${screenSizes.medium}) {
    margin-left: 20px;
  }
`;

export const StyledRestaurantName = styled.h3`
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
