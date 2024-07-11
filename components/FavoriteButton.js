import styled from "styled-components";
import Heart from "public/assets/heart.svg";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <>
      <StyledButton type="button" onClick={onToggleFavorite}>
        <Heart
          width={30}
          height={30}
          alt="Bookmark-Icon"
          fill={isFavorite ? "lightcoral" : "none"}
          stroke="black"
          stroke-opacity="0.5"
        />
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 5.5rem;
  right: 1.4rem;
`;
