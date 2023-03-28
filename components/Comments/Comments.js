import { useState, useEffect } from "react";
import {
  CommentContainer,
  CommentList,
  CommentItem,
  TitleContainer,
  DeleteButton,
} from "./StyledComments";

export default function CommentSection({ dataForm, setDataForm, recipeSlug }) {
  const filteredComments = dataForm.filter(
    (comment) => comment.recipeSlug === recipeSlug
  );

  const handleDelete = (id) => {
    setDataForm(dataForm.filter((comment) => comment.id !== id));
    alert("Comment will be deleted.");
  };

  return (
    <>
      <CommentContainer>
        <TitleContainer>
          <h3>Comments:</h3>
        </TitleContainer>
        <CommentList>
          {filteredComments.map((comment) => (
            <CommentItem key={comment.id}>
              <DeleteButton onClick={() => handleDelete(comment.id)}>
                x
              </DeleteButton>
              <p>
                <strong>Name:</strong> {comment.userName}
              </p>
              <h4>Comment:</h4>
              <p>{comment.message}</p>
              <p>
                <strong>Taste:</strong> {comment.taste}
              </p>
              <p>
                <strong>Difficulty Level:</strong> {comment.level}
              </p>
              <p>
                <small>{comment.timestamp}</small>
              </p>
            </CommentItem>
          ))}
        </CommentList>
      </CommentContainer>
    </>
  );
}
