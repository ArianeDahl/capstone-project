import styled from "styled-components";

export default function Form() {
  return (
    <>
      <FormContainer>
        <p>You may leave a comment here:</p>
        <form action="/api/form" method="post">
          <FormField>
            <label htmlFor="recipe">Recipe:</label>
            <input
              type="text"
              id="recipe"
              name="recipe"
              minLength="5"
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

const FormButton = styled.button`
  color: black;
  background-color: darkgreen;
  border: none;
  padding: 0, 5rem 1 rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
