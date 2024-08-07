import styled from "styled-components";
import { colors, letterSpacing, screenSizes } from "../../../Shared/constants";

export const StyledCategoriesBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 21px;
  font-weight: 200;
  max-height: 30px;
  overflow-x: auto;
  white-space: nowrap;
  letter-spacing: ${letterSpacing.large};
  padding-top: 40px;
  padding-bottom: 10px;

  @media (min-width: ${screenSizes.mobileBreakPoint}) {
    flex-wrap: nowrap;
    padding: auto;
    justify-content: center;
  }
`;

export const StyledCategory = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  position: relative;
  font-weight: ${({ isSelected }) => (isSelected ? 400 : 200)};
  white-space: nowrap;
  height: 30px;
  display: flex;
  align-items: center;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ isSelected }) =>
      isSelected ? `${colors.stars}` : "transparent"};
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media (min-width: ${screenSizes.medium}) {
    &:after {
      background-color: white;
    }
  }
`;
