import styled from "styled-components";
import {
  colors,
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../Shared/constants";

import { Link } from "react-router-dom";

export const StyledLinkedSectionTitle = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  margin-top: 10px;

  @media (min-width: ${screenSizes.medium}) {
    padding-left: 70%;
  }

  @media (min-width: ${screenSizes.large}) {
    padding-left: 67%;
  }

  @media (min-width: ${screenSizes.big}) {
    padding-left: 66%;
    margin-top: 20px;
  }
`;

export const StyledTitle = styled.h3`
  letter-spacing: ${letterSpacing.large};
  color: ${colors.primary};
  font-size: ${fontSizes.medium};
  font-weight: 400;
  padding-right: 10px;

  @media (min-width: ${screenSizes.big}) {
    font-size: ${fontSizes.xlLarge};
  }
`;
