import { useState, useEffect } from "react";
import {
  CommentContainer,
  CommentList,
  CommentItem,
  TitleContainer,
  DeleteButton,
} from "./StyledComments";

export default function CommentSection({ slug }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);
  // display comments for selected recipe only
  const filteredComments = comments.filter((comment) => comment.slug === slug);

  return (
    <>
      <CommentContainer>
        <TitleContainer>
          <h3>Comments:</h3>
        </TitleContainer>
        <CommentList>
          {filteredComments.map((comment) => (
            <CommentItem key={comment.id}>
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
