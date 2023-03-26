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
