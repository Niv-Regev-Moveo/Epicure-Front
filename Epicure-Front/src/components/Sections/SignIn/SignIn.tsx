import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { backgroundColors, colors } from "../../../Shared/constants";
import { signInFormFields } from "../../../Shared/textConstants";
import ButtonForm from "../../Common/ButtonForm";
import DynamicForm from "../../Common/Form";
import {
  StyledErrorMessage,
  StyledForgetPasswordText,
  StyledFormContainer,
  StyledFormDescription,
  StyledFormTitle,
  StyledSeparationText,
  StyledTextContent,
} from "./styles";
import { RootState, AppDispatch } from "../../../redux/store/store";
import { clearError } from "../../../redux/chunk/collections/auth/auth.slice";
import { handleLogin } from "../../../services/loginServices";

interface SignInProps {
  onClose: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const { error } = useSelector((state: RootState) => state.authState);

  const handleFormSubmit = async (data: { [key: string]: unknown }) => {
    const { email, password } = data;
    if (email && password) {
      await handleLogin(
        dispatch,
        email as string,
        password as string,
        navigate,
        location
      );
      onClose();
    }
  };

  const handleClearError = () => {
    if (error) {
      dispatch(clearError());
    }
  };

  return (
    <StyledFormContainer>
      <StyledTextContent>
        <StyledFormTitle>SIGN IN</StyledFormTitle>
        <StyledFormDescription>
          To continue the order, please sign in
        </StyledFormDescription>
      </StyledTextContent>

      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}

      <DynamicForm fields={signInFormFields} onSubmit={handleFormSubmit} />

      <StyledForgetPasswordText>Forget password?</StyledForgetPasswordText>
      <StyledSeparationText>or</StyledSeparationText>
      <ButtonForm
        text="SIGN UP"
        backgroundColor={backgroundColors.formButtonWhite}
        borderColor={colors.primary}
        textColor={colors.primary}
        onClick={handleClearError}
      />
    </StyledFormContainer>
  );
};

export default SignIn;
