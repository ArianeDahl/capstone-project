import styled from "styled-components";
import Image from "next/image";

const Recipe = ({ title, image, ingredients }) => {
  return (
    <RecipeContainer>
      <h1>{title}</h1>
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

/*

ol>
        {ingredients.map((ingredient) => (
          <li key={id}>{ingredients.text}</li>
        ))}
      </ol> 
      

      <Image src={image} alt={title} height={144} width={144} /


const IngredientsList = styled.ul`
  margin-top: 1rem;
  padding-left: 0;
  list-style-type: none;
`;

const Recipe = ({ title, image, ingredients }) => {
  return (
    <RecipeContainer>
      <h1>{title}</h1>
      <Image src={image} alt={title} height={144} width={144} />
      <IngredientsList>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </IngredientsList>
    </RecipeContainer>
  );
};

export default Recipe;

      */
