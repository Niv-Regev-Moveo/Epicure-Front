import FullStar from "../assets/Photos/Star.png";
import EmptyStar from "../assets/Photos/EmptyStar.png";

const getStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: fullStars }, (_, index) => (
        <img
          key={index}
          src={FullStar}
          alt="Full Star"
          width="40"
          height="40"
        />
      ))}
      {Array.from({ length: emptyStars }, (_, index) => (
        <img
          key={index}
          src={EmptyStar}
          alt="Empty Star"
          width="40"
          height="40"
        />
      ))}
    </div>
  );
};

export default getStars;
