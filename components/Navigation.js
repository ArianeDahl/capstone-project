import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { GrHome, GrPrevious, GrRaspberry } from "react-icons/gr";
import { TbCarrot } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { GrLinkPrevious } from "react-icons/gr";
import { HiArrowLeft } from "react-icons/hi";

export default function Navigation() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  console.log(router.pathname);
  return (
    <>
      <NavBar>
        <StyledList>
          <li>
            <IconLink onClick={() => router.back()}>
              <HiArrowLeft />
            </IconLink>
          </li>

          <li>
            <StyledLink href="/">
              <AiOutlineHome
                style={{ color: isActive("/") ? "#f4f4f4" : "#1f3a3d" }}
              />
            </StyledLink>{" "}
          </li>
          <li>
            <StyledLink href="/fruits">
              <GrRaspberry
                style={{ color: isActive("/fruits") ? "#f4f4f4" : "#1f3a3d" }}
              />
            </StyledLink>{" "}
          </li>
          <li>
            <StyledLink href="/vegetables">
              <TbCarrot
                style={{
                  color: isActive("/vegetables") ? "#f4f4f4" : "#1f3a3d",
                }}
              />
            </StyledLink>{" "}
          </li>
        </StyledList>
      </NavBar>
    </>
  );
}

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
  }
`;

const IconLink = styled.a`
  font-size: 2rem;
  margin: 0.5rem;
  padding: 1rem;
  cursor: pointer;

  &:active {
    color: white;
  }
`;
