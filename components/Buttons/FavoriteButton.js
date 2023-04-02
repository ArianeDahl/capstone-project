import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import styled from "styled-components";

// border -> inactive

export default function FavoriteButton(/* {
    isFavorite,
    handleToggleFavorite,
    item
  } */) {
  return (
    <Button /* onClick={() => {handleToggleFavorite(item.id);}} */>
      <MdFavoriteBorder />
      {/*  {isFavorite ? (
          <button>
            <MdFavorite />
          </button>
        ) : (
          <button>{ <MdavoriteBorder />/}</button>
        )} */}
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  position: absolute;
  margin: 10px;
  top: 0;
  right: 0;
  z-index: 1;
  font-size: 1.3rem;
  color: #b76e76;
`;
