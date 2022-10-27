import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCards = () => {
        const [courses, setCourses] = useState([]);

        useEffect(() => {
            fetch("https://coder-bot-server.vercel.app/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data));
            //console.log(courses);
        }, []);
            
    return (
      <div className="lg:w-8/12">
        <span className="text-sm my-4 text-tealGray-700 rounded grid md:grid-cols-2 lg:grid-cols-3 gap-2   border-tealGray-100">
          {courses.map((course) => (
            <div key={course.id} className="max-w-sm">
              <Card imgAlt={course.name} imgSrc={course.image}>
                <Link to={`/courses/${course.id}`}>
                  <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {course.name}
                  </h5>
                </Link>
                <p
                  className="mt-2 text-gray-800 
                
                dark:text-gray-400"
                >
                  {course.description.slice(0, 200)}
                </p>
                <div className="mt-2.5 mb-5 flex items-center">
                  <span className="mr-2 rounded bg-teal-100 px-2.5 py-0.5 text-sm flex  font-semibold text-teal-800 dark:bg-teal-200 dark:text-teal-800">
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {course.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${course.price}
                  </span>
                  <Link
                    to={`/courses/${course.id}`}
                    className="rounded-lg bg-teal-500 px-5 py-2.5 text-center
                    text-sm font-medium text-white hover:bg-teal-800
                    focus:outline-none focus:ring-4 focus:ring-teal-300
                    dark:bg-teal-600 dark:hover:bg-teal-700
                    dark:focus:ring-teal-800"
                  >
                    {" "}
                    See Details
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </span>
      </div>
    );
};

export default CourseCards;