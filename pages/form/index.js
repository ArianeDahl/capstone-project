import Form from "@/components/Form";

export default function submitForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      recipe: event.target.recipe.value,
      name: event.target.name.value,
    };
    const JSONdata = JSON.stringify(data); //send data to server in JSON format

    const endpoint = "/api/form";

    const otions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options); //send form data to API and Vercel and get a response
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form />
      </form>
    </>
  );
}
