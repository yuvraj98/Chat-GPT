import React from 'react';

const featuresData = [
  {
    title: 'Improving end distrusts instantly.',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
  },
];

const Feature = () => {
  return (
    <section className=" py-16 px-8  bg-white">
      <div className="container mx-auto flex flex-col items-center gap-8  justify-between">
        <div className="w-full ">
          <h1 className="text-4xl font-bold text-white leading-tight gradient__text text-center">
            The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
          </h1>
          <p className="text-black mt-4 text-center font-bold ">Request Early Access to Get Started</p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full md:w-1/2">
          {featuresData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
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
