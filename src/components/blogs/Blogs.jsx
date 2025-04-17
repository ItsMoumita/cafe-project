import React, { useState } from 'react';
import Blog from '../Blog/Blog';


const Blogs = ({handleBookmark}) => {
    const [blogs,setBlogs] = useState([]);
    fetch("blogs.json")
    .then((res) => res.json())
    .then((data) => setBlogs(data))
 
    console.log(blogs);
    return (
      <div className='my-6'>
        <h1 className='text-3xl mb-6'>Total: {blogs.length}</h1>

       <div className='grid grid-cols-2 gap-4'>
       {
          blogs.map((blog) => <Blog blog ={blog} handleBookmark ={handleBookmark}></Blog>)
        }
       </div>
      </div>
    );

};

export default Blogs;