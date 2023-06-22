import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import "../styles/blogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch(import.meta.env.VITE_HOST + "/blogs/" + id);
  return (
    <>
      {loading && <Loader />}
      {error && { error }}
      {blog && (
        <div className="blog-details">
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-author-date">
            {blog.author} on {blog.date}
          </p>
          <span className="blog-body">{blog.body}</span>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
