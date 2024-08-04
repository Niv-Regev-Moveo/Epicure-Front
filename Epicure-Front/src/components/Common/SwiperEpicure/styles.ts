import styled from "styled-components";
import { Swiper } from "swiper/react";
import { screenSizes } from "../../../Shared/constants";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
`;

export const StyledDisplayCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${screenSizes.large}) {
    justify-content: center;
  }
`;

export const StyledCardContainerSwiper = styled.div`
  display: flex;
  align-content: space-between;
`;
