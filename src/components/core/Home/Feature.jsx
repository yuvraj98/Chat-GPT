import React from 'react';

const featuresData = [
  {
    title: 'Engage with AI Blog Learning',
    text: 'Enhance your understanding of blog intricacies through AI blog learning prompt engineering. Delve into the depths of content creation with intelligent prompts that spark creativity and clarity. Seamlessly integrate AI-driven insights to elevate your narrative and engage readers effortlessly.',
  },
  {
    title: 'Pioneering the Future of Blogging',
    text: 'Join the forefront of digital evolution. Explore the intersection of technology and creativity, leveraging AI tools to push boundaries and redefine blogging excellence. Gain early access to transformative insights and shape the future of digital communication.',
  },
  {
    title: 'Seize Your Opportunity Today',
    text: 'Discover the transformative power of AI in blogging details. Request early access to unlock exclusive tools and resources that empower your journey towards impactful storytelling and influential blogging.',
  },
  {
    title: 'Unlock Early Access for Groundbreaking Insights',
    text: 'Enhancing trustworthiness begins instantly. Empower your content with rich insights and nuanced perspectives that captivate and inform your audience. Embrace advanced tools that refine your message, ensuring every word resonates.',
  },
];

const Feature = () => {
  return (
    <section className=" py-16 px-8  bg-white">
      <div className="container mx-auto flex flex-col items-center gap-8  justify-between">
        <div className="w-full ">
        <h1 className="text-4xl font-bold leading-tight text-center bg-gradient-to-r from-richblack-900 to-richblack-500 text-transparent bg-clip-text">
          Unveiling the Power of Blogging: Transforming Ideas into Impact
        </h1>

          <p className="text-black mt-4 text-center font-bold text-xl">Request Early Access to Get Started</p>
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 w-full md:w-1/2 ">
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="bg-richblack-50 rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h2>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Feature;
