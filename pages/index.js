import Header from "@/components/Header";
import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <Greeting>Seasonal dishes made easy!</Greeting>
        <StyledParagraph>
          Check out which fruits & vegetables are in season this month:
        </StyledParagraph>
        <LinkWrapper>
          <StyledLink href="/fruits">Fruits</StyledLink>
          <StyledLink href="/vegetables">Veggies</StyledLink>
        </LinkWrapper>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  background-color: #f2f2f2;
  padding: 20px;
  position: relative;
`;

const Greeting = styled.h2`
  color: #1f3a3d;
  margin: 30px;
  padding: 20px;
`;

const StyledParagraph = styled.p`
  margin: 10px 40px;
  padding: 0px;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const StyledLink = styled(Link)`
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
`;
