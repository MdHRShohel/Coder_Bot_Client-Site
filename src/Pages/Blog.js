import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Blog = () => {

    const blogs =useLoaderData();
    
    return (
      <div>
        {blogs.map((blog) => (
          <div key={blog.id} className="md:grid md:grid-cols-3 bg-base-100 shadow-xl border-teal-500 border-2 my-5 mx-5  md:mx-32">
            <figure>
              <img
                className="h-full p-2 md:w-full"
                src={blog?.imageURL}
                alt="Album"
              />
            </figure>
            <div className="p-2 col-span-2">
              <h2 className="text-lg font-medium">{blog?.question}</h2>
              <p>{blog?.answers}</p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Blog;