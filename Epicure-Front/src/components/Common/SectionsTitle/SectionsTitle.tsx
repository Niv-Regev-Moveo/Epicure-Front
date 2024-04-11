import { StyledSectionsTitle } from "./styles";

interface SectionsTitleProps {
  title: string;
}

const SectionsTitle = ({ title }: SectionsTitleProps) => {
  return <StyledSectionsTitle>{title}</StyledSectionsTitle>;
};

export default SectionsTitle;
