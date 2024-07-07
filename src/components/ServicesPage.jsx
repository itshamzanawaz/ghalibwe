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
          E-value estimating is offering construction cost estimating and material
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
        <img src="https://worldestimating.com/wp-content/uploads/2019/12/Estimating-WsSubtitle-1024x684-1.jpg" alt="" />
        <h1 className='text-indigo-600 font-semibold text-lg text-center m-8'>CONSTRUCTION ESTIMATING SERVICES</h1>
        <div className='bg-amber-500 w-14 h-1 mb-8'></div>
        <p>Looking for professionals to get the construction cost estimating for your project? Being an expert company, we are providing commercial, residential, and civil construction estimates. We are having a proven track record of providing the estimates for the house to the big commercial projects.</p>
        </div>
        <div className="bg-slate-200 flex justify-center items-center flex-col m-4 p-4 w-96">
        <img src="https://worldestimating.com/wp-content/uploads/2019/12/Material-Takeoff.jpg" alt="" />
        <h1 className='text-indigo-600 font-semibold text-lg text-center m-8'>Material Takeoff</h1>
        <div className='bg-amber-500 w-14 h-1 mb-8'></div>
        <p>E-value estimating is offering material takeoff and preliminary quantity takeoff estimates for your commercial, residential and industrial construction projects. We are working with the aim to provide the high quality and accurate estimates at affordable rates.

        .</p>
        </div>
        <div className="bg-slate-200 flex justify-center items-center flex-col m-4 p-4 w-96">
        <img src="https://worldestimating.com/wp-content/uploads/2019/12/CPM-Scheduling-Helps-Keep-Construction-Projects-On-Track-1_mini-862x451-1.jpg" alt="" />
        <h1 className='text-indigo-600 font-semibold text-lg text-center m-8'>Project CPM Scheduling</h1>
        <div className='bg-amber-500 w-14 h-1 mb-8'></div>
        <p>We are providing Critical Path Method scheduling services to our respected clients in the United States, United Kingdom, Canada, and Australia. CPM scheduling is an important necessity for efficient project management. Our customers will get the preparation, analysis, and updating of baseline schedules in it.

        .</p>
        </div>
      </div>



      <div className="flex flex-wrap justify-center items-center w-auto">
        <div className="bg-slate-200 flex-1 flex justify-center items-center flex-col m-4 p-4 width-sp-sect">
        <img src="https://worldestimating.com/wp-content/uploads/2019/12/working-space.png" alt="" />
        <h1 className='text-indigo-600 font-semibold text-lg text-center m-8'>Outsource Estimation</h1>
        <div className='bg-amber-500 w-14 h-1 mb-8'></div>
        <p className="text-center">We are dealing with the contractors and sub-contractors who requires outsource estimation. We have worked successfully with hundreds of clients who live and work in New York, California, Florida, New Jersey, Massachusetts, Michigan, Pennsylvania, Colorado, Illinois, Maryland, Mississippi, New Hampshire, New Ohio, Texas, and Washington etc.</p>
        </div>
        <div className="bg-slate-200 flex-2 flex justify-center items-center flex-col m-4 p-4 width-sp-sect">
        <img src="https://worldestimating.com/wp-content/uploads/2019/12/pexels-photo-842567-1024x682-1.jpeg" alt="" />
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
