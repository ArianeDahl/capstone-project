import ItemCard from "@/components/ItemCard";
import styled from "styled-components";

export default function FavoritePage({
  onHandleToggleFavorite,
  favoriteItems,
}) {
  const favorites = favoriteItems.filter(
    (favoriteItem) => favoriteItem.isFavorite === true
  );

  return (
    <>
      <StyledFavoriteTitle>My Favorites:</StyledFavoriteTitle>
      <StyledFavoriteList>
        {favorites.map((favorite) => {
          return (
            <StyledFavoriteItems key={favorite.id}>
              <ItemCard
                item={favorite}
                isFavorite={favorite.isFavorite}
                onHandleToggleFavorite={onHandleToggleFavorite}
              />
            </StyledFavoriteItems>
          );
        })}
      </StyledFavoriteList>
    </>
  );
}

const StyledFavoriteTitle = styled.h2`
  text-align: center;
  color: #5d9b9b;
  font-weight: 400;
  margin-top: 20px;
  margin: 20px 10px;
  padding: 10px;
`;

const StyledFavoriteList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 100px;
`;

const StyledFavoriteItems = styled.li`
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;
