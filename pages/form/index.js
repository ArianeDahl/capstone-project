import styled from "styled-components";
import Form from "@/components/Form";
import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const endpoint = "/api/form"; //API endpoint where we send form data

  const fetchComments = async () => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setComments(result);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = {
      recipe: event.target.recipe.value,
      name: event.target.name.value,
      comment: event.target.comment.value,
    };
    const JSONdata = JSON.stringify(dataForm); //send data to server in JSON format

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata, //JSON data we send above
    };
    const response = await fetch(endpoint, options); //send the form data to API and Vercel and get a response
    const result = await response.json(); //convert response it into json
    setComment(result);
    alert(`Is this your full name: ${result.dataForm}`); // If server returns submitted name -> form works
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form />
        <button type="submit" onClick={"submitComment"}>
          Submit
        </button>
      </form>
    </>
  );
}

/*
<button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => {
        return;
      })}
*/
