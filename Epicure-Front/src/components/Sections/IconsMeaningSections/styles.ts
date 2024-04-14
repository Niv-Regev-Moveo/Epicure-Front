import styled from "styled-components";
import { backgroundColors, screenSizes } from "../../../Shared/constants";

export const StyledIconsMeaningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${backgroundColors.secondary};

  @media (min-width: ${screenSizes.medium}) {
    justify-content: center;
  }
`;

export const StyledTitleContainer = styled.div``;

export const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.medium}) {
    flex-direction: row;
  }
`;

export const StyledIconExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 20px;

  @media (min-width: ${screenSizes.medium}) {
    padding-top: 0px;
    padding-left: 25px;
    padding-right: 25px;
  }
`;
