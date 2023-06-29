import { useState } from "react";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/auth.css";

const SignUp = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [errMessage, setErrMessage] = useState();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredentials) => {
        console.log(userCredentials);
        Navigate("/signin");
      })
      .catch((err) => {
        console.log(err.message);
        setErrMessage(err.message);
      });
  };

  return (
    <div className="container">
      <form onSubmit={signUp}>
        <label>Sign Up:</label>
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
        <button type="submit">Sign Up</button>
      </form>
      <center>
        Already have an account? Then <Link to="/signin">Sign In</Link>!
      </center>
      <div className="error-box">{errMessage}</div>
    </div>
  );
};

export default SignUp;
