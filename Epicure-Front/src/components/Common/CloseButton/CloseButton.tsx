import React from "react";
import { StyledCloseButton } from "./styles";
import CloseSVG from "../../../assets/Icons/CloseSVG";

export interface CloseButtonProps {
  onClick: () => void;
  color: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick, color }) => {
  return (
    <StyledCloseButton onClick={onClick} color={color}>
      <CloseSVG />
    </StyledCloseButton>
  );
};

export default CloseButton;
