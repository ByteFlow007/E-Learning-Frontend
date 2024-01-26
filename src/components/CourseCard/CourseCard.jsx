import React from "react";

function CourseCard({ imgSrc,content }) {
  return (
    <div className="card w-72 h-fit bg-base-100 shadow-xl">
      <figure className="h-44">
        <img className="scale-100 object-cover h-full w-full" src={imgSrc} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p className="h-28 overflow-hidden">{content}</p>
        <div className="flex justify-between">
          <div className="card-title">Ashish</div>
          <div className="card-title">$100</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
