import Image from "next/image";

export default function ArtPieceDetails({ pieces }) {
  return (
    <>
      <Image
        src={pieces.imageSource}
        height={0}
        width={360}
        style={{ width: "auto", height: "auto" }}
        alt={pieces.name}
      />
      <h3>Title: {pieces.name}</h3>
      <h4>Artist: {pieces.artist}</h4>
      <h5>Year: {pieces.year}</h5>
      <h5>Genre: {pieces.genre}</h5>
      <button>go back</button>
    </>
  );
}
