import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CourseCard({ imgSrc, title, price, description, author, id }) {
  const navigate = useNavigate();
  const editCourse=(id)=>{
    navigate(`/admin/editCourse/${id}`);
   }
  const handleBuy = async (courseid) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }
    try {
      const response = await axios.post(
        `https://elearningbackend-ztzn.onrender.com/user/purchasecourse/${courseid}`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      if (response.status === 200) {
        document.getElementById(id).close();
        navigate("/");
      }
    } catch (e) {
      console.error("Error", e);
    }
  };
  return (
    <div className="card w-80 h-fit bg-base-100 shadow-xl">
      <figure className="h-44 ">
        <img
          className="scale-100 object-cover h-full w-full"
          src={imgSrc}
          alt="img"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="h-28 overflow-hidden">{description}</p>
        <div className="flex justify-between">
          <div className="card-title">{author}</div>
          <div className="card-title">₹{price}</div>
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary w-full"
            onClick={() => {
              document.getElementById(id).showModal();
            }}
          >
            Buy Course
          </button>
          <button className="btn btn-primary w-full" onClick={()=>{editCourse(id)}}>
                Edit Course
                </button>
          <dialog id={id} className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Are you sure, you want to purchase this course? Click on{" "}
                 <b>Buy Now</b> to purchase.
              </p>
              <div className="modal-action">
                <button
                  className="btn btn-primary w-24"
                  onClick={() => {
                    handleBuy(id);
                  }}
                >
                  Buy Now
                </button>
                <br></br>
                
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn w-24">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
