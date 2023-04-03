import ItemCard from "@/components/ItemCard";
import styled from "styled-components";

export default function FavoritePage({
  onHandleToggleFavorite,
  favoriteItems,
}) {
  const favorites = favoriteItems.filter(
    (favoriteItem) => favoriteItem.isFavorite === true
  );
  console.log(favorites);
  return (
    <>
      <StyledFavoriteTitle>My Favorites Fruits & Veggies:</StyledFavoriteTitle>
      <ul>
        {favorites.map((favorite) => {
          return (
            <li key={favorite.id}>
              <ItemCard
                item={favorite}
                isFavorite={favorite.isFavorite}
                setIsFavorite={onHandleToggleFavorite}
                onHandleToggleFavorite={onHandleToggleFavorite}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

const StyledFavoriteTitle = styled.h2`
  text-align: center;
  color: #5d9b9b;
  font-weight: 400;
  margin: 20px;
  padding: 20px;
`;
