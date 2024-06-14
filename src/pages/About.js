import React from "react";
import HighlightText from "../components/common/HighlightedText";
import AiImage from '../assets/aboutai1.jpg'
import { useState } from "react";
import StockImg from '../assets/aboutstock1.jpg'
import CodeImg from '../assets/aboutcode1.jpg'
import Card from "../components/common/Card";
import Footer from "../components/core/Home/Footer";
import data from "../components/data/aboutdata";
import ContactForm from "../components/common/ContactForm";
const About = () => {

    const [centerImage, setCenterImage] = useState(""); // Initial state with "stock" image in center

        const handleClick = () => {
            // Swap the center image state
            setCenterImage(centerImage === "stock" ? "code" : "stock");
        };
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-transparent">
            <span>Innovative Learning Redefined: OpenAI's</span>
            <span> Blueprint for Future-Ready Online Education</span>
            </h1>
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto  text-center text-xl font-medium text-richblack-100 lg:w-[95%] mt-9">
            Unlock smarter trading and coding with AI tools that analyze market trends, predict movements, generate code snippets, 
            debug issues, and automate tasks, enabling you to make informed decisions and enhance productivity effortlessly.
            </p>
          </header>
          <div className="sm:h-[80px] lg:h-[150px]"></div>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex justify-center space-x-10">
          {centerImage === "stock" ? (
            <>
              <img
                src={CodeImg}
                alt="Coding"
                className="w-84 h-84 lg:w-96 lg:h-96 object-cover rounded-lg shadow-[0_0_20px_0] shadow-richblack-500 cursor-pointer"
                onClick={handleClick}
              />
              <img
                src={StockImg}
                alt="Stock Market Trends"
                className="w-84 h-84 lg:w-96 lg:h-96 object-cover rounded-lg shadow-[0_0_20px_0] shadow-richblack-500"
                onClick={handleClick}
              />
            </>
          ) : (
            <>
              <img
                src={StockImg}
                alt="Stock Market Trends"
                className="w-84 h-84 lg:w-96 lg:h-96 object-cover rounded-lg shadow-[0_0_20px_0] shadow-richblack-500 cursor-pointer"
                onClick={handleClick}
              />
              <img
                src={CodeImg}
                alt="Coding"
                className="w-84 h-84 lg:w-96 lg:h-96 object-cover rounded-lg shadow-[0_0_20px_0] shadow-richblack-500"
                onClick={handleClick}
              />
            </>
          )}
        </div>


        </div>
      </section>

      <div className="mt-[270px] mb-[100px]">
            <header className="text-4xl font-semibold text-center">
                <h1>
                <HighlightText text="Exploring AI-Powered Prompt Engineering Across Industries" />
                </h1>
            </header>
            <div className="grid grid-cols-3 gap-4  mx-auto  w-9/12 max-w-maxContent mt-12">
                {data.map((item) => (
                    <Card key={item.index} title={item.title} description={item.description} />
                ))}
            </div>
        </div>


        <Footer></Footer>
    </div>
  );
};

export default About;
