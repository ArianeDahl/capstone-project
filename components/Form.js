import styled from "styled-components";
import { useState } from "react";

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
  const [comment, setComment] = useState("");

  const endpoint = "/api/form"; //API endpoint where we send form data
  /*
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setComments(result);
  };
*/
  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = {
      recipe: event.target.recipe.value,
      name: event.target.name.value,
      comment: event.target.comment.value,
    };
    const JSONdata = JSON.stringify(dataForm); //send data to server in JSON format

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata, //JSON data we send above
    };
    const response = await fetch(endpoint, options); //send the form data to API and Vercel and get a response
    const result = await response.json(); //convert response it into json
    setComment(result);
    console.log(result);
  };
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(dataForm);
  localStorage.setItem("comments", JSON.stringify(comments));

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
    </>
  );
}
