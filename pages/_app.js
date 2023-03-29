import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [recipesArray, setRecipesArray] = useLocalStorageState("recipesArray", {
    defaultValue: [],
  });

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
      />
      <Navigation />
    </>
  );
}
