import Image from "next/image";
import Heart from "../assets/heart.svg";
import styled from "styled-components";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <>
      <StyledButton type="button" onClick={onToggleFavorite}>
        <Heart width={50} height={50} alt="Bookmark-Icon" />
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;
