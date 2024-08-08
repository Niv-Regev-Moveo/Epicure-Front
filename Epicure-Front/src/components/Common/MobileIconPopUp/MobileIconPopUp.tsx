import React from "react";
import CloseButton from "../CloseButton";
import {
  StyledCloseButtonContainer,
  StyledFormContainer,
  StyledMobileIconPopUpContainer,
} from "./styles";
import SignIn from "../../Sections/SignIn";

interface MobileIconPopUpProps {
  onClose: () => void;
}

const MobileIconPopUp: React.FC<MobileIconPopUpProps> = ({ onClose }) => {
  return (
    <StyledMobileIconPopUpContainer>
      <StyledCloseButtonContainer>
        <CloseButton onClick={onClose} color={"white"} />
      </StyledCloseButtonContainer>
      <StyledFormContainer>
        <SignIn />
      </StyledFormContainer>
    </StyledMobileIconPopUpContainer>
  );
};

export default MobileIconPopUp;
