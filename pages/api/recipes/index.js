const APP_ID = process.env.APP_ID;
const API_KEY = process.env.API_KEY;

export default async function handler(request, response) {
  console.log("Getting all recipes");
  const apiResponse = await fetch(
    `https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${API_KEY}&type=public&q=apple`
  );
  const data = await apiResponse.json();
  response.json(data);
}
/*
response.status(200).json(recipe);



if (req.method === 'POST') {

} else {
    
}
*/
