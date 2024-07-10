import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

export default function ArtPiecePreview({ title, image, artist, slug }) {
  return (
    <>
      <Figure>
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
        <FavoriteButton />
      </Figure>
    </>
  );
}

const Figure = styled.figure`
  border: 1px solid red;
  padding: 1rem;
`;
