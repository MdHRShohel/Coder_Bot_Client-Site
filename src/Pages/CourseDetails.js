import { FaFileDownload } from "react-icons/fa";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const SingleCourse = () => {
  const course = useLoaderData();
  //console.log(course);

  return (
    <div>
      <div ref={ref} className="md:mt-5 w-full max-w-3xl p-6 m-auto mx-auto">
        <div>
          <div>
            <figure>
              <img
                className="my-5 mx-auto rounded"
                src={course?.image}
                alt=""
              />
            </figure>
            <div>
              <div className="mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">Course Details on {course?.name}</h2>
                <span className="text-3xl font-semibold text-gray-900 dark:text-white">
                  Price: ${course.price}
                </span>
                <p className="text-xl my-4">
                  <strong>Ratings:</strong> {course.rating} Out Of 5.00.
                </p>
              </div>
              <p className="text-justify">{course?.description}</p>
            </div>
          </div>

          <div>
            <div className="w-full mt-4 p-2 mb-10">
              <div>
                  <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => (
                      <button
                        onClick={toPdf}
                        className="w-75 flex mx-auto rounded-lg bg-teal-500 px-5 py-2.5 text-center focus: outline-white 
                    text-xl font-medium text-white hover:bg-teal-800
                    focus:outline-none focus:ring-4 focus:ring-teal-300
                    dark:bg-teal-600 dark:hover:bg-teal-700
                    dark:focus:ring-teal-800"
                      >
                        <FaFileDownload className="h-6 mr-2"></FaFileDownload>{" "}
                        Download Outline
                      </button>
                    )}
                  </Pdf>

                <div className="mt-2">
                  <Link to={`/checkout/${course.id}`}>
                    <button
                      className="w-75 flex mx-auto rounded-lg bg-teal-500 px-5 py-2.5 text-center
                    text-xl font-medium text-white hover:bg-teal-700
                    focus:outline-none focus:ring-4 focus:ring-teal-300
                    dark:bg-teal-600 dark:hover:bg-teal-700
                    dark:focus:ring-teal-800"
                    >
                      Get Premium Access!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
