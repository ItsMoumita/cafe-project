import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog,handleBookmark }) => {
  // const {blog} = props;
  // console.log(blog);
  // console.log(handleBookmark);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm space-y-4">
        <figure>
          <img className="w-full h-[250px] "
            src={blog.cover}
            alt="Cover pic"/>
        </figure>
        <div className="author-info flex justify-around items-center">
            <h1>{blog.author}</h1>
            <img className="w-12 h-12 rounded-full" src={blog.authorImg} alt="" />
             <button onClick={handleBookmark}><FaBookmark size={20}/></button>
        </div>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex justify-between">
             {
                blog.hashtags.map((tag) => <p>{tag}</p>)
             }
          </div>
          <div className="card-actions justify-end">
          <button className="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
