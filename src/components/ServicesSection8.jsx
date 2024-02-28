import React from "react";
import { TiTickOutline } from "react-icons/ti";

const ServicesSection8 = () => {
  return (
    <div>
      <h1 className="py-10 text-center text-4xl text-indigo-900">
        Construction Estimate & Quantity Takeoff
      </h1>
      <h5 className="text-center text-2xl">How to begin with us!</h5>
      <div className="flex mx-12 mt-8">
        <div className="flex items-center justify-center bg-slate-500 tick1  mr-8 mb-6">
          <TiTickOutline size={24} color="white" />
        </div>
        <div>
          <h1 className="text-xl text-indigo-800 mb-2">
            Submit Your Drawing Plans
          </h1>
          <p className="width-p-s6">
            After you submit the drawing and specifications, we prepare a quote
            including the invoice, turnaround time, and delivery date. We accept
            PDF format and your plans can be Bid set, Schematic, Design
            Development, Construction document, or conceptual drawings. It can
            be a dropbox link or portal link etc. Attach the file on the contact
            us page and send us complete details by filling out the form.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center mt-12 items-center">
        <button className="w-48 h-20 text-2xl bg-red-700 hover:bg-red-400 text-white text-center">
          upload Plans
        </button>
      </div>
      <div className="flex mx-12 mt-8">
        <div className="flex items-center justify-center bg-slate-500 tick1  mr-8 mb-6">
          <TiTickOutline size={24} color="white" />
        </div>
        <div>
          <h1 className="text-xl text-indigo-800 mb-2">Get A Quote</h1>
          <p className="width-p-s6">
            After reviewing your plans, we will send you the quote within a few
            minutes. If you accept it, you can pay the invoice via credit card,
            debit card, or PayPal. And our team will start working on your
            project.
          </p>
        </div>
      </div>
      <div className="flex mx-12 mt-8">
        <div className="flex items-center justify-center bg-slate-500 tick1  mr-8 mb-6">
          <TiTickOutline size={24} color="white" />
        </div>
        <div>
          <h1 className="text-xl text-indigo-800 mb-2">Receive Estimate</h1>
          <p className="width-p-s6">
            You will receive an estimate that will contain all the material &
            labor quantities with pricing. We deliver our estimate and takeoff
            sheet in EXCEL, our template or the client’s template, as per
            demand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection8;
