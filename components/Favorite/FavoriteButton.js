import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default function FavoriteButton({ isFavorite }) {
  return <>{isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}</>;
}
