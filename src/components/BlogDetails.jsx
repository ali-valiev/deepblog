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
  } = useFetch(import.meta.env.VITE_HOST + `/blogs/${id}`);
  return (
    <>
      {loading && <Loader />}
      {error && { error }}
      {blog && (
        <div className="blog-details">
          <h2 className="blog-title">{blog[0].title}</h2>
          <p className="blog-author-date">
            By {blog[0].author} on {blog[0].date}
          </p>
          <div className="blog-body-container">
            <p className="blog-body">{blog[0].body}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
