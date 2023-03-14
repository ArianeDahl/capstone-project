import GlobalStyle from "@/styles";
import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";

//const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
  const APP_KEY = process.env.NEXT_PUBLIC_APP_KEY;

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=apple&app_id=a57809bb&app_key=e7fef45f8e353f23a65c08642a5ea9fd&dishType=Main%20course`
    );
    const data = await response.json();
  };

  //const { data, error } = useSWR("/api/recipes/v2", fetcher);

  const [recipes, setRecipes] = useState([]);
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
