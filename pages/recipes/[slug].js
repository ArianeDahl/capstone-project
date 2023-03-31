import { useRouter } from "next/router";
import Form from "@/components/Form/Form";

import Recipe from "@/components/Recipe/Recipe";
import CommentSection from "@/components/Comments/Comments";
import useLocalStorageState from "use-local-storage-state";

export default function RecipeDetails({ recipesArray }) {
  const [dataForm, setDataForm] = useLocalStorageState("dataForm", {
    defaultValue: [],
  });
  const router = useRouter();
  const { slug } = router.query;
  const recipe = recipesArray.find((recipe) => recipe.slug === slug);

  return (
    <>
      <Recipe
        title={recipe?.recipe.label}
        image={recipe?.recipe.images.SMALL.url}
        ingredients={recipe?.recipe.ingredients}
      />

      <CommentSection
        dataForm={dataForm}
        setDataForm={setDataForm}
        recipeSlug={slug}
      />
      <Form setDataForm={setDataForm} recipeSlug={slug} />
    </>
  );
}
