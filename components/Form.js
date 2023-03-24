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
  margin-bottom: 1rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;

  input[type="text"],
  input[type="range"] {
    border-radius: 4px;
    border: 1px solid #b76e79;
    padding: 0.5rem;
    font-size: 1rem;
    width: 100%;
  }
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
`;

const FormButton = styled.button`
  color: black;
  background-color: #b76e79;
  border: none;
  border-radius: 4px;
  padding: 5px;
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

    //const newComment = { recipe, name, comment, taste, level, id };
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
            <label htmlFor="recipe">Recipe:</label>
            <input
              type="text"
              id="recipe"
              name="recipe"
              minLength="3"
              maxLength="30"
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="name">Your name:</label>
            <input
              type="text"
              id="name"
              name="name"
              minLength="2"
              maxLength="20"
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="comment">Your comment:</label>
            <input
              type="text"
              id="comment"
              name="comment"
              minLength="3"
              maxLength="200"
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="taste">Taste</label>
            <input
              type="range"
              id="taste"
              name="taste"
              min="0"
              max="100"
              step="10"
            />
          </FormField>
          <FormField>
            <label htmlFor="level">Difficulty level</label>
            <input
              type="range"
              id="level"
              name="level"
              min="0"
              max="100"
              step="10"
            />
          </FormField>
          <FormButton type="submit">Submit</FormButton>
        </form>
      </FormContainer>

      {/* <CommentList>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.recipe} {comment.name}
            {comment.comment}
          </li>
        ))}
      </CommentList> */}
    </>
  );
}
