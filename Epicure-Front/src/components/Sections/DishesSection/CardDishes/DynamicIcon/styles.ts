import styled from "styled-components";
import { screenSizes } from "../../../../../Shared/constants";

export const StyledSVGContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;

  @media (min-width: ${screenSizes.large}) {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;
