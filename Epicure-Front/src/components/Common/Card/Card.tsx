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
  BottomComponent?: React.FC<T>;
  bottomComponentProps: T;
  restaurantPageStyle?: boolean;
}

const Card = <T extends JSX.IntrinsicAttributes>({
  image,
  title,
  BottomComponent,
  bottomComponentProps,
  restaurantPageStyle = false,
}: CardProps<T>) => {
  return (
    <StyledCardContainer restaurantPageStyle={restaurantPageStyle}>
      <StyledCardImgContainer>
        <StyledCardImg
          src={image}
          alt={title}
          restaurantPageStyle={restaurantPageStyle}
        />
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
