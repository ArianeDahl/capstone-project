import styled from "styled-components";
import Image from "next/image";

const Recipe = ({ title, image, ingredients, label }) => {
  const ingredientsWithId = ingredients.map((ingredient, index) => ({
    ...ingredient,
    id: index + 1,
  }));
  return (
    <RecipeContainer>
      <Title>{title}</Title>
      <Image src={image} alt={title} height={200} width={200} />
      <IngredientsList>
        {ingredientsWithId.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.text}</li>
        ))}
      </IngredientsList>
    </RecipeContainer>
  );
};
export default Recipe;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  color: darkgreen;
`;

const IngredientsList = styled.ul`
  margin-top: 1rem;
  padding-left: 0;
  list-style-type: none;
`;
