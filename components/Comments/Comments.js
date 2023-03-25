import styled from "styled-components";
import { useState, useEffect } from "react";
import { DeleteButton } from "./DeleteButton";
import {
  CommentContainer,
  CommentList,
  CommentItem,
  TitleContainer,
} from "./StyledComments";

export default function CommentSection() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);
  /*
  const filteredComments = comments.filter(
    (comment) => comment.recipeSlug === recipe.slug
  );
*/
  const handleDelete = (id) => {
    const newComments = comments.filter((comment) => comment.id !== id);
    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
  };

  return (
    <>
      <CommentContainer>
        <TitleContainer>
          <h3>Comments:</h3>
        </TitleContainer>
        <CommentList>
          {comments.map((comment) => (
            <CommentItem key={comment.id}>
              <DeleteButton onClick={() => handleDelete(comment.id)}>
                x
              </DeleteButton>
              <p>
                <strong>Name:</strong> {comment.name}
              </p>
              <h4>Comment:</h4>
              <p>{comment.comment}</p>
              <p>
                <strong>Taste:</strong> {comment.taste}
              </p>
              <p>
                <strong>Difficulty Level:</strong> {comment.level}
              </p>
            </CommentItem>
          ))}
        </CommentList>
      </CommentContainer>
    </>
  );
}

/*
<DeleteButton onClick={() => handleDelete(comment.id)}>
                    Delete
                  </DeleteButton>

<CommentItem key={comment.id} style={{ display: "flex", alignItems: "flex-start" }}>
  <DeleteButton>x</DeleteButton>
  <div>
    <h4>Name:</h4>
    <p>{comment.name}</p>
    <h4>Comment:</h4>
    <p>{comment.comment}</p>
    <h4>Taste:</h4>
    <p>{comment.taste}</p>
    <h4>Difficulty Level:</h4>
    <p>{comment.level}</p>
  </div>
</CommentItem>
*/
