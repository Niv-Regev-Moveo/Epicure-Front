import styled from "styled-components";
import {
  colors,
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../../Shared/constants";

export const StyledSearchImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
`;

export const StyledSearchBarImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 273px;
  overflow-x: hidden;

  @media (min-width: ${screenSizes.large}) {
  }
`;

export const StyledDescriptionForSearchBar = styled.div`
  color: ${colors.primary};
  font-size: ${fontSizes.large};
  font-weight: 200;
  padding-left: auto;
  padding-right: auto;
  padding-bottom: 10px;
  width: 90%;

  @media (min-width: ${screenSizes.large}) {
    font-size: ${fontSizes.large};
    font-weight: 200;
  }
`;

export const StyledInputSearchBar = styled.input`
  min-width: 200px;
  width: 80%;
  padding: 10px;
  font-size: ${fontSizes.small};
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media (min-width: ${screenSizes.medium}) {
    min-width: 300px;
  }
`;

export const StyledSearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDescriptionAndSearchContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: ${letterSpacing.large};
  z-index: 1;

  @media (min-width: ${screenSizes.small}) {
    width: 80%;
    height: 60%;
  }

  @media (min-width: ${screenSizes.medium}) {
    width: 65%;
    height: 50%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const StyledSpanSearchIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
