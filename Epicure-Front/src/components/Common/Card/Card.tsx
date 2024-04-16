import {
  StyledCardImg,
  StyledCardImgContainer,
  StyledName,
  StyledCardNameChef,
  StyledCardContainer,
  StyledBottomComponent,
} from "./Styles";

interface CardProps {
  title: string;
  image: string;
  bottomComponent?: JSX.Element;
}

const Card = ({ title, image, bottomComponent }: CardProps) => {
  return (
    <StyledCardContainer>
      <StyledCardImgContainer>
        <StyledCardImg src={image} alt="" />
      </StyledCardImgContainer>
      <StyledCardNameChef>
        <StyledName>{title}</StyledName>
        {bottomComponent && (
          <StyledBottomComponent>{bottomComponent}</StyledBottomComponent>
        )}
      </StyledCardNameChef>
    </StyledCardContainer>
  );
};

export default Card;
