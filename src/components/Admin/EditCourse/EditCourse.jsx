import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
function EditCourse() {
  const [title,setTitle]=useState();
  const [description,setDescription]=useState();
  const[image,setImage]=useState();
  const[price,setPrice]=useState();
  const[isPublished,setIsPublished]=useState();

  const {courseId}=useParams();
  useEffect(()=>{
  const response=axios.get(`https://elearningbackend-ztzn.onrender.com/admin/updateCourse/${courseId}`)
  console.log(response);
  },[])
  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center">
      
    <div className="card w-96 bg-blue-900 text-white shadow-xl flex items-center py-5 ">
      <div className="text-3xl font-bold underline">SignIn</div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-white">Title</span>
        </div>
        <input
          type="text"
          placeholder="Title"
          required="required"
          className="input input-bordered w-full max-w-xs text-green-800"
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="label">
          <span className="label-text text-white">Description</span>
        </div>
        <input
          type="text"
          placeholder="Description"
          required="required"
          className="input input-bordered w-full max-w-xs text-green-800"
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <div className="label">
          <span className="label-text text-white">Image</span>
        </div>
        <input
          type="text"
          placeholder="Image"
          required="required"
          className="input input-bordered w-full max-w-xs text-green-800"
          onChange={(e) => setImage(e.target.value)}
        />
         <div className="label">
          <span className="label-text text-white">Price</span>
        </div>
        <input
          type="text"
          placeholder="Price"
          required="required"
          className="input input-bordered w-full max-w-xs text-green-800"
          onChange={(e) => setPrice(e.target.value)}
        />
         <div className="label">
          <span className="label-text text-white">Published</span>
        </div>
        <input
          type="text"
          placeholder="Published"
          required="required"
          className="input input-bordered w-full max-w-xs text-green-800"
          onChange={(e) => setIsPublished(e.target.value)}
        />
        <button
          onClick={handleCreateCourse}
          className="mt-4 w-full bg-white text-blue-900 h-fit px-4 py-2 rounded-lg border-2 border-white hover:bg-blue-900 hover:text-white "
        >
          Create
        </button>
     </label>
      </div>
      </div>
  )
}

export default EditCourse