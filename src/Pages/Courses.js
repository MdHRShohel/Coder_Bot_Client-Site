import CourseCategories from "./CourseCategories";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <div className="container px-4 mx-auto">
      {/* Courses Categories */}
      <div className="lg:flex flex-wrap">
        <CourseCategories></CourseCategories>
        {/* Courses list */}
        <CourseList></CourseList>
      </div>
    </div>
  );
};

export default Courses;
