import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormField from "../FormField";
import ButtonForm from "../ButtonForm";
import { backgroundColors, colors } from "../../../Shared/constants";
import { StyledFormButtonContainer, StyleDynamicForm } from "./styles";

interface FormFieldConfig {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

interface DynamicFormProps {
  fields: FormFieldConfig[];
  onSubmit: (data: Record<string, unknown>) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const initialValues: Record<string, string> = fields.reduce(
    (fieldsData, field) => {
      fieldsData[field.name] = "";
      return fieldsData;
    },
    {} as Record<string, string>
  );

  const validationSchema = Yup.object(
    fields.reduce((fieldsData, field) => {
      if (field.name === "email") {
        fieldsData[field.name] = Yup.string()
          .email("Invalid email address")
          .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Email must be in a valid format"
          )
          .required("Required");
      } else if (field.name === "password") {
        fieldsData[field.name] = Yup.string()
          .min(4, "Password must be at least 4 characters")
          .max(24)
          .required("Required");
      } else {
        fieldsData[field.name] = Yup.string().required("Required");
      }
      return fieldsData;
    }, {} as Record<string, Yup.AnySchema>)
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <StyleDynamicForm onSubmit={formik.handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <FormField
            label={field.label}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched[field.name] && formik.errors[field.name] ? (
            <div>{formik.errors[field.name]}</div>
          ) : null}
        </div>
      ))}
      <StyledFormButtonContainer>
        <ButtonForm
          text="LOGIN"
          backgroundColor={
            formik.isValid && formik.dirty
              ? "black"
              : backgroundColors.formButtonGrey
          }
          borderColor={colors.secondary}
          textColor={colors.secondary}
          type="submit"
        />
      </StyledFormButtonContainer>
    </StyleDynamicForm>
  );
};

export default DynamicForm;
