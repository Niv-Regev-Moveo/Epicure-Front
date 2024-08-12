import styled from "styled-components";
import { colors, fontSizes, letterSpacing } from "../../../Shared/constants";

export const StyledFormFieldContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 20px;
  width: 100%;
`;

export const StyledFormLabel = styled.label`
  font-size: ${fontSizes.medium};
  position: absolute;

  @media (min-width: 600px) {
  }
`;

export const StyledFormInput = styled.input`
  border: none;
  border-bottom: 0.5px solid;
  background: none;
  padding-bottom: 5px;
  padding-top: 10px;
  font-size: ${fontSizes.medium16};
  letter-spacing: ${letterSpacing.large};
  font-weight: 200;
  margin-top: 10px;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${colors.primary};
  }

  &::placeholder {
    color: ${colors.primary};
    font-weight: 200;
  }

  @media (min-width: 600px) {
  }
`;
