import styled from "styled-components";
import { DeleteButton } from "./DeleteButton";

export const CommentContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px 15px;
  padding-bottom: 20px;
  background-color: #f4e6e7;
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

export const CommentItem = styled.li`
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
