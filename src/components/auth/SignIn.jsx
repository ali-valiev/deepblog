import { useState } from "react";
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../../styles/auth.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredentials) => {
        console.log(userCredentials);
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
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
