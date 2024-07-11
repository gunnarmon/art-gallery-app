import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <StyledList>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            image={piece.imageSource}
            isFavorite={
              artPiecesInfo.find((artPiece) => artPiece.slug === piece.slug)
                ?.isFavorite
            }
            onToggleFavorite={() => onToggleFavorite(piece.slug)}
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
