import styled from "styled-components";
import ArtPiecesPreview from "../ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  return (
    <StyledList>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            title={piece.name}
            artist={piece.artist}
            image={piece.imageSource}
          />
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
