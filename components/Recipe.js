import styled from "styled-components";
import Image from "next/image";

const Recipe = ({ title, image, ingredients }) => {
  const ingredientsWithId = ingredients?.map((ingredient, index) => ({
    ...ingredient,
    id: index + 1,
  }));
  return (
    <RecipeContainer>
      <RecipeTitle>{title}</RecipeTitle>
      <Image src={image} alt={title} height={200} width={200} />
      <Title>Ingredients:</Title>
      <IngredientsList>
        {ingredientsWithId?.map((ingredient) => (
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
  margin-bottom: 10px;
`;

const RecipeTitle = styled.h2`
  color: #b76e79;
  margin: 20px;
  padding: 20px;
`;
const Title = styled.h3`
  padding: 20px 10px 0px 10px;
  margin: 30px 10px 10px 10px;
  text-decoration: underline;
`;

const IngredientsList = styled.ul`
  margin-: 10px;
  padding: 10px;
  list-style-type: none;
`;
