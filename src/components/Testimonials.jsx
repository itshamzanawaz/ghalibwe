"use client";
import React, { useRef } from "react";
import { Carousel } from "antd";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Testimonials = () => {
  const carouselRef = useRef(); // Create a reference

  const next = () => {
    carouselRef.current.next(); // Use the next method
  };

  const prev = () => {
    carouselRef.current.prev(); // Use the prev method
  };

  const testimonialsData = [
    {
      name: "Ali Bilal",
      title: "CEO, Company Inc.",
      text: "In my experience working with World Estimating, they have displayed tremendous skill in the area of cost engineering. I can always count on their professionalism and expert guidance.",
    },
    {
      name: "Anessa Zainab",
      title: "CEO, Company Inc.",
      text: "World Estimating has been a valued part of our development team over the last few years. Their cost and quantity estimates are thorough and well documented and are a reliable part of our budgeting process which is critical to our land acquisitions. We fully endorse their construction cost estimating services.",
    },
    {
      name: "Rohan Akbar",
      title: "CEO, Company Inc.",
      text: "The company World Estimating LLC is very professional company. As a general contractor I rely on them to ensure plan take offs are of a high standard. I am very confident to recommending World Estimating Services.",
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center mb-6">
      <h1 className="text-indigo-900 text-center font-bold text-4xl mb-4">
        What Our Clients Say About Us
      </h1>
      <div className="bg-amber-500 mx-10 w-14 h-1 mb-16"></div>
      <Carousel autoplay className="sizeCarousel p-8 pb-4 bg-slate-300 rounded-md">

        {testimonialsData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <p className="text-black text-center mb-4">{data.text}</p>
            <div className="flex items-center">
              <FaRegCircleUser className="mr-2" />
              <h1 className="text-indigo-900 font-bold text-lg">{data.name}</h1>
            </div>
            <p className="text-indigo-900">{data.title}</p>
          </div>
        ))}
        </Carousel>
        <br /><br/>
    </div>
  );
};

export default Testimonials;
