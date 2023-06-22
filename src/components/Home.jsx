import BlogMapper from "./BlogMapper";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

const Home = () => {
  console.log(typeof HOST);
  const { data, loading, error } = useFetch(
    import.meta.env.VITE_HOST + "/blogs"
  );
  return (
    <div className="app">
      {error && { error }}
      {loading && <Loader />}
      {!loading && <BlogMapper blogs={data} />}
    </div>
  );
};

export default Home;
