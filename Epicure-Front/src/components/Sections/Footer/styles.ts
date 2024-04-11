import styled from "styled-components";
import { Link } from "react-router-dom";
import { fontSizes, screenSizes } from "../../../Shared/constants";

export const StyledFooterContainer = styled.footer`
  bottom: 0;
  margin-top: auto;
  background-color: white;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin-left: 19px;

  @media (min-width: ${screenSizes.small}) {
    flex-direction: row;
    height: 84px;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: auto;
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

  @media (min-width: ${screenSizes.small}) {
    margin: 0 15px;
    width: auto;
    font-size: ${fontSizes.la};
  }

  @media (min-width: ${screenSizes.medium}) {
    margin: 0 25px;
  }
`;
