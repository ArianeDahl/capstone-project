import { useState, useEffect } from "react";
import {
  CommentContainer,
  CommentList,
  CommentItem,
  TitleContainer,
  DeleteButton,
} from "./StyledComments";

export default function CommentSection({ recipeSlug }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);
  // display comments for selected recipe only
  const filteredComments = comments.filter(
    (comment) => comment.recipeSlug === recipeSlug
  );

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
          {filteredComments.map((comment) => (
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

/*
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
