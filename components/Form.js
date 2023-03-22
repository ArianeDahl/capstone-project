import styled from "styled-components";

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
  return (
    <>
      <FormContainer>
        <FormTitle>You may leave a comment here:</FormTitle>
        <form action="/api/form" method="post">
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
