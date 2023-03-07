import styled from "styled-components";

const ButtonComponent = styled.button`
  margin: 20px;
  padding: 20px;
  border-radius: 4px;

  justify-content: center;
  display: flex;

  :hover {
    cursor: pointer;
    background-color: rgb(255, 243, 230);
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  padding: 20px;
`;

export default function FruitButton() {
  return (
    <CenteredContainer>
      <ButtonComponent>Fruits</ButtonComponent>
    </CenteredContainer>
  );
}
