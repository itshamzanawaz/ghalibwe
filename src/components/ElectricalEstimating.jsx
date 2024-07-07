"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { FaQuoteRight } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import Footer from "./Footer";

const ElectricalEstimating = () => {
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
      Q: "How to begin with our electrical estimating services ?",
      A: "If you are planning to work on any residential, commercial, or industrial project, then email us all the project details, drawings, specifications, and wholesale supplier lists with material pricing (if you have your own pricing otherwise not required). We will review the project details and revert back with a quote and turnaround time. When the quote gets accepted by the client, we will send an invoice for the payment. We will leave no stone unturned to satisfy our clients",
    },
    {
      Q: "What does we charge for electrical estimate and takeoff?",
      A: "E-value estimating usually charges $200 on average but it depends upon the scope of the work and size of the project. So, for a better quotation, just send us plans and drawings at info@worldestimating.com or call us at 347 480-1903 to discuss.",
    },
    {
      Q: "what is included in your electrical cost estimates?",
      A: "The estimate you will get will include all power, system, and motor feeders & equipment, controls, and instrumentation takeoffs of material and labor along with manhours for the particular item. Quantifying all lighting fixtures, conduits, wiring, switches, and switchboards.",
    },
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
          ELECTRICAL ESTIMATING SERVICES
        </h1>
        <br />
        <br />
        <div className="width80 flex justify-between sm:flex-row flex-col-reverse">
          <div>
            {" "}
            <p>
              E-value estimating offers a wide range of electrical estimating
              services, from low voltage to instrumentation and control
              takeoffs, with the knowledge, experience, and dedication that is
              necessary to provide you with the highest accuracy, reliability,
              and attention to detail.
            </p>
            <br />
            <p>
              Our team of professional electrical estimators assists our clients
              to customize the best estimating solution according to the
              project’s unique requirements from simple material and labor
              takeoffs to design, budgeting, and value engineering.
            </p>
            <br />
            <p>
              Our team comprises electrical estimators, electronic engineers,
              and industrial electronics professionals with the diversified past
              experience of working with contractors, estimators, and
              electricians. They possess expertise in the latest electrical
              takeoff software like&nbsp;
              <strong>
                ConEst ,&nbsp; Planswift ,&nbsp; Accubid , and&nbsp; Bluebeam .
              </strong>
              &nbsp;This industry knowledge benefits us to provide you the most
              accurate and efficient electrical estimates that surely contribute
              to winning bids.
            </p>
          </div>
          <img
            className="width20"
            src="https://worldestimating.com/wp-content/uploads/2020/07/electrical-estimating-845x667.jpg"
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
              OUR ELECTRICAL TAKEOFF SHEETS
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
              We quantify following items in our Electrical scope
            </p>
            {open && (
              <section className="bg-slate-200 p-8">
                <div>
                  <p>
                    We understand that contractors and electricians require
                    detailed estimates to properly order and install the
                    individual components included in the electrical system. We
                    assure you that all the costs including the hidden costs are
                    covered in our estimates&nbsp;
                    <strong>with up to date and zip code based pricing</strong>
                    &nbsp;to help you set your profit margins accordingly. Our
                    takeoffs are organized into sections and every section has a
                    detailed line item description with respect to various types
                    and sizes,&nbsp;
                    <strong>marked with color-coded plans</strong>&nbsp;to make
                    it easy to understand for you. Our electrical takeoff sheet
                    is generally broken down into the following sections but it
                    actually depends on the scope of the project:
                  </p>
                  <br />
                  <div className="flex flex-col sm:flex-row justify-around">
                    <div>
                      <ul className="list-disc space-y-4">
                        <li>Lighting Fixtures</li>
                        <li>Lighting Controls</li>
                        <li>PVC Fittings</li>
                        <li>Rigid Fittings</li>
                        <li>EMT Fittings</li>
                        <li>Hangers &amp; Supports</li>
                        <li>Liquidtite</li>
                        <li>Grounding</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-disc space-y-4">
                        <li>Switches</li>
                        <li>Panels &amp; Circuit Breakers</li>
                        <li>Feeders</li>
                        <li>Plates</li>
                        <li>Switchgear Panels</li>
                        <li>Switchboards</li>
                        <li>Branch devices</li>
                        <li>Low Voltage &amp; other devices</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-disc space-y-4">
                        <li>Conduit</li>
                        <li>Conductors</li>
                        <li>Fuses</li>
                        <li>Motor Control</li>
                        <li>Cable Tray</li>
                        <li>Wiring</li>
                        <li>Switches</li>
                        <li>Receptacles</li>
                      </ul>
                    </div>
                  </div>
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
                  src="https://worldestimating.com/wp-content/uploads/2019/12/2-4-495x400.jpg"
                  alt=""
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            {/* tick list */}
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              RESIDENTIAL ELECTRICAL ESTIMATING
            </h1>
            <br />
            <p>
              If you are an electrician or electrical contractor involved in
              residential projects, we can help you with the electrical
              estimates that can be employed for procurement and bidding
              purposes.
            </p>
            <br />
            <p>
              Our team is hands-on with providing residential electrical
              estimating services ranging from&nbsp;
              <strong>
                improvements, additions to new homes, apartments, Eco-homes,
                smart homes,
              </strong>
              &nbsp;etc.
            </p>
            <br />
            <p>
              For the electric house wiring estimate, we takeoff all the
              components including power transmission lines, a service panel,
              subpanels, an electric meter, electrical boxes, receptacles,
              household wiring, switches, and other appliances, lights, and
              equipment, etc.
            </p>
            <br />
            <strong>
              We have the ability to estimate all the electrical systems
              involved in the residential buildings.
            </strong>
            <br />
            <br />
            <div className="flex flex-col sm:flex-row justify-around">
              <ul className="space-y-4">
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Building Automation Systems
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Building Management Systems
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Home Security Systems
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Electric Heating Systems
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Ventilation Systems & Exhaust Fans
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Network & Communication Systems
                </li>
              </ul>
              <ul className="space-y-4">
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Entertainment Systems
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Home Generator Backup Systems
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Solar Electric Panels
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Lighting, Switches & Controls
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Doorbells & Intercoms
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Electric Receptacles
                </li>
              </ul>
            </div>
            <br />
            <br />
            <br />
            <br />
            {/* para tick list*/}
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              COMMERCIAL ELECTRICAL ESTIMATING
            </h1>
            <br />
            <br />
            <br />
            <p>
              Commercial electrical contractors are always under high work
              pressure and concerned about tight budgets and short deadlines. If
              you are in the same scenario, we totally understand the stress. We
              are here to take your load off by providing the timely electrical
              estimating services, setting right markups, and preparing complete
              bidding proposals for you.
            </p>
            <br />
            <p>
              Our seasoned electrical estimators are well versed with the latest
              takeoff software and the electrical components including light
              fixtures, conduits, receptacles, gear, and panels to accurately
              estimate the project cost.
            </p>
            <br />
            <p>
              Our team has the experience of preparing estimates for all types
              and sizes of the projects from a simple restaurant wiring system
              to complete automation systems for large retail spaces. Not just
              that, we have incorporated our services for electrical systems
              for&nbsp;
              <strong>
                Airports, Highrises, Theaters, Offices, Hotels, Hospitals,
                Schools, Shop fit-outs,
              </strong>
              &nbsp;and others.
            </p>
            <br />
            <strong>
              For commercial electrical estimating, we takeoff the following
              systems:
            </strong>
            <br />
            <br />
            <br />
            <ul className="space-y-4">
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Commercial Communications Cabling Systems
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Wiring for HVAC systems
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Commercial Walk-in Freezers & Chiller Systems
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Emergency & Alarm systems
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Standby Power Generating Systems
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Access Control & Telecommunication systems
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Computer/data processing systems
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Low voltage distribution systems
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Electronic door readers
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Temperature controls
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Solar Power Systems
              </li>
              <li>
                <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                Geothermal Systems
              </li>
            </ul>
            <br />
            <br />
            {/* h1 border  para */}
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              INDUSTRIAL ELECTRICAL ESTIMATING
            </h1>
            <br />
            <br />
            <div className="border-2 border-slate-200 px-4 py-8">
              <p>
                At E-value estimating, we offer comprehensive electrical
                estimating services and specialize in responding quickly to your
                needs with the capacity to handle all types and sizes of
                industrial projects. From small factories to large plants and
                everything in between, we have assisted many EPC contractors,
                instrumentation contractors, instrumentation technicians,
                industrial electricians, and controls systems technicians.
              </p>
              <br />
              <p>
                With the vast exposure in industrial estimating, we offer great
                value to our clients with the reliable and accurate cost
                projections in pre-construction planning, budgeting, bidding and
                winning jobs for existing plant electrical systems installations
                as well as new construction installations and maintenance. Being
                in the industry for 15 years, we have worked on various
                portfolios of industrial projects encompassing{" "}
                <strong>
                  sewerage treatment plants, wastewater treatment plants, power
                  generation, distribution, metals, food & beverages, chemical,
                  petrochemical, manufacturing, and mining industries.
                </strong>
              </p>
            </div>
            {/* border row */}
            <br />
            <br />
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="border-2 border-slate-200 px-4 py-8 width50">
                <strong>
                  We provide complete estimating solutions for the following
                  industrial systems but are not limited to:
                </strong>
                <br />
                <br />
                <ul className="list-disc space-y-4 ml-4">
                  <li>Instrumentation &amp; Control Systems</li>
                  <li>Industrial Automation Systems</li>
                  <li>Program &amp; Logic Control systems</li>
                  <li>Hazard Monitoring Systems</li>
                  <li>Temperature, Power &amp; Lighting Systems</li>
                  <li>Power Distribution Systems</li>
                  <li>Wind Energy / Solar Power</li>
                  <li>Emergency Systems</li>
                  <li>Backup Generators</li>
                  <li>Tooling Robotics &amp; Assembly Systems</li>
                  <li>Turnkey Integrated Systems</li>
                  <li>Motion Control Systems</li>
                </ul>
              </div>
              <div className="border-2 border-slate-200 px-4 py-8 width50">
                <strong>Items that are quantified include:</strong>
                <br />
                <br />
                <ul className="list-disc space-y-4 ml-4">
                  <li>Protection Relays and Controls</li>
                  <li>Fuses</li>
                  <li>Fuse Blocks &amp; Accessories</li>
                  <li>Gas Discharge Tubes</li>
                  <li>Magnetic Sensors &amp; Reed Switches</li>
                  <li>Polymer Suppressors</li>
                  <li>Resettable PTCs</li>
                  <li>Thyristors</li>
                  <li>Capacitors</li>
                  <li>Resistors</li>
                  <li>Diodes</li>
                  <li>Diode Arrays</li>
                  <li>Surge Protective Devices</li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            <br />
            {/* border color row*/}
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              LOW VOLTAGE ESTIMATING SERVICES
            </h1>
            <br />
            <div className="bg-slate-300 p-6">
              <p>
                We also have skill and experience in providing estimating
                services for the entire range of low voltage systems:
              </p>
            </div>
            <br />
            <br />
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="bg-slate-300 p-6 width50">
                <ul>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Telephone
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Network Data
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Audio & Visual
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Access Control
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Intrusion Detection
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Thermostats
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Intercom
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Doorbells
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Security Sensors
                  </li>
                </ul>
              </div>
              <div className="bg-slate-300 p-6 width50">
                <ul>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Wireless Clocks
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Nurse Call
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Fire Alarm
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Fire Suppression
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Garage Door Openers
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Landscape Lighting
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    CCTV Surveillance
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Structured Cabling
                  </li>
                  <li>
                    <FaCheck className="inline px-2 text-3xl text-yellow-500" />
                    Wireless Connectivity
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />\ {/* offer section */}
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
              ELECTRICAL ESTIMATORS
            </h1>
            <br />
            <p>
              Electrical Estimators at E-value estimating are competent and
              professional enough to deliver you quick, accurate, and detailed
              estimates. Our Electrical Estimators are distinctive from other
              estimating companies because they are well-equipped, seasoned,
              reliable, and experienced to use all the up-to-date electrical
              estimating software. They will help you bid on more projects and
              increase the chance to win more.
            </p>
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              Are You In Search Of An Independent Electrical Estimator?
            </h1>
            <br />
            <p>
              Look no further! Our team of skilled and experienced electrical
              estimators is here to cater to your needs. With a focus on
              providing accurate and reliable estimates, we ensure that your
              projects are handled with utmost precision and professionalism.
              Our independent approach means that we are dedicated solely to
              serving your best interests, providing unbiased evaluations
              tailored to your specific requirements. By using our services, you
              can obtain accurate estimates that improve project planning and
              budgeting while saving time and resources. Trust our team to
              deliver comprehensive and transparent estimates that align with
              your goals. Experience the advantages of having an independent
              electrical estimator on your side by partnering with us right
              away.
            </p>
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              ELECTRICAL WORK COST PER SQUARE FOOT
            </h1>
            <br />
            <p>
              Do you need electrical work per square foot cost to get the
              initial idea to set the budget? Our highly skilled estimators can
              work this out for you. We benefit from our years of experience in
              electrical estimation to provide you with the most reliable and
              defensible per square footage estimates for residential,
              commercial, and industrial projects. We include all the
              components, equipment and electrician’s hourly rates with respect
              to the size, scope, and location of the project to come up with
              the right electrical work cost per square foot.
            </p>
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              ELECTRICAL DESIGN-BUILD CAD DRAFTING
            </h1>
            <br />
            <p>
              In addition to estimation, we also help our clients with CAD
              drafting services that include complete as-built, design-build,
              and thorough design assistance. Our design professionals use
              <strong>AutoCAD, Revit MEP,</strong> VISIO to prepare floor
              layouts and draft the whole plans with the specifications and
              sketches provided. We provide a complete range of MEP CAD Drafting
              services to Mechanical, Electrical, and Plumbing contractors in
              drafting their mechanical piping, ducting, electrical wiring,
              instrumentation, and piping layouts which are then quality checked
              and reviewed by senior <strong>MEP Engineer.</strong>
            </p>
            <br />
            <br />
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              OUR SERVICES
            </h1>
            <br />
            <ul className="list-disc space-y-4 pl-4">
              <li>
                Electric Cost Estimates for Residential, Commercial and
                Industrial Buildings
              </li>
              <li>Electrical Material Takeoffs</li>
              <li>Electrical Cost per Square Foot</li>
              <li>Electric Project Cost Management</li>
              <li>Electrical CAD Drafting Services</li>
              <li>Value Engineering</li>
              <li>Bid Preparation &amp; Submission</li>
            </ul>
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              OUR CLIENTS
            </h1>
            <br />
            <ul className="list-disc space-y-4 pl-4">
              <li>General Contractors</li>
              <li>Electrical Contractors</li>
              <li>Low Voltage Contractors</li>
              <li>HVAC Contractors</li>
              <li>EPC Contractors</li>
              <li>Instrumentation Contractors</li>
              <li>Instrumentation &amp; Control Systems Technicians</li>
              <li>Electricians &amp; Electrical Vendors</li>
            </ul>
            <br />
            <br />
            <br />
            <strong>
              Outsourcing Electrical Estimating Services To Us Has Benefited
              Many Contractors In The Following Way:
            </strong>
            <br />
            <br />
            <ul className="list-disc space-y-4 pl-4">
              <li>
                Highly detailed and precise estimate with marked-up plans that
                is easy to review and edit.
              </li>
              <li>
                Fastest turnaround times and on-time estimate delivery to meet
                the bidding deadline.
              </li>
              <li>
                <a href="https://worldestimating.com/pricing/">
                  Cost-effective rates
                </a>
                . Only use our services when you need and save the expense of a
                full-time estimator.
              </li>
              <li>Complete bidding assistance</li>
              <li>Electrical contractor marketing</li>
              <li>Assistance in project lead generation.</li>
              <li>
                24/7 support is available to help you in your critical times and
                bid date.
              </li>
            </ul>
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              OUR ESTIMATION PROCESS
            </h1>
            <br />
            <ul className="list-disc space-y-4 pl-4" s>
              <li>
                We start by reviewing drawing plans, technical specifications,
                and other details provided by the client.
              </li>
              <li>
                Then by using the latest software like Planswift, we import the
                plans and perform on-screen takeoff to quantify each and every
                electrical component based on its size and type.
              </li>
              <li>
                After the on-screen takeoff, the estimator exports all the
                quantities to EXCEL sheets and organized by systems and phases
                or by cost codes or as per requirement.
              </li>
              <li>
                For pricing, we use&nbsp;<strong>RSMeans</strong>&nbsp;and our
                relations with wholesalers and suppliers for up to date and
                location-based costs. Or as per demand, we can work with your
                supplier quotes for wiring,
                <br />
                fixtures, or other electrical components.
              </li>
              <li>
                Man-hours for each item are calculated to accurately predict the
                labor costs.
              </li>
              <li>
                The final estimate is cross-checked by our lead estimator for
                quality assurance.
              </li>
              <li>
                As per our client&rsquo;s requirement, we also add overheads and
                profits and build your bidding proposal ready to submit for bid.
              </li>
            </ul>
            <br />
            <br />
            <br />
            <br />
            {/* get a quote riser */}
            <h1 className="text-indigo-900 text-xl font-semibold">
              Our Electronics Professionals Have Delivered Quality Electrical
              Cost Consulting And Bill Of Quantities In The Past With A Huge
              Portfolio Of Specific-Function Facilities. Let Us Help You As
              Well!
            </h1>
            <br />
            <br />
            <br />
            <div className="flex flex-col sm:flex-row justify-around">
              <div className="space-y-4">
                <div className="flex">
                  <LuUpload className="text-6xl mx-8 " />

                  <div>
                    <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                      Upload You Plans
                    </h1>
                    <br />
                    <p>
                      Click here Click here to upload and your plans can be
                      Schematic, Bid set, conceptual Design Development or
                      Construction document drawings. Following formats are
                      acceptable: .PDF, .TIFF, .TIF, .DXF, .DWG, .PLN, .DWF,
                      .OSX, JPEG, .JPG, .CAL, .CPC, .DJVU. You can provide your
                      labor rates and quoted material prices from your suppliers
                      as well.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <FaQuoteRight className="text-4xl mx-8 " />

                  <div>
                    <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                      Get A Quote:
                    </h1>
                    <br />
                    <p>
                      We will send you a quote consisting of the invoice,
                      delivery date, and turnaround time which you can pay via
                      Credit Card or Debit Card, or PayPal.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <IoNewspaperOutline className="text-4xl mx-8 " />

                  <div>
                    <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                      Receive Estimate:
                    </h1>
                    <br />
                    <p>
                      We will deliver you the estimate comprising man-hours,
                      labor, and material pricing. We also provide a
                      professional bidding proposal with an inclusion sheet as
                      per demand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <p className="ml-20">
              We have an excellent track record of providing highly accurate and
              detailed construction cost estimates to many North America’s
              largest construction firms, expanding our services to African,
              Caribbean, and Australian regions as well. In the United States,
              we have covered the following markets: Florida, Massachusetts, New
              York, North Carolina, South Carolina, Virginia, Minnesota, Texas,
              Illinois, Georgia, Arizona, Colorado, Michigan, California,
              Missouri, Indiana, Kentucky, Louisiana, Maryland, Alabama,
              Pennsylvania, Washington, Connecticut, New Jersey, Oklahoma,
              Tennessee, Ohio, Oregon.
            </p>
            <br />
            <br />
            <br />
            <br />
            {/* before FAQ */}
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              ELECTRICAL ESTIMATING SERVICES FOR CONTRACTORS
            </h1>
            <br />
            <p>
              E-value estimating has hired a productive team of electrical
              estimators to deal with electrical estimating services for
              contractors and make it distinctive among other electrical
              estimating companies. They are professional, seasoned,
              well-equipped, and involve themselves in the hands-on expert teams
              of experienced electrical cost estimators.
            </p>
            <br />
            <p>
              We are productive enough to deal with construction estimating
              software like{" "}
              <strong>PlanSwift, Trimble, Bluebeam, ConEst, etc.</strong> Our
              priority is to assist our clients with their choice of prescribed
              software to surely show a tendency to deliver a professional
              electrical estimate with the help of professional electrical
              estimating software.
            </p>
            <br />
            <p>
              Our expert electrical estimators deal with a diverse range of
              clients that involve contractors, vendors, engineers, and
              homeowners for extensive electrical projects that demand a week to
              prepare the bid and finalize it efficiently.
            </p>
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
            
            {/* final */}
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

export default ElectricalEstimating;
