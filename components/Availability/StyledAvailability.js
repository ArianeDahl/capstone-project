import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  background-color: #f0f0f0;
  position: absolute;
  bottom: 104px;
  top: 120px;
  text-align: center;
`;

export const TitleAvailability = styled.h2`
  margin: 30px 0 20px;
  padding: 20px;
  font-weight: 500;
  color: #5d9b9b;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e4eeee;
  box-shadow: 0 0 28px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #e6d9d9;
  }
`;

export const ListAvailability = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
  margin-bottom: 10px;
  padding-bottom: 110px;
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
