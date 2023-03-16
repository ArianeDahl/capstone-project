import styled from "styled-components";

const Recipe = ({ title, image, ingredients }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>{ingredients}</ul>
    </>
  );
};
