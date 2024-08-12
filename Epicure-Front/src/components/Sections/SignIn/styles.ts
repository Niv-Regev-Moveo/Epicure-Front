import styled from "styled-components";
import { colors, fontSizes, letterSpacing } from "../../../Shared/constants";

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 200;
  letter-spacing: ${letterSpacing.large};
  height: 590px;
  width: 100%;

  @media (min-width: 600px) {
    justify-content: center;
    height: 582px;
  }
`;

export const StyledTextContent = styled.div`
  text-align: center;
`;

export const StyledFormTitle = styled.h3`
  font-size: ${fontSizes.medium18};
  text-align: center;
  font-weight: 200;
  letter-spacing: ${letterSpacing.big};
  padding-top: 30px;

  @media (min-width: 600px) {
    padding-top: 0px;
    font-size: ${fontSizes.xlLarge};
    margin-top: 0px;
  }
`;

export const StyledFormDescription = styled.p`
  text-align: center;
  font-size: ${fontSizes.medium16};
  letter-spacing: ${letterSpacing.large};
`;

export const StyledForgetPasswordText = styled.p`
  font-weight: 400;
  cursor: pointer;
`;

export const StyledSeparationText = styled.p`
  display: flex;
  align-items: center;
  color: ${colors.separationText};
  text-align: center;
  width: 85%;
  max-width: 292px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid ${colors.separationText};
    margin: 0 8px;
  }
`;

export const StyledErrorMessage = styled.div`
  color: red;
  margin: 10px 0;
`;
