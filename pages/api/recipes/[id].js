import { data } from "@/lib/data";
const APP_ID = process.env.APP_ID;
const API_KEY = process.env.API_KEY;

export default async function handler(request, response) {
  const { id } = request.query;
  const recipe = data.find((recipe) => recipe.id == id);
  try {
    const apiResponse = await fetch(
      `https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${API_KEY}&type=public&health=vegetarian&dishType=Main%20course&imageSize=SMALL&q=${recipe.apiRoute}`
    );
    const apiData = await apiResponse.json();
    response.json(apiData);
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
