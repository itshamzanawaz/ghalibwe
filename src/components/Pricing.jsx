"use client";
import React, { useState } from "react";

import Footer from "./Footer";
const Pricing = () => {
  const [openIndex, setOpenIndex] = useState(null); 
    const FAQs = [
        {
          Q: 'Services',
          A: "If yes, E-value estimating is here to provide reliable, and cost-efficient construction cost estimating services, construction estimation services, and takeoff services near your locality. We are here with our expert team of construction cost estimators. Further, we have offices in different regions covering North American, Australian, Caribbean, and European regions.",
        },
        {
          Q: 'Our Clients ?',
          A: "Yes, you can inspect our estimated samples on every different service page of our website. We have done several estimating projects for different clients. Our clients include contractors, subcontractors, developers, architects, residential projects, painting, drywall, framing, and others",
        },
        {
          Q: 'TurnAround Time',
          A: "We are not dealing with projects according to time, and our pricing relies on a per-project basis. Our experts deliver estimates for different busy contractors that demand “on-demand” estimates to complete it. Further, our contractor’s bid is based on a few projects in a month. We provide cost-effective and reliable pricing to save your construction project cost and complete it within a certain time limit.",
        },
        {
          Q: 'How to begin with us',
          A: "Our estimated time of delivery is between 24 – 48 hours. It depends on the size of a construction project. While the average rate of a construction project lies between 2-4 days. We also manage to deal with different projects that demand quick delivery. You just have to notify us of the bid date, and our professional estimators will assist you accordingly. It costs a minor expedite fee so that things go better. Also, you will receive a quick delivery within a guaranteed date.",
        }
      ];
    
    const servicesdata = [{
        services: 'cost-estimating',
    },
    {
        services: 'cost-estimating',
    },
    {
        services: 'cost-estimating',
    },
    {
        services: 'cost-estimating',
    },
    {
        services: 'cost-estimating',
    },
    {
        services: 'cost-estimating',
    },
]
const toggleOpen = (index) => {
  setOpenIndex(openIndex === index ? null : index); // Toggle the FAQ item's open state
};
  return (
    <div className="main absolute">
      <div className="m-16">
        <div className="flex sm:flex-row flex-col sm:w-full">
          <div className="form-width mx-8">
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl mb-4">
              OUR PRICING
            </h1>
            <p className="text-lg m-6 ml-0">
              Striving to provide you highly competitive market rates so that
              you can <span className="font-bold">“BID MORE WIN MORE”</span>
            </p>
            <h1 className="text-indigo-900 font-bold text-xl mb-4 m-10 ml-0 width-upload">
              Accuracy
            </h1>
            <p>
              We totally understand accuracy is important to you to achieve your
              project goals. We promise highly accurate estimates by employing
              up to date{" "}
              <span className="font-bold">
                zip code based material and labor costs
              </span>{" "}
              using RSMeans and our developed cost database.
            </p>
            <h1 className="text-indigo-900 font-bold text-xl mb-4  m-10 ml-0 width-upload">
              Quick turnaround times
            </h1>
            <p>
              We are rated as the most efficient estimating service in the
              market. We deliver estimates within{" "}
              <span className="font-bold">24 to 48 hours</span> but our
              turnaround time is usually dependent upon the scope of work. This
              does not apply to complex industrial project estimates.
            </p>
            <h1 className="text-indigo-900 font-bold text-xl mb-4  m-10 ml-0 width-upload">
              Affordablity
            </h1>
            <p>
              Due to huge estimation staff in our office, we guarantee very
              affordable rates that are less than the market. Our charges are
              dependent upon the scope of work and vary from project to project.{" "}
              <br /> <br /> We don’t charge extra for amendments and reviews.{" "}
              <br /> <br /> Our quotes are 95 % acceptable by our clients and we
              encourage them to close deals with negotiations. <br /> <br />{" "}
              Here is the general idea of our average price range for a specific
              category of project, but we urge you to upload plans to get a
              clear idea of price for your specific project needs.
            </p>
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl mb-4">
              Single Trade Pricing
            </h1>
            <h1 className="text-indigo-900 inline font-bold text-xl mb-4  m-10 ml-0 width-upload">
              Specific trade takeoff
            </h1>
            <h1 className="text-indigo-900 inline width-estimate-h1 font-bold text-3xl  my-8">
              $200 Approx.
            </h1>
            <br />
            <br />
            <br />
            <p className="text-red font-semibold">
              We charge less (within $100) for small projects that require a few
              hours to get estimated.
            </p>
            <div className="m-10  text-center">
              <button className="p-8 font-semibold text-center text-xl text-white bg-red-600">
                upload plans
              </button>
            </div>
            <h1 className="text-indigo-900 inline font-bold text-xl mb-4  m-10 ml-0 width-upload">
              After uploading the plans, fill out the form on the contact page.
              We will quote you in the next 5 minutes after reviewing your
              plans.
            </h1>
            <br />
            <br />
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl mb-4">
              PRICING FOR RESIDENTIAL & COMMERCIAL ESTIMATES
            </h1>
            <br />
            <br />
            <p className="text-red font-semibold">
              Our Rates Depend Upon The Scope And Size Of The Project <br />
              <br />
              Upload Plans In The Below Button, We Will Review And Quote In A
              Minute.
            </p>
            <br />
            <br />
            <br />

            <br />
            <br />
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl mb-4">
              PRICING FOR INDUSTRIAL ESTIMATES
            </h1>
            <div className="flex ">
              <div>
                <p>
                  For the industrial scope of projects, you are required to
                  upload plans in the below link, our senior engineers and
                  estimators will review the Scope of Work along with the plans.
                  Only then we will send you the quote for your industrial
                  tenders/bids. You will get the quote based on invoice,
                  turnaround time, and delivery date in the next 5 minutes.
                </p>
                <br />
                <button className="p-8 mx-4 font-semibold text-center text-xl text-white bg-red-600">
                  upload plans
                </button>
              </div>
              <div className="text-center flex flex-col">
                <p>
                  Contact us at{" "}
                  <span className="font-bold">+1 (347) 480-1903</span>Or you can
                  schedule a call or web meeting with our senior estimator to
                  discuss your specific needs and goals.
                </p>
                <br />
                <button className="p-8 mx-4 font-semibold text-center text-md text-white bg-red-600">
                  schedule a meeting
                </button>
              </div>
            </div>
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl mb-4">
              PRICING FOR INDUSTRIAL ESTIMATES
            </h1>
            <br />
            <br />
            <p>
              We utilize Quickbooks Online Payments to secure the privacy of
              your financial information so that you can comfortably pay via
              your Credit Card or Debit Card or PayPal. After receiving your
              plans and analyzing your project specifications, we send a quote
              comprising the Quickbooks Invoice and delivery date. If you accept
              the quote, you can simply pay through your mobile phone, desktop
              or call us to proceed with the payment at +1 (347) 480-1903.
            </p>

            <br />
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl mb-4">
              MONTHLY CONSTRUCTION TAKEOFF PACKAGES
            </h1>
            <br />
            <br />
            <p>
              Are you struggling to streamline the quantity takeoff/construction
              estimate process in order to submit bids on time? Our monthly
              takeoff packages really help small contractors or startup
              contracting companies. Usually for specific trade contractors like
              Mechanical, Electrical, Plumbing, Civil Contractors, etc.
            </p>
            <br />
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl mb-4">
              Advantages of Monthly Packages
            </h1>
            <br />
            <br />
            
              <ul>
                <li>
                  Save overheads and cut down estimation costs (in-house
                  estimator salary) by 60%.
                </li>
                <br />
                <br />
                <li>
                  With quick turnaround times of 24 to 48 hours, meet the bid
                  deadlines and no more piling up of bids
                </li>
                <br />
                <br />
                <li>Ensure accuracy of up to 100%</li>
                <br />
                <br />
                <li>
                  Make competitive bids by acquiring expert estimator services.
                </li>
              </ul>
              <br />
              <br />
             <span> Call us today at 347 480-1903 to discuss.</span>
            
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl mb-4">
              DEDICATED CONSTRUCTION ESTIMATOR
            </h1>
            <p>
              For startup contractors and construction companies like trade
              specific contractors i.e. MEP, civil, finishes, drywall, lumber
              and Insulation contractors, etc.
              <br />
              <br />
              If you are struggling with estimation expenses and your in-house
              estimator costs huge expenses.
              <br />
              <br />
              E-value estimating offers a dedicated construction estimator who
              will work for you in our office, provided with 24/7 customer
              support <br />
              <br />
            </p>
            <h1 className="text-red width-estimate-h1 font-bold text-2xl mb-4">
              Starting From $1500 Per Month
            </h1>

            <span className="my-6 font-bold">Features:</span>

            <ol>
              <li className="my-2">
                A Dedicated estimator committed to work just for you.
              </li>
              <li className="my-2">
                Provide thorough support even on weekends.
              </li>
              <li className="my-2">
                Customized services i.e we can use your CSI format, cost codes,
                material codes if you want.
              </li>
              <li className="my-2">
                Detailed takeoffs with properly defined line items with
                marked-up plans. (CHECK SAMPLE)
              </li>
              <li className="my-2">
                Estimates prepared with such detail as compared to as-built
                conditions.
              </li>
              <li className="my-2">
                RSMeans Zip-code based pricing for labor and material.
              </li>
              <li className="my-2">
                24/7 Customer Support on email & live chat.
              </li>
            </ol>
            <div className="bg-slate-200 border-2 m-6 p-6 flex sm:flex-row flex-col justify-center items-center">
              <h1 className="text-indigo-600">
                What Are You Waiting For? If You Are Planning To Hire A
                Construction Project Estimator, Then E-value estimating Is The
                Right Option For You To Choose!
              </h1>
              <button className="p-6 bg-yellow-500 m-6">
                Contact us Get 30% off
              </button>
            </div>
          </div>

          <div className="width-details">
            <button className="bg-yellow-500 text-xl p-4">
              View Our Portfolio
            </button>
            <br />
            <br />
            {servicesdata.map((data,index) => {
              return (
                <div
                  key={index}
                  className="flex bg-slate-500 border-2 border-black text-white space-x-5 p-2 hover:bg-yellow-400"
                >
                  <div className="flex flex-col text-center ">
                    <p>{data.services}</p>
                  </div>
                </div>
              );
            })}

            <br/><br/><br/><br/>

            {FAQs.map((faq, index) => (
              <>
                <div key={index} className="flex bg-slate-500 border-2 border-black text-white space-x-5 p-2 hover:bg-yellow-400">
                  <div>
                    <p
                      onClick={() => toggleOpen(index)}
                    >
                      {faq.Q}
                    </p>
                  </div>
                </div>
                {openIndex === index && (
                  <div className={`${openIndex === index && "transition-all"} p-12 bg-white text-black`}>
                    {faq.A}
                  </div>
                )}
              </>
            ))}
                  
                  <div className='my-10 text-center '>
                  <h1 className='bg-red-600 text-white text-2xl font-semibold p-6'>Call us Today</h1>
                  <div className="bg-slate-200 border-2 border-black space-y-4 p-12">
                  <h1 className="text-indigo-500 font-bold text-2xl">
                  E-value estimating</h1>
                  <p>+923220264464</p>
                  <p>itshamzanawaz@gmail.com</p>
                  </div>
                  </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
