import React from "react";

const ServicesSection9 = () => {
  return (
    <div className="bg-slate-200 mt-12 py-12 space-y-12 flex flex-col justify-center items-center">
      <h1 className="text-indigo-900 text-center font-bold text-3xl">Our Clients</h1>
      <div className="bg-amber-500 mx-10 w-14 h-1 mb-20"></div>
<br />
      <ul className="flex text-lg sm:text-xl md:text-2xl lg:text-2xl lg:space-x-32 md:space-x-30 sm:space-x-24 space-x-12 justify-center items-center pb-14">
        <li>
          <ul className="space-y-8 list-disc list-purple">
            <li>General Contractors</li> 
            <li>Homebuilders</li> 
            <li>Subcontractors</li> 
            <li>Developer</li> 
          </ul>
        </li>
        <li>
          <ul className="space-y-8 list-disc list-purple">
            <li>Remodeling Contractors</li>
            <li>Architects</li>
            <li>Engineers</li> {/* Assuming this was intended */}
            <li>Designers</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ServicesSection9;
