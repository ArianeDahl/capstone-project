import styled from "styled-components";
import Image from "next/image";
import BackButton from "../Buttons/BackButton";

const Recipe = ({ title, image, ingredients }) => {
  const ingredientsWithId = ingredients?.map((ingredient, index) => ({
    ...ingredient,
    id: index + 1,
  }));
  return (
    <>
      <RecipeContainer>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeImage src={image} alt={title} height={200} width={200} />
        <IngredientsTitle>Ingredients:</IngredientsTitle>
        <IngredientsList>
          {ingredientsWithId?.map((ingredient) => (
            <IngredientItems key={ingredient.id}>
              {ingredient.text}
            </IngredientItems>
          ))}
        </IngredientsList>
        <BackButton />
      </RecipeContainer>
    </>
  );
};
export default Recipe;

const RecipeContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background: #e4eeee;
  box-shadow: 0px 5px 15px #474745;
`;

const RecipeTitle = styled.h2`
  padding: 20px;
  margin: 20px;
  color: #5d9b9b;
  font-weight: 500;
`;

const RecipeImage = styled(Image)`
  border-radius: 5px;
  box-shadow: 0px 5px 10px #4a7c7c;
  margin: 20px 0;
`;
const IngredientsTitle = styled.h3`
  padding: 10px;
  margin: 20px 10px 0;
  text-decoration: none;
  font-weight: 500;
  color: #313c48;
`;

const IngredientsList = styled.ul`
  margin: 10px;
  padding: 20px;
  list-style-type: none;
`;

const IngredientItems = styled.li`
  color: #313c48;
  font-weight: 400;
`;
