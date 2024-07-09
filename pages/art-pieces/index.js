import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesList({ pieces }) {
  return (
    <>
      <h1>ART GALLERY</h1>
      <h2>Art Pieces:</h2>
      <ArtPieces pieces={pieces}></ArtPieces>
    </>
  );
}
