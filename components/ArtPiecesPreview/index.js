import Image from "next/image";

export default function ArtPiecesPreview({ title, image, artist, slug }) {
  return (
    <>
      <hr></hr>
      <h3>
        <strong>Title:</strong> {title}
      </h3>
      <h4>
        <strong>Artist:</strong> {artist}
      </h4>
      <Image
        src={image}
        height={0}
        width={360}
        style={{ width: "auto", height: "auto" }}
        alt={slug}
      ></Image>
    </>
  );
}
