import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Blogs from './components/blogs/blogs'

function App() {
  
  const handleBookmark = (blog) => {
    console.log("hello");
  }

  return (
    <>
       <Navbar></Navbar>
      

       <div className="main-container flex text-center px-4">
         <div className="left-container w-[70%]">
         <Blogs handleBookmark={handleBookmark}></Blogs>
         </div>

         <div className="right-container w-[30%]">
            <h1>Reading time: 0</h1>
            <h1>Bookmarked count: 0</h1>
         </div>
       </div>

    </>
  )
}

export default App
