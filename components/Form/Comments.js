import styled from "styled-components";
import { useState, useEffect } from "react";
import { DeleteButton } from "./DeleteButton";

const CommentContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px 15px;
  padding-bottom: 20px;
  background-color: #f4e6e7;
`;

const TitleContainer = styled.div`
  background-color: #b76e79;
  margin: 10px;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
`;

const CommentItem = styled.li`
  margin: 10px;
  padding: 10px;
  border: double 5px;
  border-color: #b0757e;

  position: relative;

  & > ${DeleteButton} {
    position: absolute;
    top: 10px;
    left: 10px;
`;

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

  return (
    <>
      <CommentContainer>
        <TitleContainer>
          <h3>Comments:</h3>
        </TitleContainer>
        <CommentList>
          {comments.map((comment) => (
            <CommentItem key={comment.id}>
              <DeleteButton>x</DeleteButton>
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
