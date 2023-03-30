import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

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

export default function Form({ setDataForm, recipeSlug }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uid();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // add unique id and recipe ID so that comment appears on selected recipe only
    const newComment = {
      ...data,
      id: uid(),
      recipeSlug: recipeSlug,
      timestamp: new Date().toLocaleDateString("de-DE"),
    };
    // add comment
    setDataForm((prevDataForm) => {
      if (!prevDataForm[0]) {
        return [{ ...newComment }];
      }
      return [{ ...newComment }, ...prevDataForm];
    });

    setSuccess(`Comment submitted succesfully!`);
    // message disappears after 2 sec
    setTimeout(() => setSuccess(null), 2000);
    event.target.reset();
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>You may leave a comment here:</FormTitle>
        <FormColumn>
          <FormField>
            <StyledLabel htmlFor="userName">Your name:</StyledLabel>
            <SytledInput
              type="text"
              id="userName"
              name="userName"
              minLength="2"
              maxLength="20"
              placeholder="Enter your name"
              required
            />
          </FormField>
          <FormField>
            <StyledLabel htmlFor="message">Comment:</StyledLabel>
            <SytledInput
              type="text"
              id="message"
              name="message"
              minLength="3"
              maxLength="200"
              rows={4}
              placeholder="Enter your comment"
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
          {error && (
            <FormMessage initial="hidden" error>
              {error}
            </FormMessage>
          )}
          {success && <FormMessage initial="hidden">{success}</FormMessage>}
          <FormButton type="submit">Submit</FormButton>
        </FormColumn>
      </FormContainer>
    </>
  );
}
