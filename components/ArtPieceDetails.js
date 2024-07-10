import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";

export default function ArtPieceDetails({
  piece,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <Wrapper>
        <Image
          src={piece.imageSource}
          height={0}
          width={360}
          style={{ width: "auto", height: "auto" }}
          alt={piece.name}
        />
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        />
        <h3>Title: {piece.name}</h3>
        <h4>Artist: {piece.artist}</h4>
        <h5>Year: {piece.year}</h5>
        <h5>Genre: {piece.genre}</h5>
        <Link href="/art-pieces">
          <BackButton> ← back</BackButton>
        </Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const BackButton = styled.button`
  padding: 1rem 2rem;
  background-color: darkslategray;
  color: lightgrey;
  border-radius: 0.3rem;

  &:hover {
  }
`;
