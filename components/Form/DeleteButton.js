import styled from "styled-components";

export const DeleteButton = styled.button`

border: 2px solid;
border-radius: 3px;
color: black;
font-size: 1em;
background-color: #b07598;
transition: all 0.2s ease-in-out;
cursor: pointer;

&:hover {
  background-color: grey;
  color: white;
`;
/**onClick={() => handleDelete(comment.id)} */
