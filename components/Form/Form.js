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

export default function Form({ recipeSlug, onAddComment }) {
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [taste, setTaste] = useState(5);
  const [level, setLevel] = useState(5);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uid();
    const resultError = null;

    if (resultError !== null) {
      setError(resultError);
    }

    // setSuccess("Comment submitted successfully!");

    const newComment = {
      id: uid(),
      userName,
      message,
      taste,
      level,
      recipeSlug,
      timestamp: new Date().toLocaleDateString("de-DE"),
    };
    //   Update the comments state in the CommentSection component
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    //save comments to local storage
    localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
    setComments([...comments, newComment]);
    //clear form

    event.target.reset();
  };
  // display submitted comments
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <div>
          <FormTitle>Leave a comment here:</FormTitle>
          <FormField>
            <StyledLabel htmlFor="userName">Your name:</StyledLabel>
            <SytledInput
              type="text"
              id="userName"
              name="userName"
              value={userName}
              minLength="2"
              maxLength="20"
              placeholder="Enter your name"
              required
              onChange={(event) => setUserName(event.target.value)}
            />
          </FormField>
          <FormField>
            <StyledLabel htmlFor="message">Comment:</StyledLabel>
            <SytledInput
              type="text"
              id="message"
              name="message"
              value={message}
              minLength="3"
              maxLength="200"
              placeholder="Enter your comment"
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </FormField>
          <FormField>
            <StyledLabel htmlFor="taste">Taste</StyledLabel>
            <SytledRange
              type="range"
              id="taste"
              name="taste"
              value={taste}
              min="0"
              max="10"
              step="1"
              onChange={(event) => setTaste(event.target.value)}
            />
          </FormField>
          <FormField>
            <StyledLabel htmlFor="level">Difficulty level</StyledLabel>
            <SytledRange
              type="range"
              id="level"
              name="level"
              value={level}
              min="0"
              max="10"
              step="1"
              onChange={(event) => setLevel(event.target.value)}
            />
          </FormField>
          <FormButton type="submit">Submit</FormButton>
        </div>
      </FormContainer>
    </>
  );
}
