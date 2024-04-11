import styled from "styled-components";
import { backgroundColors, screenSizes } from "../../../Shared/constants";

export const StyledAboutUsSectionContainer = styled.div`
  background-color: ${backgroundColors.secondary};
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.medium}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 125px;
  margin-top: 30px;
`;

export const StyledDescription = styled.p``;

export const StyledButtonsAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${screenSizes.medium}) {
    margin-left: 20px; /* Adjust as needed */
  }
`;

export const StyledLogoTitle = styled.div`
  order: 2;
  @media (min-width: ${screenSizes.medium}) {
    order: 1;
    margin-left: auto;
  }
`;

export const StyledButtonsAndDescriptionWrapper = styled.div`
  order: 1;
  @media (min-width: ${screenSizes.medium}) {
    order: 2;
    margin-right: auto;
  }
`;
