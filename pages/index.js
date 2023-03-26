import Header from "@/components/Header";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        {/* <div>
          <Image
            alt="Homepage"
            src="/homepage.jpg"
            sizes="100vw"
            layout="fill"
            quality={100}
            style={{ objectFit: "cover", zIndex: -1 }}
          />
        </div> */}
        <h2>Seasonal dishes made easy!</h2>
        <p>See what fruits & vegetables are in season this month:</p>
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

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
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
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
    color: #fff;
  }
`;
