export default function Form() {
  return (
    <form action="/api/form" method="post">
      <label htmlFor="recipe">Recipe:</label>
      <input
        type="text"
        id="recipe"
        name="recipe"
        minLength="5"
        maxLength="30"
        required
      />
      <label htmlFor="name">Your name:</label>
      <input
        type="text"
        id="name"
        name="name"
        minLength="2"
        maxLength="20"
        required
      />
      <label htmlFor="comment">Your comment:</label>
      <input
        type="text"
        id="comment"
        name="comment"
        minLength="3"
        maxLength="200"
        required
      />
      <label htmlFor="taste">Taste</label>
      <input type="range" id="taste" name="taste" min="0" max="100" step="10" />
      <label htmlFor="level">Difficulty level</label>
      <input type="range" id="level" name="level" min="0" max="100" step="10" />
      <button type="submit">Submit</button>
    </form>
  );
}
