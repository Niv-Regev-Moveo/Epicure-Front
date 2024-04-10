import styled from "styled-components";
import { fontSizes, screenSizes } from "../../../../Shared/constants";

export const StyledCardDishContainer = styled.div`
  width: 245px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.medium}) {
  }
`;

export const StyledDIshName = styled.h5`
  font-size: ${fontSizes.medium16};
  font-weight: 200;
  padding-left: 20px;
  margin: 0;
  padding-top: 5px;
`;

export const StyledDishPrice = styled.p`
  font-size: ${fontSizes.small};
  font-weight: 300px;
  padding-left: 20px;
`;
