import styled from "styled-components";
import {
  backgroundColors,
  colors,
  screenSizes,
} from "../../../Shared/constants";

export const StyledMobileIconPopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 100;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 600px) {
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const StyledWrapperContainer = styled.div`
  width: 100%;

  @media (min-width: ${screenSizes.medium}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledCloseButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 46px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.07);

  @media (min-width: ${screenSizes.medium}) {
    box-shadow: none;
  }
`;

export const StyledFormContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${backgroundColors.secondary};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
  padding-top: 20px;

  @media (min-width: 600px) {
    height: 65%;
    width: 40%;
    min-height: 582px;
    min-width: 573px;
    background-color: white;
    border-radius: 0px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding-top: 0px;
  }
`;
