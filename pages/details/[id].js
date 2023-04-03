import { data } from "@/lib/data";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ItemCard from "@/components/ItemCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Details({
  item,
  recipesArray,
  setRecipesArray,
  isFavorite,
  setIsFavorite,
}) {
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
      <Container>
        <ItemCard
          item={item}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
        />
        <StyledParagraph>
          Here are a few recipes for your inspiration. Check them out!
        </StyledParagraph>
        <RecipeList>
          {recipesArray.map((recipe) => {
            return (
              <StyledRecipeContainer key={recipe.slug}>
                <StyledRecipeTitle>{recipe.recipe.label}</StyledRecipeTitle>
                <StyledRecipeLink href={`/recipes/${recipe.slug}`}>
                  <StyledRecipeImage
                    src={recipe.recipe.images.SMALL.url}
                    alt={recipe.recipe.label}
                    height={200}
                    width={200}
                  />
                </StyledRecipeLink>
              </StyledRecipeContainer>
            );
          })}
        </RecipeList>
      </Container>
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

const Container = styled.div`
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  position: absolute;
  bottom: 104px;
  top: 120px;
  text-align: center;
`;

const StyledParagraph = styled.p`
  margin: 30px;
  padding: 10px:
  font-size: 1.2rem;
  color: #313c48 
  `;

const RecipeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  padding-bottom: 100px;
`;
// Recipe Container
const StyledRecipeContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background: #e4eeee;
  box-shadow: 0px 5px 15px #474745;

  &:hover {
    cursor: pointer;
    background-color: #e6d9d9;
    color: #b76e76;
  }
`;

const StyledRecipeTitle = styled.h3`
  margin: 15px;
  padding: 15px;
  color: #5d9b9b;
  font-weight: 500;
`;

const StyledRecipeLink = styled(Link)`
  text-decoration: none;
  margin: 20px;
  padding: 10px;
`;

const StyledRecipeImage = styled(Image)`
  border-radius: 5px;
  box-shadow: 0px 5px 10px #474745;
`;
