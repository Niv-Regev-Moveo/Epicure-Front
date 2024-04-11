import { StyledFooterLink, StyledFooterContainer } from "./styles";

const Footer = () => {
  return (
    <>
      <StyledFooterContainer>
        <StyledFooterLink to={"/Contact-Us"}>Contact Us</StyledFooterLink>
        <StyledFooterLink to={"/Term-of-Use"}>Term of Use</StyledFooterLink>
        <StyledFooterLink to={"/Privacy-Policy"}>
          Privacy Policy
        </StyledFooterLink>
      </StyledFooterContainer>
    </>
  );
};

export default Footer;
