import React from "react";
import { StyledSectionsTitle } from "./styledSectionsTitle";

interface SectionsTitleProps {
  title: string;
}

const SectionsTitle = ({ title }: SectionsTitleProps) => {
  return <StyledSectionsTitle>{title}</StyledSectionsTitle>;
};

export default SectionsTitle;
