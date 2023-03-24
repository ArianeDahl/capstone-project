import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "@/components/Form";
import BackButton from "@/components/BackButton";
import Recipe from "@/components/Recipe";

export default function RecipeDetails({ recipesArray }) {
  const router = useRouter();
  const { slug } = router.query;
  const recipe = recipesArray.find((recipe) => recipe.slug === slug);
  console.log(recipe);
  return (
    <>
      <Recipe
        title={recipe.recipe.label}
        image={recipe.recipe.images.SMALL.url}
        ingredients={recipe.recipe.ingredients}
      />
      <Form />
      <BackButton />
    </>
  );
}
