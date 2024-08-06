import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, fontSizes, screenSizes } from "../../../Shared/constants";

export const StyledFooterContainer = styled.footer`
  bottom: 0;
  margin-top: auto;
  background-color: ${colors.secondary};
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;

  border-top: 1px solid ${colors.navBarBorder};
  margin-top: 20px;

  @media (min-width: ${screenSizes.mobileBreakPoint}) {
    flex-direction: row;
    height: 84px;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: auto;
    width: none;
    border-top: 1px solid ${colors.navBarBorder};
  }
`;

export const StyledFooterLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: ${fontSizes.medium};
  font-weight: 200;
  margin: 10px 0;
  text-align: center;
  letter-spacing: 1px;
  padding-left: 20px;

  @media (min-width: ${screenSizes.mobileBreakPoint}) {
    margin: 0 15px;
    width: auto;
  }

  @media (min-width: ${screenSizes.medium}) {
    margin: 0 25px;
    font-size: ${fontSizes.medium18};
  }
`;
