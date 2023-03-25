import styled from "styled-components";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const FormTitle = styled.h3`
  font-size: 1, 5rem;
  margin-bottom: 30px;
  color: #9d4e5a;
`;

const FormField = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #fbeed9;
  padding: 20px;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 1rem;
  color: #575d57;
`;

const SytledInput = styled.input`
  border-radius: 5px;
  border: 1px solid #b76e79;
  padding: 0.5rem;
  font-size: 1rem;
`;
const SytledRange = styled.input`

&::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background-color: #green;
  border-radius: 50%;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    background-color: #9d4e5a;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const FormButton = styled.button`
  color: black;
  background-color: #b76e79;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: papayawhip;
    color: white;
  }
`;

export default function Form() {
  const [comments, setComments] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uid();

    const newComment = {
      id: uid(),
      recipe: event.target.elements.recipe.value,
      name: event.target.elements.name.value,
      comment: event.target.elements.comment.value,
      taste: event.target.elements.taste.value,
      level: event.target.elements.level.value,
    };

    //Immutability principle -> need to create new array with updated comments
    setComments([...comments, newComment]);
    //save comments to local storage
    localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
    //clear form
    event.target.reset();
  };

  // display comments
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  return (
    <>
      <FormContainer>
        <FormTitle>You may leave a comment here:</FormTitle>
        <form action="/api/form" method="post" onSubmit={handleSubmit}>
          <FormField>
            <StyledLabel htmlFor="name">Your name:</StyledLabel>
            <SytledInput
              type="text"
              id="name"
              name="name"
              minLength="2"
              maxLength="20"
              required
            />
          </FormField>
          <FormField>
            <StyledLabel htmlFor="comment">Your comment:</StyledLabel>
            <SytledInput
              type="text"
              id="comment"
              name="comment"
              minLength="3"
              maxLength="200"
              required
            />
          </FormField>
          <FormField>
            <StyledLabel htmlFor="taste">Taste</StyledLabel>
            <SytledRange
              type="range"
              id="taste"
              name="taste"
              min="0"
              max="10"
              step="1"
            />
          </FormField>
          <FormField>
            <StyledLabel htmlFor="level">Difficulty level</StyledLabel>
            <SytledRange
              type="range"
              id="level"
              name="level"
              min="0"
              max="10"
              step="1"
            />
          </FormField>
          <FormButton type="submit">Submit</FormButton>
        </form>
      </FormContainer>
    </>
  );
}
