import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  const handleSubmit = () => {
    const newBlog = { title, body, author, date };
    fetch(import.meta.env.VITE_HOST + "blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => navigate("/"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name of your Blog:</label>
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Your Name:</label>
      <br />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br />
      <label>Blog itself:</label>
      <br />
      <textarea
        cols="30"
        rows="10"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <br />
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default Create;
