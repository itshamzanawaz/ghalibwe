"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Logo1 from "../bg1.jpg";
import Link from "next/link";

const IndustrialEstimating = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const FAQs = [
    {
      Q: "Services",
      A: "If yes, world estimating is here to provide reliable, and cost-efficient construction cost estimating services, construction estimation services, and takeoff services near your locality. We are here with our expert team of construction cost estimators. Further, we have offices in different regions covering North American, Australian, Caribbean, and European regions.",
    },
    {
      Q: "Our Clients ?",
      A: "Yes, you can inspect our estimated samples on every different service page of our website. We have done several estimating projects for different clients. Our clients include contractors, subcontractors, developers, architects, residential projects, painting, drywall, framing, and others",
    },
    {
      Q: "TurnAround Time",
      A: "We are not dealing with projects according to time, and our pricing relies on a per-project basis. Our experts deliver estimates for different busy contractors that demand “on-demand” estimates to complete it. Further, our contractor’s bid is based on a few projects in a month. We provide cost-effective and reliable pricing to save your construction project cost and complete it within a certain time limit.",
    },
    {
      Q: "How to begin with us",
      A: "Our estimated time of delivery is between 24 – 48 hours. It depends on the size of a construction project. While the average rate of a construction project lies between 2-4 days. We also manage to deal with different projects that demand quick delivery. You just have to notify us of the bid date, and our professional estimators will assist you accordingly. It costs a minor expedite fee so that things go better. Also, you will receive a quick delivery within a guaranteed date.",
    },
  ];

  const servicesdata = [
    {
      services: "Cost-Estimating",
    },
    {
      services: "Construction-estimating",
    },
    {
      services: "industrial-estimating",
    },
    {
      services: "Construction-Takeoff-Service",
    },
    {
      services: "residential-estimating",
    },
    {
      services: "commercial-estimating",
    },
    {
      services: "preliminary-estimate",
    },
    {
      services: "estimating-consultant",
    },
  ];
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the FAQ item's open state
  };
  return (
    <div className="main absolute">
      <div className="m-16">
        <div className="flex sm:flex-row flex-col sm:w-full">
          <div className="form-width">
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-12">
              INDUSTRIAL ESTIMATING SERVICES
            </h1>
            <div className="flex flex-col sm:flex-row">
              <div>
                <p>
                  Get our Industrial estimating services to save estimating
                  costs and improve accuracy and have your estimates and
                  takeoffs audited and analyzed by professional construction
                  estimators within the fastest turnaround times.
                </p>
                <br />
                <p>
                  World estimating has used in rendering total estimating
                  solutions to EPC contractors, owners, engineering firms,
                  financial investors, and joint venture partners in the North
                  American industrial sector. Our wide range of industrial
                  estimating services is tailored to the specific needs of the
                  respective clients starting from project planning, through
                  conception and construction.
                </p>
              </div>
              <Image
                src={Logo1}
                width={350}
                height={200}
                alt="industrial"
                className="p-4"
              />
            </div>
            <p>
              {" "}
              Our profound approach to precise estimating procedures gained from
              experience and proficiency in the latest technology, helps them
              anticipate, plan, and effectively control cost throughout the
              entire lifecycle of the project.
            </p>

            <div className="my-8 flex flex-col sm:flex-row justify-around">
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl  mb-12">
                  What We Accept?
                </h1>
                <ul className="list-disc space-y-6">
                  <li>P&IDs, PFDs, Drawing plans & specifications</li>
                  <li>
                    We accept the following formats: .PDF, .TIF, .TIFF, .DXF,.
                    DWF, .DWG, .PLN, .JPG, JPEG, .CPC, .OSX, .DJVU, .CAL
                  </li>
                  <li>Bid deadlines</li>
                  <li>Labor rates; prevailing wages or non-union or union</li>
                </ul>
              </div>
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl  mb-12">
                  What We Deliver?
                </h1>
                <ul className="list-disc space-y-6">
                  <li>
                    EXCEL spreadsheets including Material & labor takeoffs with
                    man-hours, equipment lists and vendor quotes
                  </li>
                  <li>
                    In MasterFormat or UniFormat or by cost codes or your
                    customized format
                  </li>
                  <li>We deliver within 24 to 48 hours</li>
                </ul>
              </div>
            </div>

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-6 ">
              OUR RANGE OF INDUSTRIAL ESTIMATING SERVICES
            </h1>

            <ul className="list-disc space-y-6 pl-8">
              <li>
                Comprehensive quantity takeoffs and cost estimates for all
                divisions
              </li>
              <li>Estimates for quality assurance and quality control</li>
              <li>Expert eye witnesses</li>
              <li>Cold eyes reviews</li>
              <li>Bid Evaluation & Management</li>
              <li>Procurement Services</li>
              <li>Change Order Preparation & Review</li>
              <li>Feasibility Studies</li>
              <li>Risk Analysis</li>
              <li>Productivity Analysis</li>
              <li>Project Scheduling</li>
              <li>Project Cost Management</li>
              <li>Value Engineering</li>
            </ul>

            <div className="flex flex-col sm:flex-row justify-around my-8">
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl  mb-6 ">
                  INDUSTRIAL PROJECT TAKEOFFS
                </h1>
                <ul className="list-disc space-y-6 pl-4">
                  <li>Site work</li>
                  <li>Foundation</li>
                  <li>Structural Steel</li>
                  <li>Mechanical services & Process equipments</li>
                  <li>Electrical services</li>
                  <li>Process piping</li>
                  <li>Instrumentation</li>
                  <li>HVAC systems</li>
                  <li>Hydronic systems</li>
                  <li>Insulation</li>
                  <li>Fireproofing</li>
                  <li>Welding</li>
                  <li>Painting/Coating</li>
                  <li>Asbestos Abatement</li>
                  <li>Floating Production Storage & Offloading</li>
                </ul>
              </div>
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl  mb-6 ">
                  SOFTWARE PROFICIENCY
                </h1>
                <ul className="list-disc space-y-6 pl-4">
                  <li>Planswift</li>
                  <li>Trimble</li>
                  <li>FastPIPE</li>
                  <li>FastDUCT</li>
                  <li>FastWRAP</li>
                  <li>RSMeans</li>
                  <li>Bluebeam</li>
                  <li>ConEst</li>
                  <li>Quest Estimating</li>
                </ul>
              </div>
            </div>

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-6 ">
              OUR PORTFOLIO IN INDUSTRIAL ESTIMATING
            </h1>
            <p>
              We provide cost estimates ranging from maintenance and repair
              tasks to multi-million dollar industrial construction projects
              including{" "}
              <strong>Government and military construction projects.</strong>{" "}
              Our portfolio includes the following industries:
            </p>

            <div className="flex flex-col sm:flex-row my-8">
              <ul className="list-disc space-y-6 pl-4 width50">
                <li>Chemical</li>
                <li>Petrochemical</li>
                <li>Mining & Metals</li>
                <li>Marine</li>
                <li>Drilling Platforms</li>
                <li>Oil & Gas</li>
                <li>Pharmaceutical Plants</li>
                <li>Food Processing</li>
                <li>Hydrocarbon Processing</li>
                <li>Wastewater Plants</li>
              </ul>
              <ul className="list-disc space-y-6 pl-4 width50">
                <li>Bio-fuels</li>
                <li>Refinery</li>
                <li>Refrigeration</li>
                <li>Pumping Stations</li>
                <li>Paper & Pulp</li>
                <li>Polymers</li>
                <li>Fertilizers</li>
                <li>Power Generation</li>
                <li>Packaging</li>
                <li>Manufacturing</li>
              </ul>
            </div>

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-6 ">
              INDUSTRIAL STRUCTURAL STEEL ESTIMATING
            </h1>

            <div className="flex flex-col sm:flex-row my-8 justify-around">
              <p className="width50">
                With the team of estimators and engineers skilled in steel
                estimation, we have successfully catered many structural steel
                contractors and design firms involved in the steel erection for
                multi-story buildings and industrial facilities. By employing
                the best estimating practices, our estimators prepare the
                accurate structural steel estimates that not only help in
                planning, bidding, procurement, but also minimize wastages that
                contribute to the green environment. Our takeoffs contain the
                detailed breakdown of all the structural steel design components
                such as channels, beams, angles, plates, connectors and other
                accessories to give you a clear picture of costs involved in
                your project.
              </p>
              <div className="width50">
                <p>We generally quantify the following components:</p>
                <ul className="list-disc space-y-2 pl-8 mt-4">
                  <li>Rebar</li>
                  <li>Piping</li>
                  <li>Roofing</li>
                  <li>Siding</li>
                  <li>Louvers</li>
                  <li>Platforms</li>
                  <li>Railings</li>
                  <li>Ladders</li>
                  <li>Grating</li>
                </ul>
              </div>
            </div>

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-6 ">
              INDUSTRIAL MECHANICAL ESTIMATING
            </h1>

            <div className="flex flex-col sm:flex-row my-8 justify-around">
              <p className="width50">
                Our expert mechanical estimators have excelled in providing
                detailed material takeoffs, cost estimates, procurement, and
                cost management solutions to facilitate{" "}
                <strong>
                  mechanical contractors, piping contractors, piping and duct
                  fabricators, project managers, and engineering design firms.
                </strong>{" "}
                They are proficient with Planswift, FastPIPE, FastDUCT,
                FastWRAP, Trimble to effectively develop cost proposals and
                prepare competitive bids. You can count on us for professional
                mechanical estimating services customized to your specific needs
                and requirements.
              </p>
              <div className="width50">
                <p>We perform takeoffs for:</p>
                <ul className="list-disc space-y-2 pl-8 mt-4">
                  <li>Ductwork</li>
                  <li>Piping</li>
                  <li>Insulation</li>
                  <li>HVAC Systems</li>
                  <li>Sprinkler Systems</li>
                  <li>Gas Piping Systems</li>
                  <li>Material Conveying Systems</li>
                  <li>Crushing Systems</li>
                  <li>Mechanical Equipment</li>
                  <li>Instrumentation & Controls</li>
                  <li>Welding</li>
                  <li>Pressure Vessels</li>
                  <li>Mechanical Alterations</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row my-8 justify-around">
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-6 ">
                  Insulation Takeoffs
                </h1>
                <ul className="list-disc space-y-4">
                  <li>Pipe Insulation</li>
                  <li>Plumbing &amp; Ductwork Insulation</li>
                  <li>Tank Insulation Systems</li>
                  <li>Equipment Insulation Systems</li>
                  <li>Removable Insulation Systems</li>
                </ul>
              </div>
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-6 ">
                  Piping Takeoffs
                </h1>
                <ul className="list-disc space-y-4">
                  <li>Process Piping</li>
                  <li>Power Piping</li>
                  <li>Coal Piping</li>
                  <li>Refrigeration Piping</li>
                  <li>Gas Piping Systems</li>
                </ul>
              </div>
            </div>

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-6 ">
              OUR SYSTEMATIC APPROACH TO INDUSTRIAL ESTIMATING
            </h1>
            <div className="flex flex-col sm:flex-row ">
              <Image
                src={Logo1}
                width={350}
                height={200}
                alt="industrial"
                className="p-4 width50"
              />
              <p>
                The estimation process at world estimating starts with the
                discussion of the estimators and engineers to define the scope
                of the project. This involves a keen analysis of specifications
                and plans provided by the client to breakdown the specific
                elements and identify the process systems and potential missing
                information. Then by using the latest software, our expert
                estimator extracts the data from drawing plans, P&IDs, PFDs to
                quantity each component for labor and material takeoffs.
              </p>
            </div>
            <br />

            <p>
              We employ zip code based pricing for material and labor, using
              RSMeans and our developed database compiled from world cost data,
              trade agencies, various vendors, architects, and engineers. All
              the factors like location, logistics, permits, equipment rentals,
              contingencies, and various indirect costs are also taken into
              consideration. At last, a cross-check is performed by the lead
              estimator to assure that the estimate fully complies with the
              project goals.
            </p>
            <br />
            <p>
              In addition to providing the most accurate and reliable cost
              estimates, we have developed strategic estimating systems to
              ensure the project runs smoothly within budget and time
              constraints. This covers the estimating reports for project
              controls, procurement, contracts, and construction which gets
              updated throughout the life cycle of the project. Our deliverables
              include detailed EXCEL spreadsheets in MasterFormat or UniFormat
              containing material and labor takeoffs along with man-hours. The
              template can be customized as per the client’s needs.
            </p>

            <br />
            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-6 ">
              OUTSOURCE YOUR INDUSTRIAL ESTIMATES TO US
            </h1>

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-md  mb-6 ">
              We Guarantee:
            </h1>



            <div className="flex flex-col sm:flex-row my-8 justify-around">
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl  mb-6 ">
                  Accuracy{" "}
                </h1>
                <ul className="list-disc space-y-4">
                  <li>
                  Estimators certified with the American Association of Cost Engineers (AACE) and the Australian Institute of Quantity Surveyors (AIQS).

                  </li>
                  <li>
                  Comparison and customization with past project’s data

                  </li>
                </ul>
                <br /><br />
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl  mb-6 ">
                Certified Estimators
                </h1>
                <ul className="list-disc space-y-4">
                  
                  <li>
                  Estimators certified with the American Association of Cost Engineers (AACE) and the Australian Institute of Quantity Surveyors (AIQS).

                  </li>
                </ul>
                <br /><br />

                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl  mb-6 ">
                Quick Turnarounds
                </h1>
                <ul className="list-disc space-y-4">
                  
                  <li>
                  Estimates delivered within 24 to 48 hours.

                  </li>
                </ul>
                <br /><br />

              </div>
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl  mb-6 ">
                Efficiency                </h1>
                <ul className="list-disc space-y-4">
                  
                  <li>
                  Software proficiency

                  </li>
                  <li>
                  Estimating solutions with incomplete data

                  </li>
                </ul>
                <br /><br />

                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl  mb-6 ">
                Cost-effective Solutions
                </h1>
                <ul className="list-disc space-y-4">
                  
                  <li>
                  Affordable estimates. Click here to check prices.

                  </li>
                
                </ul>
                <br /><br />

                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl  mb-6 ">
                24/7 customer support
                </h1>
                <ul className="list-disc space-y-4">
                  
                  <li>
                  Chat and Email support available

                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="bg-slate-200 p-6 flex sm:flex-row flex-col justify-around align-middle items-center rounded-sm mr-4">
              <h1 className="text-indigo-900 text-lg text-center font-bold mb-5">
              We Also Ensure That The Estimates Are Prepared In A Structured Format Those Results In An Accurate And Complete Estimate.

              </h1>
              <button className="bg-yellow-500  hover:bg-yellow-800 text-white p-4 w-72">
                Get Estimates with 30% off
              </button>
            </div>
            {/*  */}
          </div>

          {/* 











*/}
          <div className="width-details">
            <button className="bg-yellow-500 text-xl p-4 w-full">
              View Our Portfolio
            </button>
            <br />
            <br />

            <h1 className="text-indigo-900 text-3xl font-bold mb-5">
              Our Services
            </h1>

            {servicesdata.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex bg-slate-500 border-2 border-black text-white space-x-5 p-2 hover:bg-yellow-400"
                >
                  <div className="flex flex-col text-center ">
                    <Link href={`/${data.services}`}>
                      <p>{data.services}</p>
                    </Link>
                  </div>
                </div>
              );
            })}

            <br />
            <br />
            <br />
            <br />

            {FAQs.map((faq, index) => (
              <>
                <div
                  key={index}
                  className="flex bg-slate-500 border-2 border-black text-white space-x-5 p-2 hover:bg-yellow-400"
                >
                  <div>
                    <p onClick={() => toggleOpen(index)}>{faq.Q}</p>
                  </div>
                </div>
                {openIndex === index && (
                  <div
                    className={`${
                      openIndex === index && "transition-all"
                    } p-12 bg-white text-black`}
                  >
                    {faq.A}
                  </div>
                )}
              </>
            ))}

            <div className="sticky top-48 mt-8">
              <div className="my-2 text-sm ">
                <h1 className="bg-red-600 text-white text-2xl font-semibold p-6">
                  Call us Today
                </h1>

                <div className="bg-slate-200 border-2 border-black space-y-4 p-2">
                  <h1 className="text-indigo-500 font-bold text-2xl">
                    World Estimating
                  </h1>
                  <p>+923220264464</p>
                  <p className="text-size-wrap">
                    <span>itshamzanawaz@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndustrialEstimating;
