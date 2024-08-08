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
    color: ${colors.secondary};
    background-color: ${colors.primary};
  }
`;
