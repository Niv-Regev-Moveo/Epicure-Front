import styled from "styled-components";
import { screenSizes } from "../../../../Shared/constants";

export const StyledHeaderIconsContainer = styled.nav`
  margin-right: 10px;

  @media screen and (min-width: ${screenSizes.small}) {
    margin-right: 5px;
  }

  @media screen and (min-width: ${screenSizes.large}) {
    margin-right: 40px;
  }
`;

export const StyledHeaderIconsIcon = styled.i`
  padding: 7px;

  @media (min-width: ${screenSizes.small}) {
    padding: 9px;
  }

  @media (min-width: ${screenSizes.small}) {
    padding: 12px;
  }
`;
