import Header from "@/components/Header";
import BackButton from "@/components/BackButton";
import { data } from "@/lib/data";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";
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
  margin: 10px;
`;

const Title = styled.h2`
  padding: 10px;
  color: #5d9b9b;
`;

const Availability = styled.p`
  margin: 10px;
  padding: 20px:
  font-weight: 600;
  font-size: 1.2em;
  color: #b76e76;
`;

const StyledParagraph = styled.p`
  margin: 20px 30px;
  padding: 20px:
  font-size: 1.2rem;
`;

const RecipeTitle = styled.h3`
  margin: 30px 10px;
  color: #5d9b9b;
`;

const RecipeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RecipeContainer = styled.div`
  margin: 10px;
  padding: 10px;
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
  }, [setRecipesArray, data]);

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
          <Title>{item.name}</Title>
          <Availability>
            Availability:{" "}
            {new Date(item.season_start).toLocaleString("default", {
              month: "long",
            })}{" "}
            -{" "}
            {new Date(item.season_end).toLocaleString("default", {
              month: "long",
            })}
          </Availability>
          <StyledParagraph>
            Here are a few recipes for your inspiration. Check them out!
          </StyledParagraph>
          <RecipeList>
            {recipesArray.map((recipe) => {
              return (
                <RecipeContainer key={recipe.slug}>
                  <RecipeTitle>{recipe.recipe.label}</RecipeTitle>
                  <Link href={`/recipes/${recipe.slug}`}>
                    <Image
                      src={recipe.recipe.images.SMALL.url}
                      alt={recipe.recipe.label}
                      height={200}
                      width={200}
                    />
                  </Link>
                </RecipeContainer>
              );
            })}
          </RecipeList>
        </Item>
      </Container>
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
