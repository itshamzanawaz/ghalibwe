import React from "react";
import Footer from "./Footer";
import Logo from "../logosample.webp";
import Image from "next/image";
import GetQuote from "./GetQuote";

const OurTrades = () => {
  const SamplesData = [
    {
      h1: "Sample 1",
      src: Logo,
    },
    {
      h1: "Sample 1",
      src: Logo,
    },
    {
      h1: "Sample 1",
      src: Logo,
    },
    {
      h1: "Sample 1",
      src: Logo,
    },
    {
      h1: "Sample 1",
      src: Logo,
    },
    {
      h1: "Sample 1",
      src: Logo,
    },
    {
      h1: "Sample 1",
      src: Logo,
    },
    {
      h1: "Sample 1",
      src: Logo,
    },
    {
      h1: "Sample 1",
      src: Logo,
    },
    {
      h1: "Sample 1",
      src: Logo,
    },
    {
      h1: "Sample 1",
      src: Logo,
    },
    {
      h1: "Sample 1",
      src: Logo,
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
        <div className="flex flex-wrap text-center justify-center items-center align-middle">
          {SamplesData.map((data, index) => (
            <div key={index} className="m-10 hover:opacity-75 ">
              <h1 className="text-indigo-800 font-bold my-6 text-3xl">
                {data.h1}
              </h1>
              <Image
                src={data.src}
                alt="sample model"
                className="my-6"
                width={200}
                height={150}
              />
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
