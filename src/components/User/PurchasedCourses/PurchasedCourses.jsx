import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CourseCard from '../../CourseCard/CourseCard';
function PurchasedCourses() {
 const[courses,setCourses]=useState([]);
    useEffect(()=>{
      const token=localStorage.getItem('token');
   const showCourses=async()=>{
    try{
      const response=await axios.get(`http://ec2-13-201-71-34.ap-south-1.compute.amazonaws.com:4000/user/mycourses`,{
        headers:{
          Authorization:`${token}`
        }
      });
      const courseData=response.data.data|| [];
      setCourses(courseData)
      console.log(courseData)
     
    }
    catch(e){
      console.error("Error",e);
    }
   
  
   }
   showCourses();
  },[])
  return (
    <div className="bg-gray-200 h-max">
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
  )
}

export default PurchasedCourses