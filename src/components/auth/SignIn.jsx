import { useState } from "react";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../../styles/auth.css";
import { Link, redirect } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        return redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form onSubmit={signIn}>
        <label>Sign In:</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(event) => {
            setPass(event.target.value);
          }}
        />
        <button type="submit">Sign In</button>
      </form>
      <center>
        Dont have an account? Just <Link to="/signup">Sign Up</Link>!
      </center>
    </div>
  );
};

export default SignIn;
