import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [recipesArray, setRecipesArray] = useLocalStorageState("recipesArray", {
    defaultValue: [],
  });

  const [isFavorite, setIsFavorite] = useState();

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
      />
      <Navigation />
    </>
  );
}
