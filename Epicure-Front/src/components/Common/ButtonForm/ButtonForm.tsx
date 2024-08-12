import React from "react";
import { StyledButton } from "./styles";

interface ButtonFormProps {
  text: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const ButtonForm: React.FC<ButtonFormProps> = ({
  text,
  backgroundColor,
  borderColor,
  textColor,
  type = "button",
  onClick,
}) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $textColor={textColor}
      type={type}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default ButtonForm;
