import styled from "styled-components";
import { backgroundColors } from "./Shared/constants";

export const StyledGlobalContainer = styled.div`
  min-height: 100vh;
  background-color: ${backgroundColors.secondary};

  font-family: "Helvetica Neue", sans-serif;
`;

export const StyledHeaderContainer = styled.div`
  position: relative;
  z-index: 100;
`;
