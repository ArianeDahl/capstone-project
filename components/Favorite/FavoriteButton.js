import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default function FavoriteButton({ isFavorite }) {
  /* const handleClick = () => {
    setIsFavorite(!isFavorite);
  }; */

  return <>{isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}</>;
}
