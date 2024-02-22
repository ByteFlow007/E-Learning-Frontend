import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import CourseCard from "../../CourseCard/CourseCard";
import { useNavigate } from "react-router-dom";
function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const showCourses = async () => {
      try {
        const response = await axios.get(
          "http://ec2-13-201-71-34.ap-south-1.compute.amazonaws.com:4000/admin/myCourses",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const courseData = response.data.data || [];
        setCourses(courseData);
      } catch (e) {
        console.error("error", e);
      } finally {
        setLoading(false);
      }
    };
    showCourses();
  }, []);
  const memoizedCourses = useMemo(() => courses, [courses]);
  return (
    <>
      <div className="bg-gray-200 h-screen">
        <h1>MY COURSES</h1>
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="p-5 flex flex-wrap justify-center gap-16">
            {memoizedCourses.map((course, index) => (
              <>
              <CourseCard
                key={index}
                imgSrc={course.image}
                title={course.title}
                price={course.price}
                description={course.description}
                author={course.createdBy.username}
                id={course._id}
              />
              
              </>
              
            ))}
            
          </div>
        )}
      </div>
    </>
  );
}

export default MyCourses;
