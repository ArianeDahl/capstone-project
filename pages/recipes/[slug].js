import Header from "@/components/Header";
import { useRouter } from "next/router";
import Form from "@/components/Form/Form";
import BackButton from "@/components/BackButton";
import Recipe from "@/components/Recipe";
import CommentSection from "@/components/Comments/Comments";

export default function RecipeDetails({ recipesArray }) {
  const router = useRouter();
  const { slug } = router.query;
  const recipe = recipesArray.find((recipe) => recipe.slug === slug);
  console.log(recipe);
  return (
    <>
      <Header />
      <Recipe
        title={recipe.recipe.label}
        image={recipe.recipe.images.SMALL.url}
        ingredients={recipe.recipe.ingredients}
      />
      <CommentSection recipeSlug={slug} />
      <Form recipeSlug={slug} />
      <BackButton />
    </>
  );
}
