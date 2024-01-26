import React from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
function CourseCard({ imgSrc,title,price,description,author,id }) {
  const navigate=useNavigate();
  const handleBuy=async(courseid)=>{

    const token=localStorage.getItem('token');
    if(!token){
      navigate('/signin');
      return;
    }
    try{
      const response=await axios.post(`https://elearningbackend-ztzn.onrender.com/user/purchasecourse/${courseid}`,{},
    {
      headers:{
        Authorization:`${token}`,
      }
    }
    )
    
    if(response.status===200){
      navigate('user/myLearnings')
     console.log(response);
    }
    }
    catch(e){
      console.error("Error",e);
    }
    
  }
  return (
    <div className="card w-80 h-fit bg-base-100 shadow-xl">
      <figure className="h-44">
        <img className="scale-100 object-cover h-full w-full" src={imgSrc} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="h-28 overflow-hidden">{description}</p>
        <div className="flex justify-between">
          <div className="card-title">{author}</div>
          <div className="card-title">₹{price}</div>
         
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full" onClick={()=>{handleBuy(id)}}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
