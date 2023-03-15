import GlobalStyle from "@/styles";
import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  /*

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=apple&app_id=a57809bb&app_key=e7fef45f8e353f23a65c08642a5ea9fd&dishType=Main%20course`
    );
    const data = await response.json();
    console.log(data);
  };
   const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState();
*/

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project - Seasony</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
