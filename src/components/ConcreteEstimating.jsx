"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { FaQuoteRight } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import Footer from "./Footer";

const ConcreteEstimating = () => {
  const [open, isOPen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const [faqOn, setFaqOn] = useState(false)
  const FAQs = [
    {
      Q: "Our Services",
      A: "Word Estimating is a company which provides construction estimating services for are multiple CSI divisions or trades. We are providing accurate and detailed construction cost estimates and material takeoffs services for commercial, residential and industrial projects and our turnaround time is 24 to 48 hours.",
    },
    {
      Q: "Our Clients ?",
      A: "Our aim is to provide the fast and accurate construction estimating services and material takeoffs for contractors, general contractors, sub-contractors and business owners. Our expert construction cost estimators are providing data-driven guidance to our clients throughout the USA. We also work in all other states of different countries such as the United Kingdom, Canada, Australia, Africa etc",
    },
    {
      Q: "Our TurnAround Time",
      A: "You can get an accurate construction estimate from one of our best freelance construction estimator within 24 hrs",
    },
    {
      Q: "How to begin with us",
      A: "Feel free to call us:+1347 480-1903",
    },
  ];
  const FAQs2 = [
    {
      Q: "What type of concrete work do we quantify and estimate?",
      A: "We estimate concrete curbs, slabs, lintels, footers, tie beams, sidewalk, driveway, pavement, basement, foundation, retaining walls, etc. for various commercial, residential, civil, public, and private projects",
    },
    {
      Q: "What do we quantify in our concrete estimate?",
      A: "We provide estimates in each quantity i.e. rebar, stirrups, dowels, anchor bolts, wire mesh, Visqueen, vapor barrier, tie Beams and lintels, headers, sill block, round column block, bond beams, etc.",
    },
    {
      Q: "how much time we normally take to deliver your concrete estimate?",
      A: "A comprehensive concrete estimate and material takeoff will be delivered to you in 24 to 48 hours",
    },
    {
      Q: "How much do we charge for concrete takeoffs and how do we save the estimating expense of concrete contractors?",
      A: "Our prices are very affordable i.e. we charge $200 on average for an estimate, but it depends on the scope of work. Also by subscribing to our monthly takeoff packages, subcontractors save 60% expense of an inhouse estimator.",
    },
    {
        Q: "How contractors can Bid More Win More by attaining our concrete estinmating service",
        A: "We take care of your estimates and takeoffs with a workforce of experienced estimators and quantity surveyors. We strive to provide highly precise estimates so that our clients can focus on the fieldwork and their management can bid on more projects, which increases the chances of winning more work."
    },
    {
        Q: "How do we Ensure the accuracy in our concrete Estimate",
        A: "Our skilled concrete cost estimator takeoff the quantities by using certified software like Bluebeam, Planswift, OST, Quick Bids while maintaining proper standards and codes. Our guarantee for the accurate takeoffs and concrete estimates lies in the fact that our concrete estimator is also a field expert and specialist who has hands-on experience of the fieldwork."
    },
    {
        Q: "What is the format of the deliverables for quantify surveys and estimates",
        A: "The formats of the estimates and takeoffs are pdf and EXCEL files which are customizable sheets. We also provide takeoffs in the client’s required formats."
    }
  ];

  const servicesdata = [
    {
      services: "Concrete-Estimating",
    },
    {
      services: "Electrical-estimating",
    },
    {
      services: "interior-exterior-finishes",
    },
    {
      services: "Masonry-Estimating",
    },
    {
      services: "MEP-Estimating",
    },
    {
      services: "Metals-Estimating",
    },
    {
      services: "openings-estimate",
    },
    {
      services: "Thermal-moisture-protection-estimating",
    },
  ];
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the FAQ item's open state
  };
  const toggleOpen2 = (index) => {
    setOpenIndex2(openIndex2 === index ? null : index); // Toggle the FAQ item's open state
  };

  return (
    <div className="main absolute">
      <div className="m-16">
        {/* main Landing Page start */}

        <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
          CONCRETE ESTIMATING AND TAKEOFF SERVICES
        </h1>
        <br />
        <br />
        <div className="width80 flex justify-between sm:flex-row flex-col-reverse">
          <div>
            {" "}
            <p>
              World estimating thrives in providing division 3, concrete
              estimating services for many years to general contracting
              corporations, concrete contractors, home builders, and real estate
              developers. Usually, contractors involved in the work of
              sidewalks, driveways, paving have to work onsite for carrying out
              the fieldwork and struggle to estimate accurately for bidding
              proposals. We take the responsibility to alleviate their pressure
              by providing them with a thorough and precise concrete estimating
              and takeoff services to aid them in bidding.
            </p>
            <br />
            <p>
              We have a specialized concrete cost estimator for division 3
              trades, certified with the American estimators organizations
              like&nbsp;
              <strong>American Association of Cost Engineers (AACE)</strong>
              &nbsp;and the&nbsp;
              <strong>Australian Institute of Quantity Surveyors (AIQS)</strong>
              &nbsp;for concrete takeoff services.
            </p>
          </div>
          <img
            className="width20"
            src="https://worldestimating.com/wp-content/uploads/2019/12/2-28-705x470.jpg"
            alt=""
          />
        </div>
        <br />
        <br />
        <br />
        <br />

        {/* main Landing Page start */}

        {/* after main landing page */}

        <div className="flex sm:flex-row flex-col sm:w-full justify-between">
          <div className="form-width">
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              WHAT WE QUANTIFY IN OUR CONCRETE ESTIMATING SERVICES?
            </h1>
            <br />
            <p
              className="w-full bg-slate-300 p-4 text-black"
              onClick={() => {
                isOPen(!open);
              }}
            >
              <span className="mx-3 p-1 border-2 border-black">
                {open ? "-" : "+"}
              </span>{" "}
              We quantify following items in our concrete scope
            </p>
            {open && (
              <section
                className={`flex sm:flex-row flex-col  justify-between p-8 bg-slate-200 ${
                  open ? "ease-out transition-all" : "ease-in"
                }`}
              >
                <div>
                  <ul className="list-disc">
                    <li>Sidewalks</li>
                    <li>Driveways</li>
                    <li>Parking Lots</li>
                    <li>Paving</li>
                    <li>Retaining Walls</li>
                    <li>Foundations-Concrete</li>
                    <li>Curbs</li>
                    <li>Structural Rebar</li>
                    <li>Stirrups</li>
                    <li>Dowels</li>
                    <li>Anchors</li>
                    <li>Wire Mesh</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc">
                    <li>Basements</li>
                    <li>Formworks</li>
                    <li>Cast in Place</li>
                    <li>Concrete Repairs</li>
                    <li>Patios</li>
                    <li>Visqueen</li>
                    <li>Tie Beams</li>
                    <li>Lintels</li>
                    <li>Headers</li>
                    <li>Knockouts</li>
                    <li>Shear Walls</li>
                    <li>Decks</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc">
                    <li>Columns</li>
                    <li>Piers</li>
                    <li>Caissons</li>
                    <li>Countertops</li>
                    <li>Slabs on Grade</li>
                    <li>Grading</li>
                    <li>Reinforced Concrete</li>
                    <li>Square Pilasters</li>
                    <li>Round Column Block</li>
                    <li>Lintel Block</li>
                    <li>Bond Beams</li>
                    <li>Sill Block</li>
                  </ul>
                </div>
              </section>
            )}
            <br />
            <br />
            <br />

            <div className="flex flex-col sm:flex-row justify-between">
              <h1 className="font-semibold width50 text-4xl">
                Contact Us Today And Get 30% Off On Your First Cost Estimate!
              </h1>
              <div className="width50 overflow-hidden">
                <img
                  className="hover:scale-125  hover:transition-all"
                  src="https://worldestimating.com/wp-content/uploads/2020/09/masonry-construction-takeoffs-495x400.jpg"
                  alt=""
                />
              </div>
            </div>

            <br />
            <br />
            <br />

            {/* tick list */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              OUR PORTFOLIO IN CONCRETE TAKEOFF SERVICES
            </h1>
            <br />
            <br />
            <div className="flex flex-col sm:flex-row justify-around">
              <ul className="space-y-4">
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Dams
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Bridges
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Residential Buildings
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Commercial Buildings
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Foundations For High Rise Buildings
                </li>
              </ul>
              <ul className="space-y-4">
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Highways
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Driveways
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Culverts And Sewers
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Marine Structures
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Fences
                </li>
              </ul>
            </div>

            <br />
            {/* para */}
            <p>
              rom big construction companies to small businesses, we have served
              many&nbsp;
              <strong>
                general contractors, concrete contractors, asphalt contractors,
                foundation contractors, vendors, and pavers
              </strong>
              &nbsp;with the most accurate and highly detailed concrete
              estimating services and material takeoffs services. We are
              well-reputed for our accuracy in the blue book.
            </p>
            <br />
            <p>
              We have successfully provided concrete takeoff services for&nbsp;
              <strong>
                sidewalk, driveway, retaining walls, concrete pavement,
                waterproofing, parking lots, flatwork, basement, concrete
                foundation, concrete curbs, concrete slabs
              </strong>
              , etc. for various&nbsp;<strong>private</strong>&nbsp;and&nbsp;
              <strong>public</strong>&nbsp;projects.
            </p>

            <br />
            <br />
            <br />
            {/* h1 after para */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              THE RANGE OF CONCRETE ESTIMATING SERVICES
            </h1>
            <br />
            <br />
            <div className="flex flex-col sm:flex-row justify-around">
              <ul>
                <li>
                  <FaCheck className="inline px-2 text-4xl " />
                  Concrete Quantity Takeoffs
                </li>
                <li>
                  <FaCheck className="inline px-2 text-4xl " />
                  Budget &amp; Bid Estimates
                </li>
                <li>
                  <FaCheck className="inline px-2 text-4xl " />
                  Bid Preparation
                </li>
                <li>
                  <FaCheck className="inline px-2 text-4xl " />
                  Design Estimates
                </li>
                <li>
                  <FaCheck className="inline px-2 text-4xl " />
                  Change Order Estimates
                </li>
              </ul>

              <ul>
                <li>
                  <FaCheck className="inline px-2 text-4xl " />
                  Value Engineering
                </li>
                <li>
                  <FaCheck className="inline px-2 text-4xl " />
                  Project Lead Generation
                </li>
                <li>
                  <FaCheck className="inline px-2 text-4xl " />
                  Concrete Contractor Marketing
                </li>
                <li>
                  <FaCheck className="inline px-2 text-4xl " />
                  Expert Witness
                </li>
                <li>
                  <FaCheck className="inline px-2 text-4xl " />
                  Litigation Assistance
                </li>
              </ul>
            </div>

            <br />
            <br />
            <strong>Our deliverables for division 3 trade include:</strong>
            <br />
            <br />

            <ul className="list-disc space-y-4 ml-4">
              <li>Concrete takeoff spreadsheets</li>
              <li>Material, labor &amp; equipment costs</li>
              <li>Man Hours</li>
              <li>Marked up drawing plans</li>
              <li>
                Takeoff summary including total costs for material, labor,
                equipment, overhead, profit, etc
              </li>
              <li>Review of exclusions and inclusions</li>
            </ul>

            <br />
            <br />
            <br />

            {/* 2nd h1 after para */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              WHY YOU SHOULD OUTSOURCE YOUR CONCRETE ESTIMATES?
            </h1>
            <br />
            <div className="border-2 bg-slate-100 border-slate-200 px-12 py-8">
              <p>
                Contractors involved in paving, driveways, and sidewalks are so
                occupied in on-site activities that their busy schedule
                doesn&rsquo;t allow them to perform accurate estimates on their
                own, and eventually, they tend to overbid or underbid on their
                projects.
              </p>
              <br />
              <p>
                When you are trying to bid on the lowest value to secure the
                jobs, you must have a precise estimate for the cost and
                man-hours involved in the project. Outsourcing your construction
                takeoff services to a professional estimating company like ours
                gives you confidence and comes with the following perks:
              </p>
              <br />
              <br />
              <ul className="list-disc space-y-4">
                <li>
                  You don&rsquo;t have to buy expensive construction estimation
                  software and hire and train professional staff for concrete
                  estimating.
                </li>
                <li>
                  You&nbsp;<strong>save on the extra expenses</strong>&nbsp;of
                  hiring a fulltime concrete cost estimator.
                </li>
                <li>
                  It&nbsp;<strong>improves your bid volume.</strong>&nbsp;With
                  the help of professional service, you start bidding on more
                  projects and ultimately winning more projects.
                </li>
                <li>
                  With the assistance of expert estimators, your estimating
                  efficiency is improved which can help in&nbsp;
                  <strong>increasing your profit potential.</strong>
                </li>
                <li>You no longer miss out on any opportunity</li>
              </ul>
            </div>
            <br />
            <br />
            <br />
            <br />

            {/* 3rd h1 after para */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              BENEFITS OF OUTSOURCING YOUR CONCRETE TAKEOFF TO US!
            </h1>
            <br />
            <br />
            <br />
            <div className="border-2 bg-slate-300 border-slate-200 px-12 py-8">
              <p>
                Many concrete contractors approach us for accurate and timely
                preparations of bids to get ahead of their competitors. With us
                you get the following benefits:
              </p>

              <br />
              <br />
              <ul className="space-y-4">
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-200" />
                  Highly accurate concrete estimate and material takeoffs.
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-200" />
                  Our estimates have a&nbsp;
                  <strong>bid winning ratio of more than 92%.</strong>
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-200" />
                  Estimates are delivered in the fastest turnaround time&nbsp;
                  <strong>(24 to 48 hours)</strong>.
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-200" />
                  Our monthly takeoff packages&nbsp;
                  <strong>save you 60%</strong>&nbsp;of the expense of a
                  full-time estimator.
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-200" />
                  Affordable estimates
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-200" />
                  We have a dedicated and expert concrete cost estimator for
                  division 3 concrete trades.
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-200" />
                  We also offer consultation regarding bid filing and managing
                  bidding network profiles of the contractors.
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-200" />
                  We have certified construction estimators with credible
                  accreditations like&nbsp;<strong>AACE, AIQS.</strong>
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-200" />
                  Customer support is available&nbsp;<strong>24/7.</strong>
                </li>
              </ul>
            </div>
            <br />
            <br />
            <br />
            <br />

            {/* offer section */}
            <div className="flex flex-col sm:flex-row flex-wrap">
              <img
              className="width50"
                src="https://worldestimating.com/wp-content/uploads/2022/10/Construction-PNG-Image.png"
                alt="offer"
              />
              <div className="width50">
                <h1 className="text-red-600">Offer :</h1>
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
                  If You Are From Texas Then Get 30% Off On Your First Estimate!{" "}
                </h1>
                <div className="flex justify-around">
                  <button className="bg-yellow-500 text-white rounded-sm p-4">
                    Get a free Quote
                  </button>
                  <button className="bg-black text-white p-4 px-8 rounded-sm">
                    Call us
                  </button>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />

            {/* after offer */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              OUR ESTIMATION PROCESS
            </h1>

            <br />
            <p>
              The concrete estimation process starts with a thorough study of
              drawing plans submitted by the client to identify the scope of
              work. After that, an on-screen takeoff is performed using digital
              software like Bluebeam, Planswift, Accubid, etc. And the
              quantities are imported to EXCEL spreadsheets mentioned with
              detailed line item descriptions.
            </p>
            <br />
            <p>
              <em>
                <strong>
                  Our concrete takeoff spreadsheet comprises the breakdown of
                  all the following quantities:
                </strong>
              </em>
            </p>
            <br />
            <ul className="list-disc space-y-4">
              <li>
                The amount of concrete required for slabs, piers, footings,
                headers, grade beams, tie beams, foundation walls, columns,
                lintels, platforms, steps, etc. It also includes the estimate of
                transportation costs as well as the equipment required eg
                cranes, pumps, mixers, etc.
              </li>
              <li>
                The costs for concrete formwork. It depends on the type of
                formwork, whether you buy or rent, repairs, equipment
                associated, transportation costs, labor, etc.
              </li>
              <li>
                Concrete reinforcements including structural rebar, wire mesh,
                plastic mesh, stirrups, dowels, anchors, etc.
              </li>
            </ul>
            <br />
            <p>
              Man Hours are calculated to find labor costs for skilled and
              unskilled labor. Costs for material, labor, and equipment are
              estimated using&nbsp;<strong>RSMeans</strong>&nbsp;and our
              construction cost database for&nbsp;
              <strong>up to date and zip code based pricing.</strong>&nbsp;If
              required, costs for site preparation or grading are also
              calculated. It includes excavation, leveling, and compaction of
              the soil and transportation, equipment, and labor. And other
              miscellaneous costs are taken into account like storage costs,
              concrete tests, waste, spillage, logistics, etc. Contingency funds
              are also considered which include unforeseen costs, inflation,
              etc.
            </p>
            <br />
            <p>
              A final check is performed by the lead estimator to ensure
              everything fully meets the client&rsquo;s requirements.
            </p>
            <br />
            <br />
            <br />
            <br />

            {/* get a quote riser */}

            <div className="flex flex-col sm:flex-row justify-around">
              <div>
                <h1 className="text-red-500 text-3xl">Bid More, Win More!</h1>
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
                  Get our Concrete Estimating Services to step up your winning
                  game!
                </h1>
              </div>

              <div className="space-y-4">
                <div className="flex">
                  <div className="bg-slate-300 rounded-full w-28 h-12 m-2 flex align-middle justify-center items-center">
                    <LuUpload className="text-2xl " />
                  </div>
                  <div>
                    <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                      Submit Your Plans/ Drawings:
                    </h1>
                    <p>
                      Click here to send us plans and specifications. We will
                      analyze and send you a quote in the next 5 minutes.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-slate-300 rounded-full w-28 h-12 m-2 flex align-middle justify-center items-center">
                    <FaQuoteRight className="text-2xl " />
                  </div>
                  <div>
                    <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                      Get A Quote:
                    </h1>
                    <p>
                      you will receive a quote including invoice, turnaround
                      time, and delivery date. Then, you can pay via credit card
                      or debit card or PayPal.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-slate-300 rounded-full w-28 h-12 m-2 flex align-middle justify-center items-center">
                    <IoNewspaperOutline className="text-2xl " />
                  </div>
                  <div>
                    <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                      Receive Estimate:
                    </h1>
                    <p>
                      you will receive a quote including invoice, turnaround
                      time, and delivery date. Then, you can pay via credit card
                      or debit card or PayPal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            {/* FAQ */}
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              FREQUENTLY ASKED QUESTIONS
            </h1>

<br /><br />


{FAQs2.map((faq, index) => (
              <>
                <div
                  key={index}
                  className="flex bg-slate-500 border-2 border-black text-white space-x-5 p-2 hover:bg-yellow-400"
                >
                  <div>
                    <p onClick={() => toggleOpen2(index)}> {openIndex2 == null ? '+' : '-'} {faq.Q}</p>
                  </div>
                </div>
                {openIndex2 === index && (
                  <div
                    className={`${
                      openIndex2 === index && "transition-all"
                    } p-12 bg-white text-black`}
                  >
                    {faq.A}
                  </div>
                )}
              </>
            ))}
<br />
<br />
<br />
<br />
{/* recent */}

<h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
OUR RECENT PROJECTS
            </h1>

<br /><br />

<p>World estimating has successfully delivered thousands of estimates and quantity takeoffs for concrete work projects. Few of our projects are mentioned below:

</p>
<br />
<div className="flex flex-col sm:flex-row justify-around">


<div className="spacey-4">
<h4 className="text-indigo-900 text-xl font-semibold">Reconfiguration Of USCG San Diego Office, California</h4>
<br />

<p>Preparation of division 3 bid estimate</p>
<br />

<h4 className="text-indigo-900 text-xl font-semibold">Exterior Renovations Of The Church &ndash; Green Tree In Philadelphia, Pennsylvania</h4>
<br />

<p>Preparation of budget estimate</p>
<br />

<h4 className="text-indigo-900 text-xl font-semibold">New Construction Of Trenton High School Cafetorium, Florida</h4>
<br />

<p>Preparation construction document estimate</p>
<br />

<h4 className="text-indigo-900 text-xl font-semibold">Remodeling Of Belle Tower Condominium In Miami Beach, Florida</h4>
<br />

<p>Preparation of bid estimate</p>
<br />

</div>



<div className="spacey-4">
<h4 className="text-indigo-900 text-xl font-semibold">Construction Of Lenox Park &ndash; Amenity Building In Atlanta, Georgia</h4>
<br />

<p>Preparation of concrete bid estimate.</p>
<br />

<h4 className="text-indigo-900 text-xl font-semibold">Renovations For Pearl Street Park In Charlotte, North Carolina</h4>
<br />

<p>Preparation of concrete bid estimate</p>
<br />

<h4 className="text-indigo-900 text-xl font-semibold">Demolition And Renovation Of Tropical Smoothie Cafe In Chicago, Illinois</h4>
<br />

<p>Preparation of budget estimate</p>
<br />

<h4 className="text-indigo-900 text-xl font-semibold">New Construction Of Residential Building In Ash Street, Jersey City</h4>
<br />

<p>Preparation of preliminary estimate</p>
<br />

</div>

</div>









{/* final */}

<div className="border-2 border-slate-200 p-8">
    <p>
    World Estimating provides construction estimating services in North American, Caribbean, African, and Australian regions. In the US, we serve in the following markets: Illinois, Georgia, New York, North Carolina, Minnesota, Colorado, Arizona, Indiana, Louisiana, Maryland, Alabama, Washington, New Jersey, California, Connecticut, Oklahoma, Virginia, Oregon, Nebraska, Alaska, Arkansas, Delaware, MinnesotaIdaho, Iowa, Mississippi, Montana, Nevada, Wyoming, New Hampshire, Utah, Florida, Massachusetts, South Carolina, Texas, Missouri, Kentucky, Pennsylvania, Michigan, Tennessee, Ohio, Wisconsin, Vermont, Hawaii.


    </p>
</div>





            {/*  */}
          </div>
          <br />

          {/*side panel  */}

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

export default ConcreteEstimating;
