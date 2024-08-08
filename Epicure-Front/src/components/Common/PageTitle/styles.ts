import styled from "styled-components";
import {
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../Shared/constants";

export const StyledPageTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;

  @media (min-width: 376px) {
    justify-content: center;
  }

  @media (min-width: ${screenSizes.medium}) {
    display: none;
  }
`;

export const StyledPageTitle = styled.h3`
  font-size: ${fontSizes.medium18};
  font-weight: 200;
  letter-spacing: ${letterSpacing.large};
  margin: 0;
`;
