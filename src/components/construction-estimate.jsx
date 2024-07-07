"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Logo1 from "../bg1.jpg";
import Link from "next/link";

const ConstructionEstimate = () => {
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
              CONSTRUCTION ESTIMATING CONSULTANT
            </h1>
            <p>
              Are you a busy contractor striving to keep up with the complex
              bidding process? Or bidding on wrong jobs? Or missing
              opportunities because your bids are piling up? Our construction
              estimating consultant can help you in beating the competition and
              generating more leads!
            </p>
            <br />
            <div className="flex flex-col sm:flex-row">
              <p>
                With over <strong>1000 satisfied clients</strong> across the{" "}
                <strong>North American </strong>construction industry, Our team
                of estimators and consultants is well-versed with current market
                conditions, different construction techniques, and possess a
                keen eye to detail. They remain committed through all the phases
                of construction and design from budget estimate to construction
                document estimate incorporating advice on
                <strong>
                  {" "}
                  budgeting, filing proposals, choosing contractor,
                  negotiations, value engineering,
                </strong>{" "}
                and <strong>project closeout</strong>.
              </p>
              <p>
                <br />
                &nbsp;
              </p>
              <Image
                src={Logo1}
                width={450}
                height={200}
                alt="industrial"
                className="p-4 width50"
              />
            </div>

            <br />

            <p>
              E-value estimating is a professional cost estimating consulting
              company with a diverse portfolio of commercial, residential, and
              industrial projects serving{" "}
              <strong>
                developers, general contractors, subcontractors, architects,
                home builders, owners,{" "}
              </strong>
              and <strong>lenders.</strong> Our expert estimators digitally
              takeoff the quantities using the latest takeoff software and a
              highly developed construction cost database that supplies
              location-based pricing for labor and material. We follow the
              policies and guidelines of the certified American estimators
              organization like American Association of Cost Engineers
              <strong> (</strong>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/AACE_International"
              >
                <strong>AACE</strong>
              </a>
              <strong>)</strong>&nbsp;and the Australian Institute of Quantity
              Surveyors <strong>(</strong>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aiqs.com.au/"
              >
                <strong>AIQS</strong>
              </a>
              <strong>)</strong>.
            </p>
            <p>
              <br />
              &nbsp;
            </p>

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-12">
              What Services Does Our Estimating Consultant Provide?
            </h1>
            <p>
              Our 15 years of experience and a thorough understanding of the AEC
              industry has enabled us to provide consultancy to our clients to
              develop the understanding of construction cost, various takeoffs
              to foresee and manage their budget. Our services include:
            </p>
            <br />
            <div className="flex flex-col sm:flex-row justify-around">
              <div className="width50">
                <div>
                  <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-12">
                    Feasibility studies
                  </h1>
                  <p>
                    If you are a developer, investor, or owner wondering if your
                    upcoming project is worth investing time, resources, and
                    budget. Our <strong>preliminary estimates</strong>
                    <strong>, feasibility studies, </strong>and
                    <strong> square footage prices </strong>contribute to
                    decision making from economic, legal, scheduling, financial
                    perspectives.
                  </p>
                  <p>
                    <br />
                    &nbsp;
                  </p>
                </div>
                <div>
                  <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-12">
                    Preconstruction & change order management
                  </h1>
                  <p>
                    While planning for a construction project, we understand
                    accurate material takeoff, labor and man-hours are important
                    to you. We ensure the most reliable estimating services and
                    consultancy to GCs, construction managers, and owners
                    regarding{" "}
                    <strong>
                      procurement, value analysis, scheduling, hiring right
                      labor force,{" "}
                    </strong>
                    and<strong> manhours</strong>. The correct labor
                    productivity factors, accurate material takeoff, and pricing
                    contribute to avoiding the hustle of reordering, labor
                    shortage, and waste management.
                  </p>
                  <p>
                    <br />
                    &nbsp;
                  </p>
                  <p>
                    <br />
                    &nbsp;
                  </p>
                </div>{" "}
                <div>
                  <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-12">
                    CPM Scheduling Services
                  </h1>
                  <p>
                    Our CPM consultants collaborate with your project teams to
                    ensure on-time completion of the project by planning
                    activities, measuring progress, quantifying results, and
                    updating to changes throughout the entire lifecycle of the
                    project. We help you choose the most suitable path for the
                    project execution to achieve your project milestones.
                  </p>
                  <p>
                    <br />
                    &nbsp;
                  </p>
                </div>
              </div>

              <div className="width50">
                <div>
                  <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-12">
                    Bidding assistance
                  </h1>
                  <p>
                    You can approach us if you are a contractor who needs
                    assistance with the bidding process. Our team of expert
                    construction estimators not only perform accurate bill of
                    material and create your bids but also provide consultancy
                    regarding <strong>bid filing</strong> and{" "}
                    <strong>tactics to win</strong> and{" "}
                    <strong>negotiate on jobs</strong>. We also contribute to
                    help our clients by{" "}
                    <strong>managing their bidding network profiles.</strong>
                  </p>
                  <p>
                    <br />
                    &nbsp;
                  </p>
                </div>
                <div>
                  <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-12">
                    Litigation assistance
                  </h1>
                  <p>
                    If you are facing a legal dispute in the construction
                    industry related to negligence, negligent misrepresentation,
                    deceptive trade practices, and fraud. We can help. Our
                    estimating consultant employs accurate cost data to resolve
                    conflicts amidst contractors, vendors, designers and owners.
                    You can use our{" "}
                    <strong>
                      independent unbiased estimate with our company’s stamp
                    </strong>{" "}
                    to assist you through intervention, negotiation, testimonies
                    and trials.
                  </p>
                  <p>
                    <br />
                    &nbsp;
                  </p>
                  <p>
                    <br />
                    &nbsp;
                  </p>
                </div>
                <div>
                  <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-12">
                    Project Cost Management
                  </h1>
                  <p>
                    We totally understand the challenges of budget constraints
                    faced by construction companies. Our consultants thoroughly
                    engage with the project teams from planning and design to
                    construction and closeout to estimate, monitor and control
                    costs to achieve the project goals.
                  </p>
                  <p>
                    <br />
                    &nbsp;
                  </p>
                </div>
              </div>
            </div>


            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-12">
            What Trades Do We Deal In?
                  </h1>


<p>We deal in <strong>all CSI divisions</strong> of the construction industry.

</p>



<div className="flex flex-col sm:flex-row"> 



<ul className="list-disc space-y-2 p-4 width50">
<li>Concrete</li>
        <li>Masonry</li>
        <li>Mechanical</li>
        <li>Electrical</li>
        <li>Plumbing</li>
        <li>Ductwork</li>
        <li>HVAC</li>
        <li>Sitework</li>
        <li>Earthwork</li>
        <li>Finishes</li>
</ul>


<ul className="list-disc space-y-2 p-4">
<li>Drywall</li>
        <li>Painting</li>
        <li>Lumber</li>
        <li>Insulation</li>
        <li>Metal</li>
        <li>Structural steel</li>
        <li>Rebar</li>
        <li>Door/Window</li>
        <li>Thermal/moisture protection</li>
        <li>Plastic/wood composites</li>
</ul>


</div>



<h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl  mb-12">
What Scope Of Projects Do We Provide Consultancy For?
                  </h1>





<p>
The scope of our portfolio includes all the kinds of residential, industrial, and commercial cost estimate projects that incorporate:


</p>



<br />

<ul className="list-disc space-y-4 p-4">
    <li>
        <p ><strong>Residential;</strong> townhomes, modular homes, high rises, skyscrapers, complex apartments, and private homes</p>
    </li>
    <li>
        <p ><strong>Commercial;</strong> offices, warehouses, theaters, and sports auditoriums.</p>
    </li>
    <li>
        <p ><strong>Institutional;</strong> educational facilities, healthcare, prisons</p>
    </li>
    <li>
        <p ><strong>Retail;</strong> shopping centers, grocery stores, and restaurants</p>
    </li>
    <li>
        <p ><strong>Industrial;</strong> manufacturing units, food processing, wastewater treatment plants, power, cogeneration, bio-fuels, refinery, petrochemicals, etc.</p>
    </li>
    <li>
        <p ><strong>Civil</strong>; bridges, dams, highways</p>
    </li>
    <li>
        <p >Mining &amp; Marine projects</p>
    </li>
    <li>
        <p >Restoration and repair</p>
    </li>
</ul>





<br />
            <br />
            <div className="bg-slate-200 p-6 flex sm:flex-row flex-col justify-around align-middle items-center rounded-sm mr-4">
              <h1 className="text-indigo-900 text-lg text-center font-bold mb-5">
              WORKING WITH US WE ARE A GLOBAL NETWORK OF CONSTRUCTION COST EXPERTS

              </h1>
              <button className="bg-yellow-400  hover:bg-yellow-200 text-black p-4 w-44">
                Contact Us and get 30% off
              </button>
            </div>





            {/*1  */}
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

export default ConstructionEstimate;
