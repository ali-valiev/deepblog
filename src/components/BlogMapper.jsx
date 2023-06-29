import { Link } from "react-router-dom";
import "../styles/blog.css";

const BlogMapper = ({ blogs }) => {
  return (
    <>
      {blogs.reverse().map((blog) => (
        <div className="blog" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="blog-title">{blog.title}</h2>
            <span className="blog-author-date">
              {blog.author} on {blog.date}
            </span>
            <p className="main-blog-body">{blog.body}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlogMapper;
