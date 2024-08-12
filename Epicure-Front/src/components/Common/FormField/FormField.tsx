import React from "react";
import {
  StyledFormFieldContainer,
  StyledFormInput,
  StyledFormLabel,
} from "./styles";

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <StyledFormFieldContainer>
      <StyledFormLabel htmlFor={name}>{label}</StyledFormLabel>
      <StyledFormInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </StyledFormFieldContainer>
  );
};

export default FormField;
