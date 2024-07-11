import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";
import Link from "next/link";

export default function ArtPiecePreview({
  title,
  image,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
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
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        />
        <SeeDetails href={`/art-pieces/${slug}`}>see details...</SeeDetails>
      </Figure>
    </>
  );
}

const Figure = styled.figure`
  border: 1px solid slategray;
  padding: 1rem;
  padding-bottom: 3rem;
  position: relative;
`;

const SeeDetails = styled(Link)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;
