"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Logo1 from "../bg1.jpg";
import Link from "next/link";

const PerliminaryEstimate = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const FAQs = [
    {
      Q: "Services",
      A: "If yes, E-value estimating is here to provide reliable, and cost-efficient construction cost estimating services, construction estimation services, and takeoff services near your locality. We are here with our expert team of construction cost estimators. Further, we have offices in different regions covering North American, Australian, Caribbean, and European regions.",
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
              PRELIMINARY ESTIMATE
            </h1>
            <div className="flex flex-col sm:flex-row">
              <div className="width50">
                <p>
                  Are you somewhere in the range of 30%, 60%, and 90% of your
                  drawing plans? Or frustrated by preparing estimates with
                  incomplete drawing plans? Or in need of a quick preliminary
                  estimate to check if the project is in your client’s budget?
                  Or your suppliers are delaying in quoting prices? We can serve
                  you by providing fast and detailed preliminary estimates with
                  square footage cost to analyze the feasibility of your project
                  and proceed effectively with your clients.
                </p>
                <br />
              </div>
              <Image
                src={Logo1}
                width={350}
                height={200}
                alt="industrial"
                className="p-4 width50"
              />
            </div>
            <p>
              {" "}
              With 15 years of experience in the AEC industry and portfolio in
              commercial, residential, private, and public projects, World
              estimating can promise the most reliable and defensible
              preliminary estimates based on assumptions from the past projects.
              We come up with per square feet or square meter costs for finished
              projects as well as superstructures by utilizing professional
              estimating Software and our developed databases, RS Means and
              Craftsmen. Our location-based database and relations with local
              vendors help in performing the bill of material as accurately as
              possible.
            </p>
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-12">
              What Is A Preliminary Estimate And How It Helps?
            </h1>

            <p>
              A preliminary estimate or conceptual estimate is used to forecast
              the project cost to analyze the economic feasibility of the
              construction project prior to the development of detailed drawing
              plans. It helps contractors, real estate developers, home
              builders, and owners in making decisions for allocating funds,
              setting the preliminary budget and comparing initial design
              alternatives.
            </p>
            <br />
            <p>
              As preliminary cost estimates are carried out at the beginning of
              the project before the actual design and construction, therefore
              they are mainly based on historical data of the projects adjusted
              to the time, location, size, and prepared using engineering
              concepts.
            </p>
            <br />
            <p>
              There are several types of preliminary cost estimates that are
              employed at various stages in the lifecycle of the project. The
              accuracy of these estimates depends on the extent of the
              information provided by the client.
            </p>
            <br />

            <div className="flex flex-col sm:flex-row justify-around">
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-bold text-xl  mb-12">
                  Rough Order Magnitude Estimate
                </h1>
                <p>
                  The first attempt to estimate in the project’s lifecycle is
                  regarded as a rough order magnitude estimate or ROM. It is
                  employed to analyze the feasibility of the project that
                  contributes to the project’s selection and allocation. It has
                  accuracy in the range of -50% to +50%.
                </p>
                <br />
                <h1 className="text-indigo-900 width-estimate-h1 font-bold text-xl  mb-12">
                  Ballpark Estimate
                </h1>
                <p>
                  Ballpark estimate is developed by the contractors to define
                  the scope of work to their clients, so that owners can make
                  decisions according to their budget. It is evaluated on the
                  basis of preliminary drawings and specifications, and its
                  accuracy lies within 20% of the actual cost.
                </p>
              </div>

              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-bold text-xl  mb-12">
                  Budget Estimate
                </h1>
                <p>
                  The budget estimate is prepared using past projects’ data and
                  plans when the project comes into its planning stage. It
                  defines the costs associated with the major components of the
                  projects in each line description including materials and
                  labor costs. Its accuracy lies in the range of -10% to +25% of
                  the actual cost.
                </p>
                <br />
                <h1 className="text-indigo-900 width-estimate-h1 font-bold text-xl  mb-12">
                  Definitive Estimate
                </h1>
                <p>
                  A definitive estimate is also known as a digital cost estimate
                  contains a detailed itemized list of components involved in
                  the project. It is prepared by using thoroughly developed
                  project plans and has an accuracy of -5% to +15%.
                </p>
              </div>
            </div>

            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl w-full mb-12">
              How Can Our Preliminary Estimate Benefit You?
            </h1>

            <p>
              Our estimates can help you in evaluating the initial cost to
              support in:
            </p>

            <ul >
              <li>Managing the budget and getting loans</li>
              <li>
                Setting the project cost limit for Architects and designers
              </li>
              <li>
                Getting the idea of probable amount and cost of material and
                labor
              </li>
              <li>Planning the next phase</li>
              <li>
                Allocating and negotiating with contractors and subcontractors
              </li>
            </ul>

            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl w-full mb-12">
              How Can You Quote A Preliminary Estimate To Your Prospective
              Clients?
            </h1>

            <p>
              Our preliminary cost estimates are based on the floor area which
              makes it easy for your clients and architects to understand and
              interpret the information.
            </p>
            <br />
            <p>Our bill of material comprises of:</p>

            <br />

            <ul className="list-disc space-y-2 p-4">
              <li>
                The total area (square foot or square meter) of the complete
                project
              </li>
              <li>
                Linear measurement (foot or meter) of each structure like walls
                etc.
              </li>
              <li>Area of each unit i.e. rooms, floors, etc.</li>
            </ul>

            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl w-full mb-12">
              What Do You Get In Our Preliminary Estimate?
            </h1>
            <p>
              The estimate consists of the breakdown of quantities, and the
              following divisions are considered:
            </p>

            <ul className="list-disc space-y-2 p-4">
              <li>Preliminaries</li>
              <li>Substructures (footings, foundations, etc.)</li>
              <li>
                Superstructures (brickwork, walls, sidings, roofs, staircase,
                floors, doors, windows)
              </li>
              <li>
                External/Internal finishes (flooring, drywall, painting, etc.)
              </li>
              <li>Fittings</li>
              <li>Mechanical (HVAC systems, ductwork, etc.)</li>
              <li>Plumbing (pipes, drains, fixtures, etc.)</li>
              <li>Electrical (cable, conduit, lighting, etc.)</li>
              <li>Labor</li>
              <li>Man Hours</li>
              <li>Contingency</li>
              <li>Project Schedule</li>
            </ul>
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl w-full mb-5">
              How Do We Prepare A Preliminary Estimate?
            </h1>

            <ul className="list-disc space-y-2 p-4">
              <li>
                First, our estimators study and evaluate the information to
                analyze the scope of the project and produce an estimating plan.
              </li>
              <li>Then, the data of similar past projects is collected.</li>
              <li>
                The adjustments are applied with respect to time, location, and
                size. A contingency is also applied.
              </li>
              <li>
                All the specifications, adjustments, assumptions, are mentioned
                in detail.
              </li>
            </ul>
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl w-full mb-5">
              What Factors Contribute Towards The Right Preliminary Estimates?
            </h1>

            <p>
              While performing a bill of material based on previous projects’
              data, we make assumptions and adjustments with respect to time,
              location, type, and size of the project.
            </p>
            <br />
            <ul className="list-disc pl-4 space-y-4">
              <li>
                We modify the project cost to the time of the start of
                construction because these estimates are calculated two or more
                years in advance to construction therefore cost must be
                identified with respect to the future. It is adjusted using a
                time index which includes relative inflation or deflation with
                respect to time due to factors like labor rates, material costs,
                interest rates, etc.
              </li>
              <li>
                The anticipated project cost is evaluated with respect to
                location as the material, labor rates vary in different parts of
                the country. For this purpose, we employ our location index to
                national average cost to adjust the bill of material for a
                particular region or closest capital city.
              </li>
              <li>
                Project cost is also dependent on the type and size of the
                project. Here, we apply the size factor which relates the
                proposed building area to the typical building area.
              </li>
              <li>
                The quality of the basic material required in the construction
                is also considered eg brick veneer, CMU, framed, etc)
              </li>
            </ul>

            <br />
            <br />

            <div className="flex flex-col sm:flex-row justify-around">
              <div className=" width50">

              <div className="imageofper1">

              <Image
                src={Logo1}
                width={600}
                height={600}
                alt="industrial"
                className="p-4"
                />
                </div>

                </div>


              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl w-full mb-5">
                  What Factors Contribute Towards The Right Preliminary
                  Estimates?
                </h1>
                <ul className="list-disc pl-4 space-y-4">
                  <li>Reliable and precise estimates</li>
                  <li>Affordable estimates</li>
                  <li>Quick turnaround times (24 to 48 hours)</li>
                  <li>Cost-effective monthly takeoff packages</li>
                  <li>
                    Expert estimators certified with American estimator
                    organization like AACE & AIQS
                  </li>
                  <li>24/7 customer support</li>
                </ul>
              </div>
            </div>
            <br /><br />

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl w-full mb-5">
            We Are Eager To Help You With Your Next Estimate!

                </h1>


                <div>
              <ol className="list-decimal list-inside flex sm:flex-row flex-col text-2xl m-4 text-indigo-900 font-semibold">
                <li className="width30">
                  Submit your plans
                  <br />
                  <br />
                  <p className="text-black font-normal text-base p-4">
                    Click here to upload your drawing plans and specifications
                    that can be Bid set, Schematic, Design Development,
                    Construction document, or conceptual drawings in the
                    following formats: .PDF, .TIF, .TIFF,.DXF,. DWF, .DWG, .JPG,
                    .PLN, JPEG, .OSX, .CPC, .DJVU, .CAL
                  </p>
                </li>
                <li className="width30">
                  Get a quote
                  <br />
                  <br />
                  <p className="text-black font-normal p-4 text-base">
                    You will quickly get a quote consisting of the invoice,
                    turnaround time, and delivery date that you can pay via
                    Credit Card or Debit Card or PayPal.
                  </p>
                </li>
                <li className="width30">
                  Receive estimate
                  <br />
                  <br />
                  <p className="text-black font-normal text-base p-4">
                    Estimates will be delivered to you in EXCEL sheets
                    comprising all the material and labor pricing categorized by
                    divisions or CSI costs either in MasterFormat or your
                    customized format.
                  </p>
                </li>
              </ol>
            </div>



            <br />
            <br />
            <div className="bg-slate-200 p-6 flex sm:flex-row flex-col justify-around align-middle items-center rounded-sm mr-4">
              <h1 className="text-indigo-900 text-lg text-center font-bold mb-5">
              Fee Free To Contact Us We Are Always Ready To Help You Out

              </h1>
              <button className="bg-yellow-400  hover:bg-yellow-200 text-black p-4 w-44">
                Call Us and get 30% off
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
                    E-value estimating
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

export default PerliminaryEstimate;
