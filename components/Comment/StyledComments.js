import styled from "styled-components";

export const CommentContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 30px 20px;
  background-color: #f4f4f4;
  border-radius: 5px;
`;

export const TitleContainer = styled.div`
  background-color: #b76e79;
  border-radius: 5px;
  margin: 20px;
  padding: 5px;
`;

export const CommentTitle = styled.h3`
  color: #f4f4f4;
  font-weight: 400;
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 10px;
`;

export const DeleteButton = styled.button`

border: 2px solid #b76e79;
border-radius: 5px;
color: #f4f4f4;
font-size: 1em;
background-color: #b76e79;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
  background-color: #f4f4f4;
  color: #b76e79;
  font-weight: 600;
`;

export const CommentWrapper = styled.div`
  font-weight: 400;
  color: #313c48;
  margin-top: 40px;
`;

export const CommentItem = styled.li`
  margin: 10px;
  padding: 10px;
  border: solid 5px;
  border-color: #b0757e;
  border-radius: 10px;
  background-color: #f4e6e7;
  position: relative;

  & > ${DeleteButton} {
    position: absolute;
    top: 15px;
    left: 15px;
`;
