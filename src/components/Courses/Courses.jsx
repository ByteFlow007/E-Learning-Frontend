import React, { useEffect, useState,useMemo } from "react";
import CourseCard from "../CourseCard/CourseCard";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    const showCourses = async () => {
      try {
        const response = await axios.get(
          "http://ec2-13-201-71-34.ap-south-1.compute.amazonaws.com:4000/user/publishedCourse"
        );
        const coursesData = response.data.data || [];
        setCourses(coursesData);
      } catch (e) {
        console.error("Error while fetching courses", e);
      }
      finally{
        setLoading(false);
      }
    };
    showCourses();
  }, []);

  const memoizedCourses = useMemo(() => courses, [courses]);

  return (
    <div className="bg-gray-200 h-max">
    {loading?(
      <div className="flex items-center justify-center h-full">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
    ):
    <div className="p-5 flex flex-wrap justify-center gap-16">
        {memoizedCourses.map((course, index) => (
          <CourseCard
            key={index}
            imgSrc={course.image}
            title={course.title}
            price={course.price}
            description={course.description}
            author={course.createdBy.username}
            id={course._id}
          />
        ))}
      </div>
    }
      
    </div>
  );
}

export default Courses;
