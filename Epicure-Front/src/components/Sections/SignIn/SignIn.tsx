import { backgroundColors, colors } from "../../../Shared/constants";
import ButtonForm from "../../Common/ButtonForm";
import {
  StyledForgetPasswordText,
  StyledFormContainer,
  StyledFormDescription,
  StyledFormTitle,
  StyledSeparationText,
  StyledTextContent,
} from "./styles";

const SignIn = () => {
  return (
    <StyledFormContainer>
      <StyledTextContent>
        <StyledFormTitle>SIGN IN</StyledFormTitle>
        <StyledFormDescription>
          To continue the order, please sign in
        </StyledFormDescription>
      </StyledTextContent>
      <form>form</form>
      <ButtonForm
        text={"LOGIN"}
        backgroundColor={backgroundColors.formButtonGrey}
        borderColor={colors.secondary}
        textColor={colors.secondary}
      />
      <StyledForgetPasswordText>Forget password?</StyledForgetPasswordText>
      <StyledSeparationText>or</StyledSeparationText>
      <ButtonForm
        text={"SIGN UP"}
        backgroundColor={backgroundColors.formButtonWhite}
        borderColor={colors.primary}
        textColor={colors.primary}
      />
    </StyledFormContainer>
  );
};

export default SignIn;
