import { useState } from "react";
import { getAuth } from "firebase/auth";
import { auth } from "../firebase-config";
import { Navigate } from "react-router-dom";
import "../styles/create.css";

const Create = () => {
  if (auth.currentUser !== null) {
    const auth = getAuth();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const author = auth.currentUser.email;

    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    const handleSubmit = () => {
      const newBlog = { title, body, author, date };
      fetch(import.meta.env.VITE_HOST + "/blogs", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newBlog),
      });
    };
    return (
      <form onSubmit={handleSubmit}>
        <br />
        <input
          placeholder="Name of your Blog:"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Write your blog here:"
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Add Blog</button>
      </form>
    );
  } else {
    return <Navigate to="/signin" />;
  }
  // const auth = getAuth();
  // const user = auth.currentUser;
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // console.log(user.email);
  // const author = user.email;

  // var today = new Date(),
  //   date =
  //     today.getFullYear() +
  //     "-" +
  //     (today.getMonth() + 1) +
  //     "-" +
  //     today.getDate();

  // const handleSubmit = () => {
  //   const newBlog = { title, body, author, date };
  //   fetch(import.meta.env.VITE_HOST + "/blogs", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(newBlog),
  //   });
  // };
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <br />
  //     <input
  //       placeholder="Name of your Blog:"
  //       type="text"
  //       value={title}
  //       onChange={(e) => setTitle(e.target.value)}
  //     />
  //     <br />
  //     <textarea
  //       placeholder="Write your blog here:"
  //       cols="30"
  //       rows="10"
  //       value={body}
  //       onChange={(e) => setBody(e.target.value)}
  //     ></textarea>
  //     <br />
  //     <button type="submit">Add Blog</button>
  //   </form>
  // );
};

export default Create;
