import styled from "styled-components";
import Image from "next/image";

const Recipe = ({ title, image, ingredients }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
export default Recipe;

/*
<Image src={image} alt={title} height={144} width={144} />
ol>
        {ingredients.map((ingredient) => (
          <li key={id}>{ingredients.text}</li>
        ))}
      </ol> */
