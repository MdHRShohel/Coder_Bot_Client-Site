import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
        const [courses, setCourses] = useState([]);

        useEffect(() => {
          fetch("http://localhost:5000/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data));
          //console.log(courses);
        }, []);

    return (
      <div className="sticky top-32">
        {courses.map((courses) => (
          <Link to={`/courses/${courses.id}`} key={courses.id}>
            <span className="text-lg font-semibold block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100 hover:bg-teal-400">
              {courses.id}. {courses.name}
            </span>
          </Link>
        ))}
      </div>
    );
};

export default SideBar;