import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import { Routes, Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/create" element={<Create />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
