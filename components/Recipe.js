import styled from "styled-components";
import Image from "next/image";

const Recipe = ({ title, image, ingredients }) => {
  const ingredientsWithId = ingredients.map((ingredient, index) => ({
    ...ingredient,
    id: index + 1,
  }));
  return (
    <RecipeContainer>
      <RecipeTitle>{title}</RecipeTitle>
      <Image src={image} alt={title} height={200} width={200} />
      <Title>Ingredients:</Title>
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

const RecipeTitle = styled.h2`
  color: black;
  margin: 20px;
  padding: 20px;
`;
const Title = styled.h3`
  padding: 20px;
  margin: 20px;
  margin-bottom: 0px;
`;

const IngredientsList = styled.ul`
  margin-top: 1rem;
  padding-left: 0;
  list-style-type: none;
`;
