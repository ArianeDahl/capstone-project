import styled from "styled-components";

const ButtonContainer = styled.button`
margin: 10px;
padding: 20px;
border-radius: 4px;
display: flex;

justify-content: center;


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
padding: 10px;
`;

export default function VeggieButton() {
return (
    <CenteredContainer>
    <ButtonContainer>
   Veggies
    </ButtonContainer>
    </CenteredContainer>
)
}
