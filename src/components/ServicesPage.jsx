import React from "react";
import Logo1 from '../bg1.jpg';
import Image from 'next/image'
import ServicesSection2 from "./ServicesSection2";
import Footer from "./Footer";
const ServicesPage = () => {
  return (
    <div className="main absolute">
      <div>
        <h1 className="text-indigo-600 font-semibold text-4xl text-center m-8">
          OUR SERVICES
        </h1>
      </div>

      <div className="flex justify-around flex-wrap">
        <div className="width-flex-sp w-60">
          World Estimating is offering construction cost estimating and material
          takeoff services to its clients who lived in the United States, United
          Kingdom, Canada, Australia and other countries. You can check our
          profile and popularity on The Blue Book.
        </div>
        <div className="width-flex-sp">
          <ul>
            <li>Cost Estimating</li>
            <li>Building Cost Estimating</li>
            <li>Budget Estimating</li>
            <li>Construction Estimating</li>
            <li>Freelance Estimating</li>
          </ul>
        </div>
        <div className="width-flex-sp">
          <ul>
            <li>Dedicated Construction <br /> Estimator</li>
            <li>Construction Takeoff</li>
            <li>Residential Estimating</li>
            <li>Commercial Estimating</li>
          </ul>
        </div>
        <div className="width-flex-sp">
          <ul>
            <li>Industrial Estimating</li>
            <li>Preliminary Estimate</li>
            <li>CPM Scheduling</li>
            <li>Estimating Consultant</li>
            <li>Construction Drafting</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-amber-500 w-28 h-1 m-12"></div>
      </div>


      <div className="flex flex-wrap justify-center items-center">
        <div className="bg-slate-200 flex justify-center items-center flex-col m-4 p-4 w-96">
        <Image width={350} height={350} alt='services' src={Logo1}/>
        <h1 className='text-indigo-600 font-semibold text-lg text-center m-8'>CONSTRUCTION ESTIMATING SERVICES</h1>
        <div className='bg-amber-500 w-14 h-1 mb-8'></div>
        <p>Looking for professionals to get the construction cost estimating for your project? Being an expert company, we are providing commercial, residential, and civil construction estimates. We are having a proven track record of providing the estimates for the house to the big commercial projects.</p>
        </div>
        <div className="bg-slate-200 flex justify-center items-center flex-col m-4 p-4 w-96">
        <Image width={350} height={350} alt='services' src={Logo1}/>
        <h1 className='text-indigo-600 font-semibold text-lg text-center m-8'>CONSTRUCTION ESTIMATING SERVICES</h1>
        <div className='bg-amber-500 w-14 h-1 mb-8'></div>
        <p>Looking for professionals to get the construction cost estimating for your project? Being an expert company, we are providing commercial, residential, and civil construction estimates. We are having a proven track record of providing the estimates for the house to the big commercial projects.</p>
        </div>
        <div className="bg-slate-200 flex justify-center items-center flex-col m-4 p-4 w-96">
        <Image width={350} height={350} alt='services' src={Logo1}/>
        <h1 className='text-indigo-600 font-semibold text-lg text-center m-8'>CONSTRUCTION ESTIMATING SERVICES</h1>
        <div className='bg-amber-500 w-14 h-1 mb-8'></div>
        <p>Looking for professionals to get the construction cost estimating for your project? Being an expert company, we are providing commercial, residential, and civil construction estimates. We are having a proven track record of providing the estimates for the house to the big commercial projects.</p>
        </div>
      </div>



      <div className="flex flex-wrap justify-center items-center w-auto">
        <div className="bg-slate-200 flex-1 flex justify-center items-center flex-col m-4 p-4 width-sp-sect">
        <Image width={450} height={400} alt='services' src={Logo1}/>
        <h1 className='text-indigo-600 font-semibold text-lg text-center m-8'>Outsource Estimation</h1>
        <div className='bg-amber-500 w-14 h-1 mb-8'></div>
        <p className="text-center">We are dealing with the contractors and sub-contractors who requires outsource estimation. We have worked successfully with hundreds of clients who live and work in New York, California, Florida, New Jersey, Massachusetts, Michigan, Pennsylvania, Colorado, Illinois, Maryland, Mississippi, New Hampshire, New Ohio, Texas, and Washington etc.</p>
        </div>
        <div className="bg-slate-200 flex-2 flex justify-center items-center flex-col m-4 p-4 width-sp-sect">
        <Image width={450} height={400} alt='services' src={Logo1}/>
        <h1 className='text-indigo-600 font-semibold text-lg text-center m-8'>Hire a Dedicated Cost Estimator</h1>
        <div className='bg-amber-500 w-14 h-1 mb-8'></div>
        <p className="text-center">We love to provide you a dedicated cost estimator. We can assign an expert individual for your commercial and residential construction projects and you can get benefits from our dedicate cost estimates. We have 15 years of experience as the professional construction cost estimating consultants. Feel free to get the quality estimating consultancy at a low price tag.</p>
        </div>
        
      </div>


      <ServicesSection2 />
      <Footer />
    </div>
  );
};

export default ServicesPage;
