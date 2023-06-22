import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  function handleMenu() {
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <header className="topnav">
      <Link to="/" className="active">
        <span className="logo">DeepBlog</span>
      </Link>
      <nav id="nav">
        <Link to="/create">Add</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <Link className="icon" onClick={handleMenu}>
        <i className="fa fa-bars"></i>
      </Link>
    </header>
  );
};

export default Header;
