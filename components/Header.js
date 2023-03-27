import styled from "styled-components";

const HeadContainer = styled.div`
  text-align: center;
  background: #5d9b9b;
  padding: 10px;
`;
// #21888f  #489186  #5d9b9b
const Title = styled.h1`
  color: #313c48;
  padding: 10px;
  margim: 20px;
`;

const Paragraph = styled.p`
  color: black;
  text-align: right;
  padding: 5px;
  margin: 20px;
`;

export default function Header() {
  return (
    <>
      <HeadContainer>
        <Title>Seasony</Title>
      </HeadContainer>
    </>
  );
}
