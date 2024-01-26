import React from "react";
import CourseCard from "../CourseCard/CourseCard";

function Courses() {
  const obj = {
    one: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    two: "../../../public/download.png",
    three:"../../../public/h1.jpg"
  };
  const obj1 = {
    one: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis risus et eros ornare vestibulum.",
    two: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis risus et eros ornare vestibulum. Curabitur molestie pellentesque nunc quis bibendum. Aenean mattis neque orci, vel lobortis dui faucibus ut.",
  };
  return (
    <div className="bg-gray-200 h-max">
      <div className="p-5 flex flex-wrap gap-20">
        <CourseCard imgSrc={obj.one} content={obj1.two} />
        <CourseCard imgSrc={obj.two} content={obj1.one} />
        <CourseCard imgSrc={obj.three} content={obj1.one} />
        <CourseCard imgSrc={obj.one} content={obj1.two} />
        <CourseCard imgSrc={obj.two} content={obj1.one} />
        <CourseCard imgSrc={obj.one} content={obj1.two} />
        <CourseCard imgSrc={obj.two} content={obj1.one} />
        <CourseCard imgSrc={obj.three} content={obj1.one} />
        <CourseCard imgSrc={obj.one} content={obj1.two} />
        <CourseCard imgSrc={obj.two} content={obj1.one} />
      </div>
    </div>
  );
}

export default Courses;
