"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { FaQuoteRight } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import Footer from "./Footer";

const Masonry = () => {
  const [open, isOPen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const [faqOn, setFaqOn] = useState(false);
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
      Q: "What do we estimate in masonry construction?",
      A: "We quantify each and everything in the masonry trade with details and descriptions from concrete block, brick, stone, architectural precast, tile, marble. For Block masons, we provide knockouts, regular block, headers, bond beam, lintel block, mortar, sand, round column block, square pilasters, angle block, and sill block.",
    },
    {
      Q: "What is included in our masonry portfolio of projects?",
      A: "From Private to public institutions we have provided our masonry estimating services for all commercial and residential projects.",
    },
    {
      Q: "How much time do we take to deliver your masonry works estimate?",
      A: "We normally take 24 to 48 hours to prepare and deliver your estimate on time",
    },
    {
      Q: "How much do we change for a masonry estimate?",
      A: "Our prices are very affordable. We charge $200 on average but it varies depending on the scope of the work required.",
    },
    {
      Q: "What is the format of the deliverables for masonry takeoff?",
      A: "We deliver masonry takeoffs in EXCEL sheets either in our format or your customized format.",
    },
    {
      Q: "Why are Concrete and masonry contractors using our masonry estimating services?",
      A: "For beating your competitors in reaching the exact figures, and underbidding and tightening up your bid, many contractors reach to us accurate and timely preparations of bids in all concrete and masonry works.",
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
          MASONRY ESTIMATING SERVICES
        </h1>
        <br />
        <br />
        <div className="width80 flex justify-between sm:flex-row flex-col-reverse">
          <div>
            {" "}
            <p>
              If you are searching for the{" "}
              <strong>best masonry estimating services</strong>, World
              estimating is at your service. With years of diversified
              experience in the estimation industry, we have excelled in
              delivering timely and most accurate estimates in the North
              American, Australian, and Caribbean regions.
            </p>
            <br />
            <p>
              Our expert masonry cost estimator, having practical knowledge of
              masonry works, quantify each and every detail in{" "}
              <strong> division 4</strong>, masonry trade including all types
              and configurations of bricks, CMU walls, clay and glass masonry,
              mortar and grout, brick veneer, bond beams, lintels, facing
              bricks, insulation, flashing, masonry reinforcement, masonry
              restoration, transportation, labor costs, and man-hours involved.
            </p>
            <br />
            <p>
              Our team of construction estimators ensures quality and accuracy
              with the use of the right software i.e.{" "}
              <strong>AccuBid, Planswift, and Bluebeam</strong>, and follows the
              policies and guidelines of the certified American estimators
              organization like American Association of Cost Engineers (AACE)
              and the Australian Institute of Quantity Surveyors (AIQS).
            </p>
          </div>
          <img
            className="width20"
            src="https://worldestimating.com/wp-content/uploads/2019/12/2-26-495x400.jpg"
            alt=""
          />
        </div>
        <br />
        <p>
          Apart from masonry takeoff services, we also offer{" "}
          <strong>masonry brick wall 3d designing services.</strong>
        </p>
        <br />
        <br />
        <br />
        <br />

        {/* main Landing Page start */}

        {/* after main landing page */}

        <div className="flex sm:flex-row flex-col sm:w-full justify-between">
          <div className="form-width">
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              THE RANGE OF MASONRY ESTIMATING SERVICES
            </h1>
            <br />
            <p>
              With practical knowledge and years of experience in the AEC
              industry, we have aced in preparing timely and accurate estimates
              for masonry works to the respective clients i.e. general
              contractors, masonry contractors, masonry repair contractors,
              vendors, masons, developers, architects, designers, home builders.
            </p>
            <br />
            <p>
              Our services are designed relative to the specific needs of our
              clients. <strong> Our deliverables generally include:</strong>
            </p>
            <br />
            <ul className="pl-4 m-2 space-y-4 list-disc">
              <li>EXCEL spreadsheet</li>
              <li>3D wall renderings with many views</li>
              <li>Labor and material rates</li>
              <li>Man Hours</li>
              <li>Color-coded plans</li>
              <li>
                Detailed summary comprising material lay rate and unit costs.
                labor rates, crew size, equipment, overhead, profit percentage,
                etc.
              </li>
              <li>Review of addendums</li>
            </ul>
            <br />
            <br />
            <br />

            <div className="flex flex-col sm:flex-row flex-wrap justify-around">
              <ul className="space-y-4">
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Masonry Quantity Takeoffs
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Design Estimates
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Budget Estimates
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Bid Estimates
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Bid Submittal Preparation
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Proposal Preparation & Pricing
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Expert Witness
                </li>
              </ul>

              <ul className="space-y-4">
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Masonry Restoration Estimates
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Change Order Estimates
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Masonry Consulting
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Masonry Contractor Marketing
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Project Lead Generation
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Value Engineering
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Masonry Brick Wall 3D Designing Services
                </li>
              </ul>
            </div>
            <br />
            <br />
            <br />

            <div className="flex flex-col sm:flex-row justify-between">
              <h1 className="font-semibold width50 text-4xl">
                Contact Us Today And Get 30% Off On Your First Masonry Estimate!
              </h1>
              <div className="width50 overflow-hidden">
                <img
                  className="hover:scale-125  hover:transition-all"
                  src="https://worldestimating.com/wp-content/uploads/2021/01/Masonry-Takeoff-Services-495x400.jpg"
                  alt=""
                />
              </div>
            </div>

            <br />
            <br />
            <br />

            {/* list */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              WHAT DO WE TAKEOFF IN THE DIVISION 4 MASONRY TRADE?
            </h1>
            <br />
            <br />

            <div className="flex flex-col sm:flex-row flex-wrap justify-around">
              <ul className="pl-4 m-2 space-y-4 list-disc">
                <li>CMU Masonry</li>
                <li>Glass unit masonry</li>
                <li>Clay unit masonry</li>
                <li>Architectural &amp; glazed masonry</li>
                <li>Stonemasonry walls</li>
                <li>Granite</li>
                <li>Limestone</li>
                <li>Marble</li>
                <li>Sandstone</li>
                <li>Soapstone</li>
                <li>Slate</li>
              </ul>

              <ul className="pl-4 m-2 space-y-4 list-disc">
                <li>Cast stone</li>
                <li>Mortar and grout</li>
                <li>Masonry Flashing</li>
                <li>Masonry Anchorage</li>
                <li>Masonry Insulation</li>
                <li>Chimney brick</li>
                <li>Brick tuckpointing</li>
                <li>brick wall tiles</li>
                <li>Brick Veneer</li>
                <li>Stucco work</li>
                <li>Terra Cotta Masonry</li>
              </ul>
            </div>

            <br />
            <br />
            <br />
            <br />

            {/* border para */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              OUR ESTIMATION PROCESS
            </h1>

            <div className="border-2 border-slate-200 px-6 py-8">
              <p>
                For the preparation of masonry estimate, drawing plans and
                specifications provided by the client are thoroughly reviewed
                with respect to the plan, elevation, and section views to define
                the scope of work.
              </p>
              <br />
              <p>
                Masonry takeoff software that we use for measuring the
                quantities by point and click method includes Planswift,
                Bluebeam, etc, and the quantities are imported to EXCEL
                spreadsheets organized by MasterFormat. We follow CSI codes for
                items mentioned in the drawings.
              </p>

              <br />

              <p>
                Our masonry estimating spreadsheet comprises of the breakdown of
                the following quantities:
              </p>
              <br />

              <ul className="pl-6 m-2 space-y-4 list-disc">
                <li>
                  All masonry units used for the construction of the foundation
                  wall. It includes concrete masonry units, bricks, CMU blocks,
                  acoustic blocks, glass units, clay bricks, clay tiles, brick
                  tiles, stones, marble, limestone, terra cotta, precast masonry
                  panels rubble, and their different forms eg, corner units,
                  pilaster units, bond beams, lintel blocks, knockouts,
                  stirrups, sill block, angle block, square pilasters, headers,
                  halves, half high, etc.
                </li>
                <li>
                  Deductions for openings i.e. doors, windows, ventilation are
                  considered.
                </li>
                <li>
                  The number of facing bricks and masonry veneer, stone veneer,
                  brick veneer if required.
                </li>
                <li>
                  Masonry units involved in different categories i.e facings,
                  backings to facings, walls and partitions, furring to walls,
                  fire protection are mentioned distinctly.
                </li>
                <li>
                  The amount of mortar required, which depends on whether it is
                  pre-bagged or site batching, mortar proportions, site
                  conditions, etc. it also depends on the type of mortar, ie
                  masonry cement mortar, pre-blended mortar, or portland cement
                  lime mortar.
                </li>
                <li>
                  The amount of grout required, which depends on the density of
                  the concrete block used. Wastages are also covered.
                </li>
                <li>Masonry reinforcement if required.</li>
                <li>Scaffolding if required.</li>
                <li>
                  Other miscellaneous items i.e. anchor bolts, sleeves,
                  brackets, brick ties, etc.
                </li>
                <li>
                  Masonry insulation, masonry flashing, and weep holes if
                  required.
                </li>
                <li>
                  Material, equipment, and labor costs are applied using RSMeans
                  and our construction cost database for zip code based prices.
                </li>
                <li>
                  Estimation of the man-hours and labor costs involved in
                  various tasks and various other costs like transportation,
                  taxes, permits, and costs for restoration &amp; cleaning if
                  required. etc.
                </li>
                <li>
                  Contingency funds are also taken into account which includes
                  unforeseen costs, inflation, etc.
                </li>
              </ul>
              <br />
              <p>
                A final audit is performed by the senior estimator to ensure the
                quality of the deliverables.
              </p>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            {/* after border para */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              OUR PORTFOLIO IN MASONRY TAKEOFFS
            </h1>
            <br />

            <div className="bg-slate-300 py-8 px-4 ">
              <p>
                We have served many contractors across the globe by providing
                highly precise and comprehensive estimates for{" "}
                <strong>
                  {" "}
                  home facades, flooring, chimneys, fireplaces, combustion
                  chamber, patios, driveways, sidewalks, walls, and columns,
                </strong>{" "}
                etc. for the following projects:
              </p>
              <br />

              <ul className="space-y-2 pl-4 m-2 ">
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Public
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Commercial
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Residential
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Industrial
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Institutional
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Educational
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Landscaping
                </li>
                <li>
                  <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                  Restoration/Repair
                </li>
              </ul>
            </div>

            <br />
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
              WHY OUTSOURCING YOUR MASONRY ESTIMATE?
            </h1>

            <br />
            <p>
              Today, the construction industry is highly competing and you are
              bidding on small profit margins, only precise and detailed
              estimates can give you an edge over your competition.
            </p>
            <br />
            <p>
              Accuracy is the main challenge in preparing a masonry estimate on
              your own, making it complicated and time-consuming. For the
              accurate masonry works estimate, detailed knowledge of masonry
              units, mortar, grout, reinforcements, man-hours, labor costs,
              transportation costs, and various other quantities and proficiency
              in software and tools is necessary. Buying expensive software and
              hiring a full-time estimator takes a lot out of your budget in
              terms of monthly salary, bonuses, benefits, etc.
            </p>
            <br />
            <p>
              Therefore outsourcing your estimates to a professional estimating
              company like E-value estimating benefits you in the following way:
            </p>
            <br />
            <ul className="list-disc space-y-4 pl-6">
              <li>
                You save time that was earlier consumed in preparing estimates
                and utilize it in developing strategies for your business
                growth.
              </li>
              <li>
                It gives you the confidence of highly accurate and detailed
                estimates prepared by expert estimators.
              </li>
              <li>
                It increases your bid volume. You tend to bid more and win more.
              </li>
              <li>
                Your estimating efficiency improves which increases your profit
                margins.
              </li>
              <li>
                You save on the expenses of buying software and hiring
                estimating staff.
              </li>
            </ul>
            <br />
            <br />
            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              CHOOSING US IS THE RIGHT DECISION
            </h1>
            <br />
            <p>
              We have proven taken record of delivering the best services to our
              clients in terms of:
            </p>
            <br />

            <ul className="list-disc space-y-4 pl-6">
              <li>
                Highly accurate and detailed estimates along with marked-up
                plans.
              </li>
              <li>Quick turnaround times of 24 to 48 hours.</li>
              <li>Cost-effective estimates</li>
              <li>The bid-hit ratio of our estimates is more than 92%.</li>
              <li>
                The monthly takeoff package saves 60% expense of an inhouse
                estimator.
              </li>
              <li>
                Consultation on bid filing and handling bidding network profile
                of contractors.
              </li>
              <li>
                Estimators certified with credible accreditations AACE, AIQS.
              </li>
              <li>24/7 customer support.</li>
            </ul>

            <br />
            <br />
            <br />

            {/* get a quote riser */}

            <div className="flex flex-col sm:flex-row justify-around">
              <div>
                <h1 className="text-indigo-900 text-3xl">
                  Just Follow The Simple Process:
                </h1>
                <br />
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                  We are eager to serve you in your next masonry takeoff!
                </h1>
              </div>

              <div className="space-y-4">
                <div className="flex">
                  <div className="bg-slate-300 rounded-full w-28 h-12 m-2 flex align-middle justify-center items-center">
                    <LuUpload className="text-2xl " />
                  </div>
                  <div>
                    <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                      Submit Your Drawings:
                    </h1>
                    <p>
                      Click here to send us plans and drawings. After reviewing
                      and defining the scope of work, we will send you a quote
                      in the next five minutes.
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
                      You will get a quote based on invoice, turnaround time,
                      and delivery date. You can pay via Credit card or Debit
                      card or PayPal. And we will start preparing your estimate.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-slate-300 rounded-full w-28 h-12 m-2 flex align-middle justify-center items-center">
                    <IoNewspaperOutline className="text-2xl " />
                  </div>
                  <div>
                    <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                      Get An Estimate:
                    </h1>
                    <p>
                      You will receive your estimate in EXCEL sheets either in
                      MasterFormat or in your customized format.
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

            <br />
            <br />

            {FAQs2.map((faq, index) => (
              <>
                <div
                  key={index}
                  className="flex bg-slate-500 border-2 border-black text-white space-x-5 p-2 hover:bg-yellow-400"
                >
                  <div>
                    <p onClick={() => toggleOpen2(index)}>
                      {" "}
                      {openIndex2 == null ? "+" : "-"} {faq.Q}
                    </p>
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
              OUR RECENT PROJECTS IN MASONRY TRADE
            </h1>

            <br />
            <br />

            <p>
              E-value estimating has a diversified portfolio of estimating
              thousands of masonry work projects.{" "}
              <strong> A few are listed below:</strong>
            </p>
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              Our Portfolio In Masonry Trade
            </h1>

            <br />
            <br />
            <div>
              <div className="spacey-4">
                <h4 className="text-indigo-900 text-xl font-semibold">
                  New Construction Of Atlantic Avenue Shell Building In Raleigh,
                  North Carolina
                </h4>
                <br />

                <p>Preparation of conceptual estimate.</p>
                <br />

                <h4 className="text-indigo-900 text-xl font-semibold">
                  Demolition And Renovations Of Morgan Park High School In
                  Chicago, Illinois
                </h4>
                <br />

                <p>Preparation of bid estimate for a masonry contractor</p>
                <br />

                <h4 className="text-indigo-900 text-xl font-semibold">
                  Additions And Renovations For Georgia State University Library
                  North Atlanta, Georgia
                </h4>
                <br />

                <p>
                  Preparation of masonry takeoff sheets including man-hours and
                  markup plans for the subcontractor.
                </p>
                <br />

                <h4 className="text-indigo-900 text-xl font-semibold">
                  Renovations For JFK Recreation Center In Newark, New Jersey
                </h4>
                <br />

                <p>Preparation of bid estimate</p>
                <br />
              </div>

              <div className="spacey-4">
                <h4 className="text-indigo-900 text-xl font-semibold">
                  Demolition And New Construction Of Sgt Joseph Delancy Park In
                  Miami, Florida
                </h4>
                <br />

                <p>Preparation of bid estimate</p>
                <br />

                <h4 className="text-indigo-900 text-xl font-semibold">
                  Renovations Of Philadelphia Convention Center, Pennsylvania
                </h4>
                <br />

                <p>Preparation of bid estimate</p>
                <br />

                <h4 className="text-indigo-900 text-xl font-semibold">
                  Remodeling Of Los Angeles Pharmacy, California
                </h4>
                <br />

                <p>Preparation of budget estimate.</p>
                <br />
              </div>
            </div>

            {/* final */}

            <div>
              <p>
                At E-value estimating, we provide construction takeoff services in
                North American, African, Australian, and Caribbean regions. In
                the US, we serve in the following markets:
              </p>
              <br />
              <p>
                New York, Illinois, Massachusetts, South Carolina, North
                Carolina, Michigan, Arizona, Missouri, Indiana, Louisiana,
                MinnesotaIdaho, Pennsylvania, Alabama, California, Arkansas,
                Connecticut, Oklahoma, Virginia, Ohio, Oregon, Wisconsin,
                Wyoming, Delaware, Mississippi, Nevada, Utah, New Hampshire,
                Texas, New Jersey, Florida, Tennessee, Hawaii, Minnesota,
                Colorado, Washington, Kentucky, Maryland, Alaska, Nebraska,
                Georgia, Vermont, Montana, Iowa.
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

export default Masonry;
