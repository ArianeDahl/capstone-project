import Header from "@/components/Header";
import BackButton from "@/components/BackButton";
import { data } from "@/lib/data";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";
import Recipe from "@/components/Recipe";
import Form from "@/components/Form";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const Availability = styled.p`
  font-style: italic;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  color: black;
`;

const RecipeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Details({ item, recipesArray, setRecipesArray }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/recipes/${id}`, fetcher);

  useEffect(() => {
    const recipes = data?.hits.slice(0, 5); //only display the first five recipes
    if (recipes) {
      setRecipesArray(
        recipes.map((recipe) => {
          return {
            slug: recipe.recipe.label
              .replace(",", "")
              .toLocaleLowerCase()
              .split(" ")
              .join("-"),
            ...recipe,
          };
        })
      );
    }
  }, [data]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Failed to load</h1>;
  }

  return (
    <>
      <Header />
      <Container>
        <Item>
          <h2>{item.name}</h2>
          <Availability>
            Available from{" "}
            {new Date(item.season_start).toLocaleString("default", {
              // number -> word (months)
              month: "long",
            })}{" "}
            to{" "}
            {new Date(item.season_end).toLocaleString("default", {
              month: "long",
            })}
          </Availability>
          <RecipeList>
            {recipesArray.map((recipe) => {
              console.log(recipe);
              return (
                <div key={recipe.slug}>
                  <h3>{recipe.recipe.label}</h3>
                  <Link href={`/recipes/${recipe.slug}`}>
                    <Image
                      src={recipe.recipe.images.SMALL.url}
                      alt={recipe.recipe.label}
                      height={200}
                      width={200}
                    />
                  </Link>
                </div>
              );
            })}
          </RecipeList>
        </Item>
      </Container>
      <Form />
      <BackButton />
    </>
  );
}
// display fruit or veggie that the user selected
export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = data.find((item) => item.id.toString() === params.id);

  return { props: { item } };
}
