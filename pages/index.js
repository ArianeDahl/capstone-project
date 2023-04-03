import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <StyledMainContainer>
        <StyledHeading>Seasonal dishes made easy!</StyledHeading>
        <StyledParagraph>
          Check out which fruits & vegetables are in season this month:
        </StyledParagraph>
        <StyledLinkWrapper aria-label="Seasonal fruits and vegetables">
          <StyledLink href="/fruits" aria-label="Seasonal fruits">
            Fruits
          </StyledLink>
          <StyledLink href="/vegetables" aria-label="Seasonal vegetables">
            Veggies
          </StyledLink>
        </StyledLinkWrapper>
      </StyledMainContainer>
    </>
  );
}

const StyledMainContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 50px;
  position: relative;
  text-align: center;
`;

const StyledHeading = styled.h2`
  color: #1f3a3d;
  margin: 10px;
  padding: 20px;
  font-weight: 500;
`;

const StyledParagraph = styled.p`
  margin: 10px 40px;
  padding: 10px;
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 9rem;
  margin: 25px;
  padding: 15px;
  text-align: center;
  border: 2px solid #1a6d72;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  background-color: #5d9b9b;
  color: #313c48;

  &:hover {
    background-color: #1a6d72;
    color: #ddebec;
  }
`;
