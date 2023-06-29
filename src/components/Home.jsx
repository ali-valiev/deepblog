import BlogMapper from "./BlogMapper";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";
import { auth } from "../firebase-config";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { data, loading, error } = useFetch(
    import.meta.env.VITE_HOST + "/blogs"
  );
  if (auth.currentUser !== null) {
    return (
      <div className="app">
        {error && <center>{error}</center>}
        {loading && <Loader />}
        {data && <BlogMapper blogs={data} />}
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Home;
