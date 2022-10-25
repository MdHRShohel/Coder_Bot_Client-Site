import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCategories = () => {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/course-categories")
          .then((res) => res.json())
          .then((data) => setCategories(data));
    }, [])

    return (
      <div className="w-full px-4 flex-1">
        <h2 className="text-2xl text-center font-bold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Courses Categories
        </h2>
        {categories.map((category) => (
          <Link
            to={`/course-categories/${category.category_id}`}
            key={category.category_id}
          >
            <span className="text-lg font-semibold block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100 hover:bg-teal-400">
              {category.category_id}. {category.category_name}
            </span>
          </Link>
        ))}
      </div>
    );
};

export default CourseCategories;