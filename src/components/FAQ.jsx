"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Changed variable name from 'ison' to 'isOpen'
  const FAQs = [
    {
      Q: 'Are you {""} Exploring reliable construction services near me {""}?',
      A: "If yes, world estimating is here to provide reliable, and cost-efficient construction cost estimating services, construction estimation services, and takeoff services near your locality. We are here with our expert team of construction cost estimators. Further, we have offices in different regions covering North American, Australian, Caribbean, and European regions.",
    },
    {
      Q: 'How Can i Accumulate Your Samples?',
      A: "Yes, you can inspect our estimated samples on every different service page of our website. We have done several estimating projects for different clients. Our clients include contractors, subcontractors, developers, architects, residential projects, painting, drywall, framing, and others",
    },
    {
      Q: 'Are you {""} Exploring reliable construction services near me {""}?',
      A: "We are not dealing with projects according to time, and our pricing relies on a per-project basis. Our experts deliver estimates for different busy contractors that demand “on-demand” estimates to complete it. Further, our contractor’s bid is based on a few projects in a month. We provide cost-effective and reliable pricing to save your construction project cost and complete it within a certain time limit.",
    },
    {
      Q: 'Are you {""} Exploring reliable construction services near me {""}?',
      A: "Our estimated time of delivery is between 24 – 48 hours. It depends on the size of a construction project. While the average rate of a construction project lies between 2-4 days. We also manage to deal with different projects that demand quick delivery. You just have to notify us of the bid date, and our professional estimators will assist you accordingly. It costs a minor expedite fee so that things go better. Also, you will receive a quick delivery within a guaranteed date.",
    },
    {
      Q: 'Are you {""} Exploring reliable construction services near me {""}?',
      A: "Yes, it is possible because we are efficient enough to assist in the early stages of planning and design. Our preliminary estimating services deal with clients who only have the idea of building a team. As a result, we estimate the cost of construction so that you can easily work accordingly.",
    },
    {
      Q: 'Are you {""} Exploring reliable construction services near me {""}?',
      A: "World estimating is reliable enough to deal with every sort of possibility to assist clients. There’s no need to worry about anything because our expert estimators can estimate the cost of a project easily. They rely on quantities and drawings given by you.",
    },
    {
      Q: 'Are you {""} Exploring reliable construction services near me {""}?',
      A: "We specialize in every construction domain for estimating. Simply, these domains include commercial, residential and industrial. Similarly, we perform estimates for remodeling and new construction projects.",
    },
    {
      Q: 'Are you {""} Exploring reliable construction services near me {""}?',
      A: "Every construction project is different to get a quote. Our expert team of estimators evaluates your plan after uploading your construction project. You can send your construction plans to info@worldestimating.com. Our general ranges of smaller construction projects begin with the minimum range of $200. Prices vary with the size of a construction project. Our monthly packages begin from $1500 to save you 60% of the estimated expense.",
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the FAQ item's open state
  };
  return (
    <div className="m-20 flex flex-col">
    <h1 className="text-indigo-900 font-bold text-3xl mb-4">FAQ</h1>
    <div className="bg-amber-500 w-14 h-1 mb-10"></div>
    <div className="flex flex-col">
      {FAQs.map((faq, index) => (
        <>
        <div key={index} className="flex bg-slate-500 border-2 border-black text-white space-x-5 p-2">
        <div>  
        <p
            className="border-2 border-white"
            onClick={() => toggleOpen(index)} // Pass index to toggleOpen function
          >
            {openIndex === index ? "-" : "+"} {/* Display +/- based on open state */}
          </p>
          </div>
          <div className="flex flex-col">
          <p>{faq.Q}</p>
          
          </div>
        </div>
        {openIndex === index && ( // Render answer if the current FAQ is open
            <div className={`${openIndex === index && "transition-all"} p-12 bg-white text-black`}>
              {faq.A}
            </div>
          )}
          </>
      ))}
    </div>
    <br/><br/>
  </div>
);
};export default FAQ;
