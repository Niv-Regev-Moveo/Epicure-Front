import styled from "styled-components";
import {
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../Shared/constants";

export const StyledSectionsTitle = styled.h3`
  font-size: ${fontSizes.medium18};
  font-weight: 200;
  margin-bottom: 20px;
  margin-top: 30px;

  letter-spacing: ${letterSpacing.small};

  @media (min-width: ${screenSizes.medium}) {
    font-size: ${fontSizes.big};
  }

  @media (min-width: ${screenSizes.large}) {
    margin-bottom: 40px;
    text-align: center;
  }
  @media (min-width: ${screenSizes.big}) {
    margin-bottom: 40px;
    text-align: center;
  }
`;
