"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Logo1 from "../bg1.jpg";
import Link from "next/link";

const ConstructionEstimating = () => {
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
      services: "Industrial-Estimating",
    },
    {
      services: "Construction-Takeoff-Service",
    },
    {
      services: "Residential-Estimating",
    },
    {
      services: "Commercial-Estimating",
    },
    {
      services: "preliminary-estimate",
    },
    {
      services: "construction-estimating-consultant",
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
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl mb-4">
              CONSTRUCTION ESTIMATING SERVICES
            </h1>
            <div className="flex sm:flex-row flex-col">
              <p className="text-lg m-6 ml-0">
                E-value estimating has been in the construction estimating
                services business for more than 12 years serving Home Builders,
                General Contractors, Subcontractors, Engineering firms,
                Architects, Designers, Investors, Owners, and Developers with
                highly detailed and precise estimates and material takeoffs. We
                have an in house construction estimating team of professional
                estimators, quantity surveyors, engineers, trade experts, and
                field superintendents proficient in delivering your estimates
                within the fastest turnaround time of 24 to 48 hours.
              </p>
              <Image src={Logo1} width={400} height={50} alt="imsgr" />
            </div>

            <p>
              Normally for the material takeoffs, we deal in all trades and CSI
              divisions of construction including concrete, masonry, electrical,
              mechanical, lumber, plumbing, finishes, and steelwork for all
              industrial, commercial and residential portfolio of projects.
              <br />
              <br />
              <br />
              We provide construction takeoff services in all states of the US,
              Canada, and Australia. Our estimators follow the strict guidelines
              and policies of the certified American estimators organization
              like American Association of Cost Engineers (AACE) and the
              Australian Institute of Quantity Surveyors (AIQS).
            </p>
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-lg mb-4 mt-8">
              E-value estimating Is The One-Stop Solution For All Your
              Construction Estimation Needs!
            </h1>

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-4xl mb-4 mt-8">
              Our Portfolio
            </h1>
            <p>
              We have a diverse portfolio in construction estimates for
              commercial, residential, industrial and civil projects including:
            </p>
            <div className="flex ul-ce sm:flex-row flex-col justify-around p-8 text-lg">
              <ul>
                <li>Multi-use residential</li>
                <li>Healthcare</li>
                <li>Retail</li>
                <li>Parks & recreation centers</li>
                <li>Restaurants</li>
                <li>Offices</li>
              </ul>

              <ul>
                <li>Warehouses</li>
                <li>Educational facilities</li>
                <li>Bridges</li>
                <li>Airports</li>
                <li>Highways</li>
              </ul>
              <ul>
                <li>Wastewater treatment plants</li>
                <li>Cogeneration plants</li>
                <li>Mining & Marine projects</li>
              </ul>
            </div>

            <p>Check more on:</p>
            <div className="flex ul-ce sm:flex-row flex-col p-8 text-lg">
              <ul>
                <li>Residential estimating services</li>
                <li>Commercial estimating services</li>
                <li>Industrial estimating services</li>
              </ul>
            </div>
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl mb-4">
              CONSTRUCTION ESTIMATING SERVICES
            </h1>

            <p>
              <strong>Bid Estimates:</strong> Subcontractors and contractors
              approach us for their bid estimates and filing their proposals for
              public or private projects. We incorporate location-specific
              material, labor pricing data using our developed construction cost
              estimating database. We have provided bid estimates to the
              subcontractors involved in nearly all the trades from airport
              highways to simple mechanical HVAC projects.
            </p>
            <br />

            <p>
              <strong>Design Estimates:</strong> Design estimates and takeoffs
              are generated for projects where there are fewer details and
              specifications. These projects require assumptions supported by
              arguments that are defensible and reliable at the end for clients
              and our estimators are always available to satisfy the client’s
              need at its maximum.
            </p>
            <br />

            <p>
              <strong>Preliminary Estimates:</strong> These are often made
              during the preconstruction phase of the project when it is in the
              design stages or just prior to starting construction. Preliminary
              estimates are useful in getting loans, budgeting for clients, and
              cost-benefit analysis of the land before acquiring and preparing
              cost budget to hire contractors.
            </p>
            <br />

            <p>
              <strong>Conceptual Estimates:</strong> The conceptual estimate and
              takeoff are required during the initial stages where there are
              fewer details and specifications designed for the project and it
              needs to be evaluated for the cost and benefit analysis involving
              the feasibility of the project.
            </p>
            <br />

            <p>
              <strong>Structural steel and MEP shop drawings:</strong> Other
              than estimating services, we also serve contractors,
              manufacturers, and fabricators by providing comprehensive CAD shop
              drawing services to facilitate the manufacture and installation of
              prefabricated components. The software used for CAD drafting is
              Revit, AutoCAD, and Solid Works.
            </p>
            <br />

            <p>
              <strong>Monthly Takeoff Packages:</strong> Contractors save 60% of
              the expense of an in-house construction estimator by signing up
              for our monthly takeoff packages. Our expert estimators are
              proficient with certified estimating software. This enables them
              to easily bid on more projects and so their chance of being
              awarded the job increases.
            </p>
            <br />

            <p>
              <strong>Consultation:</strong> We provide consultation to our
              clients to help them develop an understanding of construction cost
              and budget management. Our services in this regard include
              assistance in bid filing and management of the client’s bidding
              network profile.
            </p>
            <br />

            <h1 className="text-indigo-900 font-bold text-3xl mb-4  m-10 ml-0 width-upload">
              Our Trades
            </h1>

            <p>
              We provide construction estimating services in all CSI divisions.
            </p>

            <div className="flex ul-ce sm:flex-row flex-col justify-around p-8 text-lg">
              <ul>
                <li>Concrete</li>
                <li>Masonry</li>
                <li>Mechanical</li>
                <li>Electrical</li>
                <li>Plumbing</li>
              </ul>

              <ul>
                <li>Flooring</li>
                <li>HVAC</li>
                <li>Sitework</li>
                <li>Interior/exterior finishes</li>
                <li>Drywall</li>
              </ul>

              <ul>
                <li>Painting</li>
                <li>Metals</li>
                <li>Structural steel</li>
                <li>Doors &amp; Windows</li>
                <li>Wood-plastic composites</li>
                <li>Thermal moisture protection</li>
              </ul>
            </div>

            <h1 className="text-indigo-900 font-bold text-3xl mb-4  m-10 ml-0 width-upload">
              Benefits Of Hiring Us
            </h1>
            <p>
              We are experts in construction estimating services, construction
              cost engineering, and material takeoffs. By partnering with us,
              you get the following benefits:
            </p>

            <div className="flex ul-ce sm:flex-row flex-col justify-around p-8 text-lg">
              <ul>
                <li>We offer a quick turnaround time of 24-48 hours.</li>
                <li>We provide highly accurate and comprehensive estimates.</li>
                <li>
                  Our estimates are highly affordable ($200 on average, which
                  can be less or more depending on the scope of work).
                </li>
                <li>
                  Our monthly takeoff packages can save 60% of the expense of an
                  in-house estimator.
                </li>
                <li>
                  The bid winning ratio of our construction estimates is more
                  than 85%.
                </li>
                <li>
                  We provide construction software consultancy and use
                  trade-specific software.
                </li>
                <li>
                  Our certified construction estimators follow the guidelines of
                  credible American estimator organizations like American
                  Association of Cost Engineers (AACE) & Australian Institute of
                  Quantity Surveyors (AIQS).
                </li>
                <li>We provide 24/7 customer support.</li>
              </ul>
            </div>

            <h1 className="text-indigo-900 width-estimate-h1 text-4xl font-bold mb-4">
              Our Construction Estimating Software
            </h1>

            <p>
              We use certified estimating software i.e. Blue Beam, PlanSwift,
              Trimble, IMHS Mark Systems, ProEst, RS Means, Bid Point XL, and
              Quest Estimating. FastPIPE and fastDUCT are used for MEP
              estimates.
            </p>

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl mt-8 mb-4">
              Our Construction Estimating Template
            </h1>

            <div className="flex sm:flex-row flex-col my-8">
              <Image src={Logo1} width={400} height={50} alt="imsgr" />

              <p className="text-lg m-6 ml-0">
                The construction estimating templates that we follow are
                approved by nearly all general contracting leading corporations
                and companies. The top leading construction developers have used
                takeoffs and estimates for documenting bid and supplier
                purposes. As a member of Australian Institute of Quantity
                Surveyors (AIQS) and AACE (American Association of Cost
                Engineers), we ensure accurate, economical, and timely takeoff
                and estimates at your hour of need.
              </p>
            </div>
            <p>
              Our template can be modified as per your needs and can be on
              editable EXCEL sheets. The contractor can also provide his own
              template of material takeoff sheets.
            </p>

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl mt-8 mb-4">
              Our Construction Estimating Process
            </h1>

            <p>
              <strong>Drawing review:</strong> Our estimating process usually
              starts with reviewing the plans and drawings provided by the
              client and meeting of the expert estimators and material takeoff
              experts to discuss the key features of the items and trades to be
              quantified and takeoff.
            </p>
            <br />

            <p>
              <strong>Estimation:</strong> We use certified software i.e.
              Planswift, BlueBeam, OST (OnScreenTakeoff). After careful
              preparation of takeoff and pricing of the trades and specific
              major impact line items. We deliver the estimate and takeoff sheet
              in the client template or in our own template or EXCEL sheets.
            </p>
            <br />

            <p>
              <strong>Pricing:</strong> We usually organize the estimate with
              codes from the drawings or CSI codes, then after offsetting the
              value against each relevant trade and code. We offer zip
              code-based pricing and also accept local vendor pricing. The major
              constraints used for the pricing are political impacts and labor
              wages. Other concerns like material logistics, inflation. Site
              constraints, etc are taken into consideration.
            </p>
            <br />

            <p>
              <strong>Final Audit:</strong> At last, a final audit is performed
              by an expert to ensure the quality of the estimate.
            </p>
            <br />

            <div className="bg-slate-200 flex sm:flex-row flex-col p-8 m-4 items-center">
              <h1 className="text-indigo-900 font-semibold">
                What Are You Waiting For? If You Are Planning To Hire A
                Construction Project Estimator, Then E-value estimating Is The
                Right Option For You To Choose!
              </h1>
              <button className="bg-black p-8 hover:opacity-80 text-white">Contact us today</button>
            </div>
          </div>

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
                  <p className="text-size-wrap"><span>itshamzanawaz@gmail.com</span></p>
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

export default ConstructionEstimating;
