import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
//import { uid } from "uid";
import {
  FormContainer,
  FormButton,
  FormField,
  FormTitle,
  SytledInput,
  StyledLabel,
  SytledRange,
} from "./StyledForm";

let nextId = 0;

export default function Form({ slug }) {
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  //const [taste, setTaste] = useState(5);
  //const [level, setLevel] = useState(5);

  const handleSubmit = (event) => {
    event.preventDefault();
    //const id = uid();

    const newComment = {
      id: nextId++,
      userName,
      message,
      taste,
      level,
      timestamp: Date.now().toLocaleString(),
      slug,
    };

    setComments([...comments, newComment]);
    // const comments = JSON.parse(localStorage.getItem("comments")) || [];
    //save comments to local storage
    localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
    //clear form
    console.log(comments);
    event.target.reset();
  };

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  return (
    <>
      <FormContainer>
        <div>
          <FormTitle>You may leave a comment here:</FormTitle>
          <FormField onSubmit={handleSubmit}>
            <StyledLabel htmlFor="userName">Your name:</StyledLabel>
            <SytledInput
              type="text"
              id="userName"
              name="userName"
              minLength="2"
              maxLength="20"
              required
              onChange={(event) => setUserName(event.target.value)}
            />
          </FormField>
          <FormField>
            <StyledLabel htmlFor="message">Your comment:</StyledLabel>
            <SytledInput
              type="text"
              id="message"
              name="message"
              minLength="3"
              maxLength="200"
              onChange={(event) => setComment(event.target.value)}
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
        </div>
      </FormContainer>
    </>
  );
}
