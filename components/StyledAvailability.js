import styled from "styled-components";

export const TitleAvailability = styled.h2`
  margin: 30px 10px 20px 10px;
  padding: 20px;
`;

export const Container = styled.div`
  justify-content: center;
`;

export const ListItem = styled.li`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: papayawhip;
  }
`;

export const ListAvailability = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
`;

export const ListTitle = styled.h3`
  margin: 10px;
  font-weight: bold;
`;

/**  EXAMPLE for styled LINK
 * 
 *const StyledLink = styled(Link)`
  display: block;
  width: 150px;
  margin: 20px;
  padding: 10px;
  text-align: center;
  border: 2px solid #333;
  border-radius: 5px;
  background-color: #1a6d72;
  color: #ddebec;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #379ea5;
    color: #333;
  }
 */
