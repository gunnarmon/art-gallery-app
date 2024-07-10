import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <StyledList>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecePreview
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
              image={piece.imageSource}
            />
          </Link>
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
