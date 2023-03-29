import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  position: absolute;
  bottom: 104px;
  top: 120px;
`;

export const TitleAvailability = styled.h2`
  margin: 30px 10px 20px 10px;
  padding: 20px;
  font-weight: 500;
  color: #5d9b9b;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e4eeee;
  border: 1px solid #ccc;
  border-radius: 10px;
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
  margin-bottom: 40px;
  padding-bottom: 30px;
`;

export const ListTitle = styled.h3`
  font-weight: 400;
  margin-right: 10px;
  margin-left: 20px;
  color: #313c48;
`;

export const StyledLink = styled.a`
  margin: 20px;
  text-decoration: none;
  color: inherit;
`;
