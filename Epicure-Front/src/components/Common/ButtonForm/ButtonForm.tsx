import React from "react";
import { StyledButton } from "./styles";

interface ButtonFormProps {
  text: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

const ButtonForm: React.FC<ButtonFormProps> = ({
  text,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
    >
      {text}
    </StyledButton>
  );
};

export default ButtonForm;
