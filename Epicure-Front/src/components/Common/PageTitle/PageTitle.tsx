import React from "react";
import { StyledPageTitle, StyledPageTitleContainer } from "./styles";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <StyledPageTitleContainer>
      <StyledPageTitle>{title}</StyledPageTitle>
    </StyledPageTitleContainer>
  );
};

export default PageTitle;
