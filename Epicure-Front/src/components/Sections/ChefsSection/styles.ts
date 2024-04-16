import styled from "styled-components";
import { screenSizes } from "../../../Shared/constants";

export const StyledChefSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 20px;

  @media (min-width: ${screenSizes.medium}) {
    padding-left: 40px;
  }
`;
