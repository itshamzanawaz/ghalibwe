import React from "react";
import Footer from './Footer'
import Image from "next/image";
import Logo from '../logosample.webp'
const Sampless = () => {
    const SamplesData=[
        {
            h1: 'Sample 1',
            src: Logo,
        },
        {
            h1: 'Sample 1',
            src: Logo,
        },
        {
            h1: 'Sample 1',
            src: Logo,
        },
        {
            h1: 'Sample 1',
            src: Logo,
        },
        {
            h1: 'Sample 1',
            src: Logo,
        },
        {
            h1: 'Sample 1',
            src: Logo,
        },
        {
            h1: 'Sample 1',
            src: Logo,
        },
        {
            h1: 'Sample 1',
            src: Logo,
        },
        {
            h1: 'Sample 1',
            src: Logo,
        },
        {
            h1: 'Sample 1',
            src: Logo,
        },
        {
            h1: 'Sample 1',
            src: Logo,
        },
        {
            h1: 'Sample 1',
            src: Logo,
        },]

  return (
    <div className="main absolute">
      <div className="m-12 bg-red-600 p-5 text-white   text-center h-80 flex justify-center items-center flex-col ">
        <h1 className="text-4xl m-8">QUANTITY TAKEOFF SAMPLES</h1>
        <h2 className="text-2xl m-2">
          All Quantity Takeoffs and Estimates are Provided with Mark Up Plans
        </h2>
        <h2 className="text-2xl m-2 ">
          e Price Out Estimates With Vendor-Quoted Zip Code-Based Separate
          Material And Labor Unit Pricing.
        </h2>
      </div>
      <div>
      <div className="flex flex-wrap text-center justify-center items-center align-middle">
      {SamplesData.map((data,index)=> (
        <div key={index} className="m-10 hover:opacity-75 ">
        <h1 className="text-indigo-800 font-bold my-6 text-3xl">{data.h1}</h1>
      <Image src={data.src} alt="sample model" className="my-6" width={200} height={150}/>
      <button className="bg-black text-white my-6 p-2 rounded-md">Download Sample</button>
    </div>
    ))}
      </div>
      </div>
      <Footer />
    </div>

  );
};

export default Sampless;