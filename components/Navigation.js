import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { GrRaspberry, GrFavorite } from "react-icons/gr";
import { TbCarrot } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { HiArrowLeft } from "react-icons/hi";

export default function Navigation() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
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
          <li>
            <StyledLink href="/favorites">
              <GrFavorite
                style={{
                  color: isActive("/favorites") ? "#f4f4f4" : "#1f3a3d",
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
  padding: 5px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  align-items: space-between;

  margin: 5px;
  padding: 5px;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  margin: 10px;
  padding: 10px;
  cursor: pointer;

  &:active {
    color: white;
  }
  }
`;

const IconLink = styled.a`
  font-size: 2rem;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  color: #313c48

  &:active {
    color: white;
  }
`;
