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
    align-items: center;
    margin-left: 0px;
  }
`;
