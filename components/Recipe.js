import styled from "styled-components";
import Image from "next/image";

const Recipe = ({ title, image, ingredients, id }) => {
  return (
    <RecipeContainer>
      <Title>{title}</Title>
      <Image src={image} alt={title} height={144} width={144} />
      <ul>
        {ingredients.map((ingredient) => (
          <li key={id}>{ingredients.text}</li>
        ))}
      </ul>
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

/*

ol>
        {ingredients.map((ingredient) => (
          <li key={id}>{ingredients.text}</li>
        ))}
      </ol> 

const IngredientsList = styled.ul`
  margin-top: 1rem;
  padding-left: 0;
  list-style-type: none;
`;


      
      <IngredientsList>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </IngredientsList>
    

      */
