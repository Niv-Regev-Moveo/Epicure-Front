import styled from "styled-components";
import {
  colors,
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../Shared/constants";

import { Link } from "react-router-dom";

export const StyledArrowTitleContainer = styled.div`
  margin-top: 15px;

  @media (min-width: ${screenSizes.medium}) {
    margin-left: 70%;
  }
`;

export const StyledLinkedSectionTitle = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;

  @media (min-width: ${screenSizes.media}) {
  }
`;

export const StyledTitle = styled.h3`
  letter-spacing: ${letterSpacing.large};
  color: ${colors.primary};
  font-size: ${fontSizes.medium};
  font-weight: 400;
  padding-bottom: 3px;
  padding-right: 10px;

  @media (min-width: ${screenSizes.medium}) {
  }
`;
