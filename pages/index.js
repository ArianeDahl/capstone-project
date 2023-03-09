import Header from "@/components/Header";
import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <MainContainer>
        <>
          <Header />
          <h2>Seasonal dishes made easy!</h2>
          <p>See what fruits & vegetables are in season this month:</p>
          <LinkWrapper>
            <Link href="/fruits">
              <StyledLink>Fruits</StyledLink>
            </Link>
            <Link href="/vegetables">
              <StyledLink>Veggies</StyledLink>
            </Link>
          </LinkWrapper>
        </>
      </MainContainer>
    </main>
  );
}

const MainContainer = styled.main`
  background-color: #f2f2f2;
  padding: 20px;
`;

const Heading = styled.h2`
  color: #333;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledLink = styled.a`
  display: block;
  width: 150px;
  margin: 10px 0;
  padding: 10px;
  text-align: center;
  border: 2px solid #333;
  border-radius: 5px;
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: italic;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
    color: #fff;
  }
`;
