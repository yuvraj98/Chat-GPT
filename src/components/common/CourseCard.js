import React, { useState } from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const coursesData = [
  {
    heading: "Fundamentals",
    description: "Learn foundational concepts of AI tools applied to blogging, including basic NLP techniques and platform capabilities.",
    level: "Beginner",
    lessionNumber: "*",
  },
  {
    heading: "Advanced",
    description: "Explore advanced applications of AI tools in blogging, leveraging deep learning models like GPT-3 for content creation and management.",
    level: "Intermediate",
    lessionNumber: "*",
  },
  {
    heading: "Specialization",
    description: " Discover specialized topics in AI-powered blogging, addressing industry-specific challenges and innovative strategies.",
    level: "Advanced",
    lessionNumber: "*",
  },
];

const CourseCard = () => {
  const [currentCard, setCurrentCard] = useState(coursesData[0].heading);

  return (
    <div className="flex gap-10 justify-center flex-wrap w-full text-black mb-7 px-3">
      {coursesData.map((course, index) => (
        <div
          key={index}
          className={`w-[360px] lg:w-[30%] ${
            currentCard === course.heading
              ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
              : "bg-richblack-800"
          } text-richblack-25 h-[300px] box-border cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50`}
          onClick={() => setCurrentCard(course.heading)}
        >
          <div className="border-b-[2px] border-richblack-500 border-dashed h-[80%] p-6 flex flex-col gap-3">
            <div
              className={`${
                currentCard === course.heading && "text-richblack-800"
              } font-semibold text-[20px]`}
            >
              {course.heading}
            </div>
            <div className="text-richblack-400">{course.description}</div>
          </div>
          <div
            className={`flex justify-between ${
              currentCard === course.heading ? "text-blue-300" : "text-richblack-300"
            } px-6 py-3 font-medium`}
          >
            {/* Level */}
            <div className="flex items-center gap-2 text-[16px]">
              <HiUsers />
              <p>{course.level}</p>
            </div>
            {/* Flow Chart */}
            <div className="flex items-center gap-2 text-[16px]">
              <ImTree />
              <p>{course.lessionNumber} Lessons</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
