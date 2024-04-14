import { StyledIconExplainTitle } from "./styles";

interface IconExplainTitleProps {
  title: string;
}

const IconExplainTitle = ({ title }: IconExplainTitleProps) => {
  return <StyledIconExplainTitle>{title}</StyledIconExplainTitle>;
};

export default IconExplainTitle;
