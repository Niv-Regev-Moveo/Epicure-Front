import Card from "../Card/Card";
import { CardsDisplayContainer } from "./styles";

// interface CardsDisplayProps {
//   card: JSX.Element;
// }

const CardsDisplay = () => {
  return (
    <CardsDisplayContainer>
      <Card title={"hello"} image={""} />
      <Card title={""} image={""} />
      <Card title={""} image={""} />
    </CardsDisplayContainer>
  );
};

export default CardsDisplay;
