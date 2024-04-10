import styled from "styled-components";
import {
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../Shared/constants";

export const StyledSectionsTitle = styled.h3`
  font-size: ${fontSizes.large};
  font-weight: 200;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 30px;
  letter-spacing: ${letterSpacing.small};

  @media (min-width: ${screenSizes.medium}) {
    font-size: ${fontSizes.big};
  }
`;
