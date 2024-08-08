import React, { useState } from "react";
import { StyledCategoriesBarContainer, StyledCategory } from "./styles";

interface CategoriesProps {
  categories: string[];
}

const CategoriesBar: React.FC<CategoriesProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <StyledCategoriesBarContainer>
      {categories.map((category, index) => (
        <StyledCategory
          key={index}
          onClick={() => handleCategoryClick(category)}
          isSelected={selectedCategory === category}
        >
          {category}
        </StyledCategory>
      ))}
    </StyledCategoriesBarContainer>
  );
};

export default CategoriesBar;
