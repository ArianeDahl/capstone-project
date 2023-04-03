import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import { data } from "@/lib/data";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [recipesArray, setRecipesArray] = useLocalStorageState("recipesArray", {
    defaultValue: [],
  });

  const [isFavorite, setIsFavorite] = useState();
  const [favoriteItems, setFavoriteItems] = useState(data);

  function handleToggleFavorite(id) {
    setFavoriteItems(
      favoriteItems.map((favoriteItem) =>
        favoriteItem.id === id
          ? { ...favoriteItem, isFavorite: !favoriteItem.isFavorite }
          : favoriteItem
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project - Seasony</title>
      </Head>
      <Header />
      <Component
        {...pageProps}
        recipesArray={recipesArray}
        setRecipesArray={setRecipesArray}
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
        favoriteItems={favoriteItems}
        setfavoriteItems={setFavoriteItems}
        onHandleToggleFavorite={handleToggleFavorite}
      />
      <Navigation />
    </>
  );
}
