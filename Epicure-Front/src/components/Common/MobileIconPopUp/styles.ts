import styled from "styled-components";
import { backgroundColors, colors } from "../../../Shared/constants";

export const StyledMobileIconPopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75%;
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  z-index: 100;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledCloseButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 46px;
  background-color: white;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.07);
`;

export const StyledFormContainer = styled.div`
  height: 590px;
  width: 100%;
  background-color: ${backgroundColors.secondary};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  padding-top: 70px;
  color: ${colors.primary};
`;
