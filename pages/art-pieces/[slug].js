import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentPiece = pieces.find((piece) => piece.slug === slug);

  if (!currentPiece) {
    return null;
  }

  return (
    <>
      <ArtPieceDetails pieces={currentPiece}></ArtPieceDetails>
    </>
  );
}
