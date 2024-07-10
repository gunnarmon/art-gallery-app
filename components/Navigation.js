import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <hr></hr>
      <StyledNav>
        <StyledList>
          <li>
            <StyledLink href={"/"}>| Spotlight |</StyledLink>
          </li>
          <li>
            <StyledLink href={"/art-pieces"}>| Art Pieces |</StyledLink>
          </li>
          <li>
            <StyledLink href={"/favorites"}>| Favorites |</StyledLink>
          </li>
        </StyledList>
      </StyledNav>
    </>
  );
}

const StyledNav = styled.nav`
  width: 100%;
  height: 4rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: lightgray;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
