import styled from "styled-components";
import { screenSizes } from "../../../Shared/constants";

export const StyledCardContainerSwiper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 20px;
  margin-top: 15px;

  @media (min-width: ${screenSizes.medium}) {
    margin-left: 40px;
  }

  @media (min-width: ${screenSizes.medium}) {
    margin-left: 0px;
    align-items: center;
  }
`;
