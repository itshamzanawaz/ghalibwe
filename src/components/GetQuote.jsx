import React from "react";

const GetQuote = () => {
  return (
    <div className="text-white flex flex-wrap items-center justify-around yellow2 mt-16 px-4">
      <div className="flex flex-col">
        <ul className="yellow-ul text-xl p-12">
          <li>
            Our expert construction cost estimators are working on these all
            trades with full confidence and efforts.
          </li>
          <li>
            {" "}
            We are working with an aim to provide 100% customer satisfaction.
          </li>
          <li> We provide 24/7 cost estimation solutions.</li>
          <li>
            Our dedicated takeoffs services in United States has increased our
            demand in market.
          </li>
        </ul>
        <h1 className="text-center text-md sm:text-base md:text-lg lg:text-xl mb-6">
          Feel free to contact us our experienced team will complete your jobs
          on time with an accurate estimate.
        </h1>
      </div>
      <button className="w-30 lg:w-72 h-20 md:w-56 sm:w-40 bg-slate-900 hover:bg-slate-600 rounded-md">
        {" "}
        GET A QUOTE WITH 30% OFF
      </button>
    </div>
  );
};

export default GetQuote;
