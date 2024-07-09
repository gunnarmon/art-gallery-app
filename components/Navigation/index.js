import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <hr></hr>
      <nav>
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
      </nav>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
