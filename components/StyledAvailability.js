import styled from "styled-components";

export const TitleAvailability = styled.h2`
  margin: 30px 10px 20px 10px;
  padding: 20px;
`;

export const Container = styled.div`
  justify-content: center;
  padding: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    background-color: #e6d9d9;
  }
`;

export const ListAvailability = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
`;

export const ListTitle = styled.h3`
  /* font-size: 18px;   */
  font-weight: bold;
  margin-right: 10px;
`;

export const StyledLink = styled.a`
  margin: 20px;
  text-decoration: none;
  color: inherit;
`;
