"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { FaQuoteRight } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import Footer from "./Footer";
import { MdDiscount } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
const MEP = () => {
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
      Q: "How much do we charge MEP estimates?",
      A: "We usually charge an average of $200 for most of our estimates. But it actually depends on the scope of the project therefore, we encourage you to upload plans and get a free quote in the next 5 minutes.",
    },
    {
      Q: "What is the turnaround time of our MEP estimates?",
      A: "The usual turnaround time for most of our estimates is 24-48 hrs. We believe we are the best in the market with respect to time and quality.",
    },
    {
      Q: "What is the format of our deliverables for MEP Takeoffs?",
      A: "We deliver estimates in EXCEL spreadsheets in CSI MasterFormat, in your cost codes as per your demand.",
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
          MEP ESTIMATING SERVICES
        </h1>
        <br />
        <br />
        <div className="width80 flex justify-between sm:flex-row flex-col-reverse">
          <div>
            {" "}
            <p>
              Contractors are always looking for MEP estimating services. World
              Estimating provides affordable, accurate and cost-effective cost
              estimates in the least turnaround time 24- 48 Hrs. Our takeoffs
              always assist general contractors in winning bids. We are offering
              construction cost estimating services and material takeoff
              services for more than 10 years. Our team of dedicated cost
              estimators are excelled in mechanical estimates which is basically
              a superset of HVAC services.
            </p>
            <br />
            <p>
              We excel in the most reliable estimating services and deliver
              accurate construction takeoff services to contractors which
              includes a complete range of mechanical, electrical and plumbing
              estimating services. We do detailed line estimates in every trade.
              In MEP estimates we cover everything including fire stopping,
              fireproofing, moisture protection, sprinklers, spray insulation,
              pipe insulation, heating, HVAC, Sheet Metal, Ductwork, etc.
            </p>
            <br />
          </div>
          <img
            className="width20"
            src="https://worldestimating.com/wp-content/uploads/2019/12/mep1-705x470.jpg"
            alt=""
          />
        </div>
        <br />

        <br />
        <br />

        {/* main Landing Page End */}

        <div className="flex sm:flex-row flex-col sm:w-full justify-between">
          <div className="form-width">
            {/*logo row */}

            <div className="flex flex-col sm:flex-row flex-wrap justify-between">
              <div>
                <img
                  src="https://worldestimating.com/wp-content/uploads/2020/04/Mechanical-180x180.png"
                  alt=""
                  className="w-28 h-28 hover:opacity-50"
                />
                <button className="bg-indigo-900 text-white w-28 p-2 m-2 text-sm">
                  Mechanical Estimate Sample
                </button>
              </div>

              <div>
                <img
                  src="https://worldestimating.com/wp-content/uploads/2020/04/electrical-icon.png"
                  alt=""
                  className="w-28 h-28 hover:opacity-50"
                />
                <button className="bg-indigo-900 text-white w-28 p-2 m-2 text-sm">
                  Electrical Estimate Sample
                </button>
              </div>

              <div>
                <img
                  src="https://worldestimating.com/wp-content/uploads/2020/04/plumbing-1.png"
                  alt=""
                  className="w-28 h-28 hover:opacity-50"
                />
                <button className="bg-indigo-900 text-white w-28 p-2 m-2 text-sm">
                  Plumbing Estimate Sample
                </button>
              </div>

              <div>
                <img
                  src="https://worldestimating.com/wp-content/uploads/2020/04/insulation.png"
                  alt=""
                  className="w-28 h-28 hover:opacity-50"
                />
                <button className="bg-indigo-900 text-white w-28 p-2 m-2 text-sm">
                  Insulation Estimate Sample
                </button>
              </div>

              <div>
                <img
                  src="https://worldestimating.com/wp-content/uploads/2020/06/industrial-piping.jpg"
                  alt=""
                  className="w-28 h-28 hover:opacity-50"
                />
                <button className="bg-indigo-900 text-white w-28 p-2 m-2 text-sm">
                  Piping Estimate Sample
                </button>
              </div>
            </div>

            <br />
            <br />
            <br />

            {/* after logo row */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              RANGE OF MEP ESTIMATING SERVICES
            </h1>
            <br />

            <ul className="list-disc space-y-3 pl-4 m-2">
              <li>Material takeoffs</li>
              <li>Bid estimates &amp; bidding assistance</li>
              <li>Preliminary estimates &amp; feasibility studies</li>
              <li>Budget &amp; design estimates</li>
              <li>Change order estimates</li>
              <li>Litigation assistance</li>
              <li>Project Cost Management</li>
              <li>Project lead generation</li>
              <li>CPM scheduling</li>
              <li>MEP drafting</li>
            </ul>

            <br />
            <br />

            <div className="flex flex-col sm:flex-row justify-between">
              <h1 className="font-semibold width50 text-4xl">
                Contact Us Today And Get 30% Off On Your First MEP Estimate!
              </h1>
              <div className="width50 overflow-hidden">
                <img
                  className="hover:scale-125  hover:transition-all"
                  src="https://worldestimating.com/wp-content/uploads/2019/12/mep2-495x400.jpg"
                  alt=""
                />
              </div>
            </div>

            <br />
            <br />
            <br />

            {/* list */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              Our Deliverables
            </h1>
            <br />
            <p>
              Our deliverables are tailored to the specific needs of our clients
              but generally contain the following:
            </p>

            <br />

            <ul>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Digital Takeoff Sheets
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Material Quantities &amp; Pricing
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Labor Costs &amp; Labor Hours
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Marked Up Drawing Plans
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Takeoff summary containing, labor hours, total material and
                labor costs, rentals, equipment, taxes, overheads, profit
                percentage, etc.
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Takeoff summary containing, labor hours, total material and
                labor costs, rentals, equipment, taxes, overheads, profit
                percentage, etc.
              </li>
            </ul>
            <br />
            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              What Components Do We Estimate In MEP Estimating Services?
            </h1>

            <br />
            <br />
            <div className="flex flex-col sm:flex-row flex-wrap justify-between">
              <div className="border-2 border-slate-200 px-4 py-8 width50">
                <ul className="space-y-4 pl-8 list-disc">
                  <li>Sheet Metal</li>
                  <li>Dehumidifier</li>
                  <li>Air-handling units</li>
                  <li>Chillers</li>
                  <li>Boilers</li>
                  <li>Furnaces</li>
                  <li>Heat Pumps</li>
                  <li>Duct</li>
                  <li>Signage</li>
                  <li>Lighting</li>
                  <li>Low Voltage</li>
                </ul>
              </div>

              <div className="border-2 border-slate-200 px-4 py-8 width50">
                <ul className="space-y-4 pl-8 list-disc">
                  <li>Electrical</li>
                  <li>Plumbing</li>
                  <li>Sprinklers</li>
                  <li>Fire Proofing</li>
                  <li>Fire Protection</li>
                  <li>Fire Suppression</li>
                  <li>Moisture Protection</li>
                  <li>Pipe Insulation</li>
                  <li>Spray insulation</li>
                  <li>Fire stopping</li>
                  <li>Air Filters</li>
                </ul>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />

            {/* border color para */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              MECHANICAL ESTIMATING SERVICES
            </h1>
            <br />
            <br />

            <div className="bg-slate-300 p-8">
              <p>
                With a specialized team of MEP estimators, we provide a complete
                range of mechanical estimating services for a wide portfolio of
                projects including fabrication, design and installation of HVAC
                systems, refrigeration systems, insulations, plumbing and piping
                systems. For the mechanical takeoffs, we quantify all the
                mechanical components including Air handling units, Air
                conditioning units, Air devices, Rooftop units, Exhaust fans,
                Pumps, Louvers, Ducts, Pipes, Pipe fittings, Duct fittings, Duct
                insulation, Duct supports, Thermostat, Boilers, Heat pumps,
                Humidifiers, Air filters, Water heaters, Chillers, Dampers,
                Hangers, Dust smoke detector.
              </p>
            </div>

            <br />
            <br />
            <br />

            <br />
            <br />

            {/* after border color para */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              ELECTRICAL ESTIMATING SERVICES
            </h1>
            <br />

            <p>
              We are experts in providing estimating solutions for all types of
              electric systems for residential, commercial and industrial
              projects. Our services include electrical material takeoffs, bid
              estimates, bid preparation & submission, electrical cost per
              square foot, and electrical CAD drafting. We not only provide the
              most precise estimates but also assist in preparing complete bid
              and setting right mark up plans. We quantify all the electrical
              components including lighting fixtures, lighting controls, gear,
              receptacles, panels, electric fittings, hangers, supports,
              Liquidtite, Grounding, Conductors, Fuses, Panels & Circuit
              Breakers, Feeders, Plates, Switches, Wiring, Switches,
              Switchboards, Branch devices, Cable Tray, Motor Control, Low
              Voltage and other devices.
            </p>

            <br />
            <br />

            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              PLUMBING ESTIMATING SERVICES
            </h1>
            <br />
            <p>
              Whether it is an estimate for new installations, additions or
              repair of plumbing systems, we do it all. From residential to
              commercial and industrial projects. Our estimators ensure to
              accurately include all the details and descriptions in our
              estimates that let you effectively bid on projects, set good
              profit margins and procure material from vendors. We quantify all
              the plumbing components including water pipes, vent pipes, gas
              pipes, sanitary pipes, underground pipes, pipe fittings, pipe
              concealments, insulations, valves, hangers supports, plumbing
              fixtures; toilets, sinks, basins, showers, bathtubs, strainers,
              faucets, bidets, water coolers, drinking fountains and plumbing
              equipment; drains, pumps, water heaters, boilers, valves, oil
              separators, fixture carriers, flashings, etc.
            </p>
            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              INSULATION ESTIMATING SERVICES
            </h1>

            <br />

            <p>
              We provide insulation estimating services for all mechanical works
              including HVAC piping, HVAC duct, industrial piping, industrial
              duct, plumbing, equipment and fire-stopping. Our services comprise
              all types and sizes of projects including commercial as well as
              industrial projects. We quantify all types of insulation including
              pipe insulation, ductwork insulation, cold storage insulation,
              removable insulation systems, equipment insulation systems, tank
              insulation systems, plumbing pipe, cooling towers, exhaust
              systems, process pipe, refrigeration pipe, petrochemical pipe
              insulation, fire stopping, fireproofing, weatherproofing,
              waterproofing.
            </p>

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
              MEP DRAFTING SERVICES
            </h1>

            <br />
            <p>
              Other than MEP takeoff services, we also render our services for
              MEP drafting services that include{" "}
              <strong>
                HVAC pipe fabrication drawings, HVAC duct fabrication shop
                drawings, Piping & process piping drawings, Plumbing shop
                drawings,
              </strong>{" "}
              Firestopping shop drawings, Sprinkler shop drawings. The CAD
              detailers and designers in our team are well versed with 3D
              drafting software like Revit MEP, AutoCAD and BIM systems.
            </p>
            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              Are You Wasting Your Money On MEP Estimating Services In Market?
            </h1>
            <br />
            <p>
              E-value estimating is one of the leading construction cost
              estimation companies that believe in accurate, affordable, and
              reliable service. As our slogan for contractors is “Win More, bid
              More“, we offer monthly takeoff packages to our clients that help
              you save money. Our takeoff estimating service will help you in
              quantifying accurate material for your construction plans. We use
              online resources for pricing and provide the most accurate
              estimates using the latest software like Bluebeam, Planswift,
              Trimble, FastPIPE, FastDUCT, FastWRAP, etc which ultimately
              provides accurate and precise construction cost estimates. Please
              visit our profile on The Blue Book.
            </p>
            <br />

            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              Outsource MEP Estimating Services To Us!
            </h1>

            <br />
            <p>
              Outsourcing the MEP estimating and takeoff services is the best
              strategy for contractors who are always busy in their routine.
              Even if they take responsibility for estimates, they can not
              efficiently prepare estimates and effectively handle the bidding
              process. Sometimes, the contractors are facing issues with time
              lapse in filing bids and other times they run short of time by
              which they ultimately earn less work and get most of their bids
              unattended. Doing this, they miss on work opportunities and
              ultimately suffer a lot in terms of less revenue.
            </p>
            <br />
            <p>
              Outsourcing the MEP estimating and takeoff services is the best
              strategy for contractors who are always busy in their routine.
              Even if they take responsibility for estimates, they can not
              efficiently prepare estimates and effectively handle the bidding
              process. Sometimes, the contractors are facing issues with time
              lapse in filing bids and other times they run short of time by
              which they ultimately earn less work and get most of their bids
              unattended. Doing this, they miss on work opportunities and
              ultimately suffer a lot in terms of less revenue.
            </p>
            <br />
            <br />
            <br />
            <br />
            {/* AQA section */}

            <div>
              <div className="flex">
                <MdDiscount className="text-4xl w-14 m-4" />
                <div>
                  <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                    Affordable Estimates
                  </h1>
                  <br />
                  <p>
                    Our outsourcing estimating service helps you in saving your
                    60% of your expense in MEP takeoff services. Except for
                    saving your expenses on estimation, you will get accurate
                    and fast estimates in the least turnaround time.
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="flex">
                <FaRegClock className="text-4xl w-14 m-4" />
                <div>
                  <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                    Quick Turnarounds
                  </h1>
                  <br />
                  <p>
                    We have a team of experienced estimators both commercial
                    estimators and residential estimators which will estimate or
                    takeoff residential plans in just 24-48 hours. For
                    commercial estimates, turnaround time may vary as per the
                    scope of work and size of the plan.
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="flex">
                <RiStackLine className="text-4xl w-14 m-4" />
                <div>
                  <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                    Accurate Construction Cost Database
                  </h1>
                  <br />
                  <p>
                    We deploy RSMeans and our developed construction cost
                    database for material, labor and equipment pricing for up to
                    date and zip code based costing.
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
            {/* h1 after aqa*/}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              OUR ESTIMATION PROCESS
            </h1>
            <br />
            <p>
              Firstly, at E-value estimating, our estimation process starts with
              the analysis of drawing plans by the MEP specialist who has past
              massive experience in dealing with Mechanical (HVAC), ductwork,
              air-conditioning units, refrigeration units, Electrical, low
              voltage equipment and Plumbing takeoffs. The details, schedules
              and specifications along with minor general notes are taken into
              consideration.
            </p>

            <br />

            <p>
              Then each drawing plan is uploaded in our certified software like
              <strong>Bluebeam, Plan swift, FastWRAP, FastDUCT, FastPIPE, Trimble</strong>, etc.
              Our qualified and certified estimator takeoff the quantities from
              the plans and every consideration and proper standards and codes
              are met then it is forwarded for review by a senior estimator who
              ensures a cold eyes review from marked-up plans and takeoffs sheet
              in EXCEL.
            </p>
<br/>
<p>Each Line item is quantified mentioned and its proper description according to the purpose is maintained and provided. Job winning strategy in bid estimates and for procurement and supply needed estimates, details, and description is established. Residential, commercial, and industrial estimates are delivered to clients after peer-reviewing of the estimation department.


</p>


<br/><br/><br/><br/>






{/* get a quote riser */}

            <div className="flex flex-col sm:flex-row justify-around">
              <div>
              <h1 className="text-red-500 text-3xl">Bid More, Win More!</h1>

                <br />
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                Get our MEP Estimating Services to step up your winning game!
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

            <br />

       

            <br />



            {/* final */}

            <div>
              <p>
                E-value estimating has been providing construction takeoff services for more than 15 years in North America, Africa, Australia and the Caribbean. In the US, we take pride in serving all the states and follow their rules and regulations:


              </p>
              <br />
              <p>
              Florida, New Jersey, New York, Oklahoma, Georgia, Massachusetts, South Carolina, Illinois, Texas, Arizona, Indiana, North Carolina, Wyoming, Kentucky, Louisiana, Pennsylvania, Maryland, Alabama, Missouri, Washington, Connecticut, Minnesota, Colorado, Virginia, Hawaii, Michigan, Ohio, Alaska, Oregon, Tennessee, Wisconsin, Vermont, Montana, Arkansas, California, Delaware, Idaho, Iowa, Minnesota, Nebraska, New Hampshire, Nevada, Utah, Mississippi.


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

export default MEP;
