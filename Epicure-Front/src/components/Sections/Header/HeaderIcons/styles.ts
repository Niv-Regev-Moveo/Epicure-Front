import styled from "styled-components";
import { screenSizes } from "../../../../Shared/constants";

export const StyledHeaderIconsContainer = styled.nav`
  margin-right: 20px;

  @media screen and (max-width: ${screenSizes.small}) {
    margin-right: 5px;
  }
`;

export const StyledHeaderIconsIcon = styled.i`
  padding: 7px;

  @media (min-width: ${screenSizes.small}) {
    padding: 9px;
  }
`;
