import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ArtPieceDetailPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const [currentPiece, setCurrentPiece] = useState(null);

  useEffect(() => {
    setCurrentPiece(pieces.find((piece) => piece.slug === slug));
  }, [setCurrentPiece, pieces, slug]);

  if (!currentPiece) {
    return null;
  }

  const findFavoritePiece = artPiecesInfo.find(
    (piece) => piece.slug === currentPiece.slug
  )?.isFavorite;

  return (
    <>
      <ArtPieceDetails
        piece={currentPiece}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={() => onToggleFavorite(currentPiece.slug)}
        isFavorite={findFavoritePiece}
      ></ArtPieceDetails>
    </>
  );
}
