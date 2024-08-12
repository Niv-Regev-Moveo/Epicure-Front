import styled from "styled-components";
import { colors, screenSizes } from "../../../Shared/constants";

export const StyledCloseButton = styled.button`
  padding-top: 11px;
  padding-left: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${colors.primary};

  @media (min-width: ${screenSizes.medium}) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.secondary};
    background-color: ${colors.primary};
    padding-left: 0;
    padding-top: 0;
    width: 35px;
    height: 35px;
  }
`;
