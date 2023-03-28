import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import validateForm from "./ValidateForm";
import { uid } from "uid";
import {
  FormContainer,
  FormColumn,
  FormButton,
  FormField,
  FormTitle,
  SytledInput,
  StyledLabel,
  SytledRange,
  FormMessage,
} from "./StyledForm";

export default function Form({
  recipeSlug /* dataForm={dataForm} setDataForm={setDataForm}*/,
}) {
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [taste, setTaste] = useState(0);
  const [level, setLevel] = useState(0);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uid();
    const resultError = validateForm({ userName, message });

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    setUserName("");
    setMessage("");
    setError(null);
    setSuccess(`Comment submitted succesfully!`);

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
        <FormTitle>Leave a comment here:</FormTitle>
        <FormColumn>
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
              rows={4}
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
          {error && (
            <FormMessage initial="hidden" error>
              {error}
            </FormMessage>
          )}
          {success && <FormMessage initial="hidden">{success}</FormMessage>}
        </FormColumn>
      </FormContainer>
    </>
  );
}
