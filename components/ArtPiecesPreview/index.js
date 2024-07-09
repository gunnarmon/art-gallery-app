import Image from "next/image";

export default function ArtPiecePreview({ title, image, artist, slug }) {
  return (
    <>
      <hr></hr>
      <h3>
        <strong>Title:</strong> {title}
      </h3>
      <h4>
        <strong>Artist:</strong> {artist}
      </h4>
      <Image src={image} height={300} width={200} alt={slug}></Image>
    </>
  );
}
