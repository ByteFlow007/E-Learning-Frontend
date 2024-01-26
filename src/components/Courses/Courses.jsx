import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const showCourses = async () => {
      try {
        const response = await axios.get('https://elearningbackend-ztzn.onrender.com/user/publishedCourse');
        const coursesData = response.data.data || [];
        setCourses(coursesData);
       
      } catch (e) {
        console.error('Error while fetching courses', e);
      }
    }
    showCourses();
  }, [])

  return (
    <div className="bg-gray-200 h-max">
      <div className="p-5 flex flex-wrap justify-center gap-16">
      
        {courses.map((course, index) => (
          
        
          <CourseCard key={index} imgSrc={course.image}  title={course.title} price={course.price} description={course.description}
            author={course.createdBy.username} id={course._id}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Courses;
