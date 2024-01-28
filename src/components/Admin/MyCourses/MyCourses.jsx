import React, { useEffect,useState } from "react";
import axios from 'axios';
import CourseCard from "../../CourseCard/CourseCard";
function MyCourses() {
  const[courses,setCourses]=useState([]);
  

  useEffect(()=>{
    const token=localStorage.getItem('token');
    const showCourses=async()=>{
      try{
        const response=await axios.get('https://elearningbackend-ztzn.onrender.com/admin/myCourses',
        {
         headers:{
           Authorization:`${token}`
         }
        }
        )
        const courseData=response.data.data||[];
        setCourses(courseData);
       }
       catch(e){
        console.error("error",e)
       }
    }
    showCourses();
},[])
  return (
    <>
      
    <div className="bg-gray-200 h-max">
    <h1>MY COURSES</h1>
    <div className="p-5 flex flex-wrap justify-center gap-16">
       {courses.map((course, index) => (
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
   </div>
    </>
  
  )
}

export default MyCourses;
