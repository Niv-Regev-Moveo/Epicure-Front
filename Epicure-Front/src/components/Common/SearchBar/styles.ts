import styled from "styled-components";
import {
  colors,
  fontSizes,
  letterSpacing,
  screenSizes,
} from "../../../Shared/constants";

export const StyledSearchBarImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 30vh;
  overflow: hidden;
  touch-action: none;
  overscroll-behavior-y: none;
  -ms-touch-action: none;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: ${screenSizes.medium}) {
    max-height: 50vh;
  }
`;

export const StyledDescriptionForSearchBar = styled.div`
  color: ${colors.primary};
  font-size: ${fontSizes.medium16};

  font-weight: 200;
  padding-left: auto;
  padding-right: auto;
  padding-bottom: 10px;
  width: 90%;
  padding-bottom: 20px;

  @media (min-width: ${screenSizes.small}) {
    font-size: ${fontSizes.large};
  }

  @media (min-width: ${screenSizes.medium}) {
    font-size: ${fontSizes.xlLarge};
    font-weight: 200;
  }
  @media (min-width: ${screenSizes.large}) {
    font-size: ${fontSizes.xlxLarge};
    max-width: 500px;
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
  width: 95%;
  height: 70%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: ${letterSpacing.large};
  z-index: 1;

  @media (min-width: ${screenSizes.small}) {
    width: 90%;
    height: 70%;
  }

  @media (min-width: ${screenSizes.medium}) {
    width: 65%;
    height: 60%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const StyledSpanSearchIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const StyledSearchBarInput = styled.input`
  width: 320px;
  height: 35px;
  font-size: 15px;
  letter-spacing: ${letterSpacing.small};
  border: none;
  background-color: inherit;
  font-size: ${fontSizes.small};

  @media (min-width: ${screenSizes.medium}) {
    font-size: ${fontSizes.medium};
    margin-left: 15px;
  }

  @media (min-width: ${screenSizes.large}) {
    width: 505px;
    font-size: ${fontSizes.medium};
  }
`;

export const StyledSearchBarButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const StylesSearchImage = styled.img`
  width: 25px;
  height: 22px;
  color: #000000;
  margin-left: 10px;

  @media (min-width: ${screenSizes.large}) {
    margin-left: 20px;
  }
`;

export const StyledSearchBarInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  min-width: 200px;
  width: 80%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  align-items: center;

  &:hover {
    box-shadow: 0px 0px 16px 1px rgba(30, 29, 31, 0.4);
  }

  @media (min-width: ${screenSizes.medium}) {
    min-width: 300px;
    max-width: 505px;
    height: 48px;
  }

  @media (min-width: ${screenSizes.large}) {
    width: 700px;
  }
`;

export const StyledSearchImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
`;
