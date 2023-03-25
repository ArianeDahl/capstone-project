import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import {
  FormContainer,
  FormButton,
  FormField,
  FormTitle,
  SytledInput,
  StyledLabel,
  SytledRange,
} from "./StyledForm";

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
