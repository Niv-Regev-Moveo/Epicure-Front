import styled from "styled-components";
import { screenSizes } from "../../Shared/constants";

export const StyledPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 82.3%;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;

  @media (max-width: ${screenSizes.large}) {
    gap: 40px;
    max-width: 87%;
  }

  @media (min-width: ${screenSizes.small}) {
    gap: 15px;
  }
`;
export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: ${screenSizes.large}) {
    flex: 1 1 calc(50% - 0px);
    max-width: calc(50% - 20px);
  }

  @media (min-width: ${screenSizes.big}) {
    flex: 1 1 calc(33.333% - 0px);
    max-width: calc(33.333% - 20px);
  }

  @media (max-width: ${screenSizes.medium}) {
    flex: 1 1 calc(80% - 40px);
    max-width: calc(80% - 40px);
    padding-bottom: 0px;
  }
  @media (max-width: 375px) {
    flex: 1 1 335px;
    max-width: 335px;
  }
`;
