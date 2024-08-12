import React from "react";
import CloseButton from "../CloseButton";
import {
  StyledCloseButtonContainer,
  StyledFormContainer,
  StyledMobileIconPopUpContainer,
  StyledWrapperContainer,
} from "./styles";
import SignIn from "../../Sections/SignIn";

interface MobileIconPopUpProps {
  onClose: () => void;
}

const MobileIconPopUp: React.FC<MobileIconPopUpProps> = ({ onClose }) => {
  return (
    <StyledMobileIconPopUpContainer>
      <StyledWrapperContainer>
        <StyledCloseButtonContainer>
          <CloseButton onClick={onClose} color={"white"} />
        </StyledCloseButtonContainer>
        <StyledFormContainer>
          <SignIn onClose={onClose} />
        </StyledFormContainer>
      </StyledWrapperContainer>
    </StyledMobileIconPopUpContainer>
  );
};

export default MobileIconPopUp;
