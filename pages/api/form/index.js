import CommentsPage from "@/pages/form";
import Form from "@/components/Form";

export default function handler(req, res) {
  const body = req.body; //get data submitted

  if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    dataForm.push(newComment);
  }
  res
    .status(200)
    .json({ dataForm: `${body.recipe} ${body.name} ${body.comment}}` });
}
// receives req from the client (submitted form)
