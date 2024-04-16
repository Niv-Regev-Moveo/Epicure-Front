import styled from "styled-components";
import {
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../../Shared/constants";

export const StyledIconExplainTitle = styled.h3`
  font-size: ${fontSizes.medium18};
  font-weight: 200;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 30px;
  letter-spacing: ${letterSpacing.large};

  @media (min-width: ${screenSizes.medium}) {
    font-size: ${fontSizes.large};
  }
  @media (min-width: ${screenSizes.large}) {
    font-size: ${fontSizes.xlLarge};
  }
`;
