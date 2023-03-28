import styled from "styled-components";

export const CommentContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  padding-bottom: 20px;
  background-color: #f4f4f4;
`;

export const TitleContainer = styled.div`
  background-color: #b76e79;
  margin: 10px;
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
`;

export const DeleteButton = styled.button`

border: 2px solid #b76e79;
border-radius: 3px;
color: #f4f4f4;
font-size: 1em;
background-color: #b76e79;
transition: all 0.2s ease-in-out;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
  background-color: grey;
  color: white;
`;

export const CommentItem = styled.li`
  margin: 10px;
  padding: 10px;
  border: solid 5px;
  border-color: #b0757e;
  background-color: #f4e6e7;
  position: relative;

  & > ${DeleteButton} {
    position: absolute;
    top: 10px;
    left: 10px;
`;
