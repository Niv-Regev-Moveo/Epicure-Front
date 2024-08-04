// src/components/Common/Card/Card.tsx
import React from "react";
import {
  StyledCardContainer,
  StyledCardImg,
  StyledCardImgContainer,
  StyledCardNameChef,
  StyledName,
  StyledBottomComponent,
} from "./Styles";

interface CardProps<T extends JSX.IntrinsicAttributes> {
  image: string;
  title: string;
  BottomComponent: React.FC<T>;
  bottomComponentProps: T;
}

const Card = <T extends JSX.IntrinsicAttributes>({
  image,
  title,
  BottomComponent,
  bottomComponentProps,
}: CardProps<T>) => {
  return (
    <StyledCardContainer>
      <StyledCardImgContainer>
        <StyledCardImg src={image} alt={title} />
      </StyledCardImgContainer>
      <StyledCardNameChef>
        <StyledName>{title}</StyledName>
        {BottomComponent && (
          <StyledBottomComponent>
            <BottomComponent {...bottomComponentProps} />
          </StyledBottomComponent>
        )}
      </StyledCardNameChef>
    </StyledCardContainer>
  );
};

export default Card;
