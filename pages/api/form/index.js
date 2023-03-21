export default function handler(req, res) {
  const body = req.body;
  console.log("body: ", body);
  if (!body.recipe || !body.name) {
    return res.status(400).json({ data: "Recipe or name not found" });
  }
  res.status(200).json({ data: `${body.recipe} ${body.name}}` });
}
// receives req from the client (submitted form)
