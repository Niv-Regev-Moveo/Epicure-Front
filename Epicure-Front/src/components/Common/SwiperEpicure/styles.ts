import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { screenSizes } from "../../../Shared/constants";

export const StyledSwiper = styled(Swiper)`
  width: 100%;

  @media (min-width: ${screenSizes.medium}) {
    width: 100%;
  }
`;

export const StyledContainerSwipers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 20px;
  margin-top: 20px;

  @media (min-width: ${screenSizes.medium}) {
    margin-left: 40px;
  }

  @media (min-width: ${screenSizes.large}) {
    margin-left: 0px;
  }
`;

export const StyledDisplayCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (min-width: ${screenSizes.large}) {
    width: 850px;
    justify-content: center;
    margin: auto;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 240px;

  @media (min-width: ${screenSizes.large}) {
    width: 250px;
  }
`;
