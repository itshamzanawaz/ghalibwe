import React from "react";
import Footer from "./Footer";
import Logo from "../logosample.webp";
import Image from "next/image";
import GetQuote from "./GetQuote";

const OurTrades = () => {
  const SamplesData = [
    {
      h1: "CONCRETE",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/Concrete-Work.jpg',
    },
    {
      h1: "MASONRY",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/Masonry-Takeoff-2.jpg',
    },
    {
      h1: "METALS",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/Metal-Work.jpg',
    },
    {
      h1: "WOOD PLASTIC",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/Yellow.jpg',
    },
    {
      h1: "Thermal/Moisture",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/2-5.jpg',
    },
    {
      h1: "OPENINGS",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/door-opening.jpg',
    },
    {
      h1: "FINISHES",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/interior-finshes.jpg',
    },
    {
      h1: "ELECTRICAL",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/2-4.jpg',
    },
    {
      h1: "PLUMBING",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/plumbing1.jpg',
    },
    {
      h1: "MECHANICAL",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/mep2.jpg',
    },
    {
      h1: "FIRE SUPPRESSION",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/FAS.jpg',
    },
    {
      h1: "EARTHWORK",
      src: 'https://worldestimating.com/wp-content/uploads/2019/12/earth-work.jpg',
    },
  ];

  return (
    <div className="main absolute">
      <div>
        <h1 className="text-indigo-600 font-semibold text-4xl text-center m-8">
          CSI TRADES ESTIMATING
        </h1>
      </div>

      <div className="flex justify-around flex-wrap">
        <div className="width-flex-sp w-96 p-6">
          World Estimating services provides Construction cost estimates in all
          CSI trades of construction you can see our trades in the right
          columns. Our Construction estimators are well equipped and hands-on
          with every aspect of the takeoffs and pricing of the 16 CSI trades
          having past experience of dealing with industrial, hospitality,
          retail, commercial and residential projects. World Estimating hold a
          supreme past of serving GC’s working with specific organization like
          MTA and Subcontractors with quality cost consultancy. You can check
          our Blue Book business profile or directly call us at: 347 480-1903
        </div>
        <div className="width-flex-sp">
          <ul>
            <li>Concrete Estimating</li>
            <li>Masonry Estimating</li>
            <li>Metals Estimating</li>
            <li>Wood & Plastic Composites</li>
            <li>Thermal Protection</li>
          </ul>
        </div>

        <div className="width-flex-sp">
          <ul>
            <li>Sitework Estimating</li>
            <li>Openings Estimating</li>
            <li>Interior & Exterior Finishes</li>
            <li>Electricalt</li>
            <li>MEP (HVAC)</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-amber-500 w-28 h-1 m-12"></div>
      </div>

      <div>
        <div className=" flex flex-wrap text-center justify-center items-center align-middle">
          {SamplesData.map((data, index) => (
            <div key={index} className="w-48 m-10 hover:opacity-75 ">
              <h1 className="text-indigo-800 font-bold my-6 text-3xl">
                {data.h1}
              </h1>
              <img src={data.src} alt="" className="w-44"/>
              <button className="bg-black text-white my-6 p-2 rounded-md">
                Download Sample
              </button>
            </div>
          ))}
        </div>
      </div>
      <GetQuote />
      <Footer />
    </div>
  );
};

export default OurTrades;
