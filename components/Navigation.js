import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { GrHome, GrPrevious, GrRaspberry } from "react-icons/gr";
import { TbCarrot } from "react-icons/tb";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <NavBar>
        <StyledList>
          <ItemWrapper>
            <li>
              <IconLink onClick={() => router.back()}>
                <GrPrevious style={{ color: "black" }} />
              </IconLink>
            </li>
          </ItemWrapper>
          <li>
            <StyledLink href="/">
              <GrHome style={{ color: "black" }} />
            </StyledLink>{" "}
          </li>
          <li>
            <StyledLink href="/fruits">
              <GrRaspberry style={{ color: "black" }} />
            </StyledLink>{" "}
          </li>
          <li>
            <StyledLink href="/vegetables">
              <TbCarrot style={{ color: "black" }} />
            </StyledLink>{" "}
          </li>
        </StyledList>
      </NavBar>
    </>
  );
}

const IconLink = styled.a`
  font-size: 2rem;
  margin: 0.5rem;
  padding: 1rem;
  cursor: pointer;
`;

const NavBar = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  background: #5d9b9b;
  padding: 0px;
`;

const ItemWrapper = styled.div`
  /* background-color: white; */
  border: solid 2px black;
  padding: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 15px 0px;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  margin: 0.5rem;
  padding: 1rem;
  cursor: pointer;

  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: white;
  }
`;
