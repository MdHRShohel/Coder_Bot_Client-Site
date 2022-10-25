import SideBar from "../components/SideBar";
import CourseCards from "../components/CourseCards";

const Courses = () => {

  return (
    <div className="mx-5">
      <div className="my-3">
        <h2 className="text-4xl text-center font-bold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Courses We Offer!
        </h2>
      </div>
      {/* Courses Courses */}
      <div className="lg:flex gap-4 flex-wrap">
        <div className="w-full flex-1">
          <SideBar></SideBar>
        </div>
        {/* Courses Cards */}
        <CourseCards></CourseCards>
      </div>
    </div>
  );
};

export default Courses;
