import { FaFileDownload } from "react-icons/fa";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import jsPDF  from "jspdf";

const SingleCourse = () => {
  const course = useLoaderData();
  //console.log(course);

    const downloadPDF = () => {
        const doc = new jsPDF('landscape','px','a4','false');
        doc.html(document.querySelector("#pdf"), {
            callback: function (doc) {
                doc.save("course.pdf");
            },
            x: 10,
            y: 10,
        });
    };


  return (
    <div>
      <div className="grid md:grid-cols-3 md:px-20 mx-4 md:py-20 gap-5">
        <div className="w-full col-span-2">
          <figure>
            <img className="my-5" src={course?.image} alt="" />
          </figure>
          <div>
            <h2 className="font-semibold text-xl">
              Course Details About: {course?.name}
            </h2>
            <p>{course?.description}</p>
          </div>
        </div>

        <div>
          <div className="w-full p-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">{course?.name}</h2>
              <span className="text-3xl font-semibold text-gray-900 dark:text-white">
                Price: ${course.price}
              </span>
              <p className="text-xl my-4">
                <strong>Ratings:</strong> {course.rating} Out Of 5.00.
              </p>

              <Link to="/" className="mb-10">
                <button
                  onClick={downloadPDF}
                  className="w-75 flex mx-auto rounded-lg bg-teal-500 px-5 py-2.5 text-center focus: outline-white 
                    text-xl font-medium text-white hover:bg-teal-800
                    focus:outline-none focus:ring-4 focus:ring-teal-300
                    dark:bg-teal-600 dark:hover:bg-teal-700
                    dark:focus:ring-teal-800"
                >
                  <FaFileDownload className="h-6 mr-2"></FaFileDownload>{" "}
                  Download Outline
                </button>
              </Link>

              <div className="mt-2">
                <Link to="/checkout" className="">
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
  );
};

export default SingleCourse;
