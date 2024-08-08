import styled from "styled-components";
import {
  backgroundColors,
  colors,
  fontSizes,
  letterSpacing,
} from "../../../Shared/constants";

interface StyledButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || backgroundColors.formButtonGrey};
  color: ${({ textColor }) => textColor || colors.secondary};
  border: 2px solid ${({ borderColor }) => borderColor || `transparent`};
  cursor: pointer;
  font-size: ${fontSizes.medium18};
  letter-spacing: ${letterSpacing.big};
  height: 48px;
  width: 206px;
  font-weight: 400;
`;
