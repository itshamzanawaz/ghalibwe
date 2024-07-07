"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Logo1 from "../bg1.jpg";
import Link from "next/link";

const CommercialEstimating = () => {
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
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl mb-4">
              COMMERCIAL ESTIMATING SERVICES
            </h1>
            <div>
              <div className="flex sm:flex-row flex-col">
                <p>
                  Accurate, efficient, and professional commercial estimating
                  services designed for commercial general contractors,
                  subcontractors, commercial zone developers, lenders,
                  architectural, engineering, and design firms.
                </p>
                <Image
                  src={Logo1}
                  width={400}
                  height={350}
                  alt="construction"
                />
              </div>
              <p>
                Commercial estimating requires sound and in-depth technical
                knowledge along with precision and experience. We believe that
                an accurate estimate serves as a primary tool for budget
                creation and cost control throughout the lifecycle of the
                project. Our Estimators have a great deal of experience of
                commercial takeoffs and estimation with a diversified portfolio
                in North American, the Caribbean, and Australian construction
                industries including renovation, restoration, addition, and new
                construction. Each project is reviewed by senior project
                managers having past experience of estimating a huge commercial
                portfolio of projects.
              </p>
              <ul className="list-disc pl-5 my-8">
                <li className="mb-2">
                  Do you need consultancy with the estimation and scheduling of
                  commercial construction projects?
                </li>
                <li className="mb-2">
                  Or you don’t have the expertise to perform bill of material
                  for a specific trade, size, or complexity?
                </li>
                <li>
                  Or you are not confident about how to prepare and file a
                  bidding proposal?
                </li>
              </ul>
              <p>
                We have got you covered. With the team of expert quantity
                surveyors, consultants, and engineers, we can ensure accurate
                and timely services tailored to your specific needs. We help you
                achieve your goals whether that involves preparing estimates,
                setting profit margins, or smartly filing bidding proposals that
                can set you apart from the competition.
              </p>
            </div>

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold my-8 text-2xl mb-8">
              COMMERCIAL ESTIMATING SERVICES
            </h1>

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-lg mb-4">
              For Commercial Contractors
            </h1>

            <div className="flex flex-col sm:flex-row justify-around">
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-md mb-4">
                  Most Accurate & Detailed Commercial Estimates
                </h1>
                <p>
                  At E-value estimating, we provide the most accurate and detailed
                  commercial estimates containing all the details with line item
                  descriptions along with colored marked-up plans.
                </p>
                <br />
                <p>
                  The pricing for material, labor, and equipment is done through
                  our developed construction cost databases and RSMeans.
                </p>
                <br />
                <p>
                  We ensure the accuracy of the estimate according to the
                  location of the project by employing zip code based pricing.
                </p>
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-md mb-4 my-8">
                  Material & Labor Takeoffs
                </h1>
                <p>
                  Our company will provide you with a complete list of materials
                  with detailed description model and vendor details of items
                  along with zip-code based pricing and labor man-hours to
                  complete that specific job.
                </p>
                <br />
                These takeoffs are delivered in EXCEL spreadsheets organized by
                CSI MasterFormat or Uniformat or, Uniformat, by cost code, or
                your customized format.
              </div>
              <br />
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-md mb-4">
                  Bid Estimates
                </h1>
                <p>
                  We provide the complete package for bidding assistance
                  starting from preparing accurate bid estimates, setting profit
                  margins, and filing competitive bids that lead to winning more
                  project leads. We help you to be competitive in the bid and
                  present the bid value that creates value to the owner of the
                  project. The bid winning ratio of our commercial estimates is
                  more than 85% (as our past contractor’s bids data presents)
                </p>
                <br />
                <p>
                  Our bid estimates are well referenced with detailed marked-up
                  plans that are easy to review and edit in the EXCEL
                  spreadsheet format. The bidding proposals contain bid reviews,
                  notes, clarifications, exclusions, inclusions, and other
                  related information to help you with your scope of the
                  project.
                </p>
                <br />
                <strong>Our services include:</strong>
                <br />

                <ul className="list-disc pl-5">
                  <li className="mb-2">Bid Estimates</li>
                  <li className="mb-2">Assistance on smartly filing bids</li>
                  <li className="mb-2">Project Lead Generation</li>
                  <li className="mb-2">Subcontractor Marketing</li>
                  <li className="mb-2">
                    Precise material & labor takeoffs for procurement
                  </li>
                  <li className="mb-2">Change Order Management</li>
                  <li className="mb-2">Cold Eye Review</li>
                  <li className="mb-2">Project Scheduling</li>
                  <li className="mb-2">Cost Management</li>
                  <li className="mb-2">Value engineering</li>
                  <li>Legal claims</li>
                </ul>
              </div>
            </div>

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold my-8 text-2xl mb-8">
              FOR COMMERCIAL ARCHITECTS & DESIGNERS:
            </h1>

            <div className="flex flex-col sm:flex-row justify-around">
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-md mb-4">
                  Design-Phase Estimates
                </h1>
                <p>
                  Our estimating team thoroughly engages with architects and
                  designers involved with commercial projects providing cost
                  evaluations for various design alternatives throughout the
                  design phase. This aids the design team to analyze and
                  customize the design parameters according to their client’s
                  budget limits avoiding additional costs or overruns at a later
                  stage. Our design phase estimates include the conceptual,
                  schematic design, design development, and construction
                  document estimates. We also provide a review of drawings and
                  specifications for errors, exclusions, and trade consistency.
                </p>
              </div>
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-md mb-4">
                  Budget Creation
                </h1>
                <p>
                  Estimation is at the heart of budget creation for Architects &
                  Designers during the design phase of the project. We help
                  Commercial Architects and Designers for budget creation in a
                  way that you can send us your design development and schematic
                  drawings so that we can create budget estimates in the
                  development phase of design.
                </p>
              </div>
            </div>

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold my-8 text-2xl mb-8">
              FOR COMMERCIAL DESIGN-BUILD FIRMS
            </h1>
            <div className="flex flex-col sm:flex-row">
              <div>
                <p>
                  Apart from the regular clients including contractors,
                  designers, and developers, we have successfully delivered
                  estimating services and value engineering to design-build
                  firms that are responsible for design and construction under
                  the same contact.
                </p>
                <br />
                <p>
                  Project owners that hire these firms have budget constraints
                  that require estimation and control of costs such as
                  materials, labor, and equipment through all the phases of the
                  project.
                </p>
              </div>
              <Image src={Logo1} width={400} height={350} alt="construction" />
            </div>

            <p>
              Our design-build estimates determine all the associated costs even
              at the early stage of design nearly at the 50% completion of
              designs that help the owners to make critical decisions. It
              generally comprises the following costs:
            </p>
            <ul class="list-disc list-inside space-y-2 my-8 mb-16">
              <li class="text-gray-700">
                Architectural, engineering, mechanical design, and drafting
                service charges
              </li>
              <li class="text-gray-700">
                Various subcontractor fees including mechanical, electrical,
                etc.
              </li>
              <li class="text-gray-700">Labor costs</li>
              <li class="text-gray-700">Material costs</li>
              <li class="text-gray-700">Equipment costs</li>
              <li class="text-gray-700">Man hours</li>
              <li class="text-gray-700">
                Other indirect costs like permits, taxes, logistics, storage,
                etc.
              </li>
            </ul>

            <strong>
              Estimated from 10 million dollar to several million-dollar
              evaluations of projects from all industries covering a wide
              variety of small and heavy construction types that include:
            </strong>

            <br />
            <br />
            <br />
            <div className="flex flex-col sm:flex-row justify-around">
              <ul className="list-disc list-inside space-y-2 width30">
                <li>Commercial facilities</li>
                <li>Restaurants</li>
                <li>Retail spaces</li>
                <li>Airports</li>
                <li>Condominiums</li>
                <li>Educational facilities</li>
                <li>High Rise Buildings</li>
                <li>Shopping Centers</li>
              </ul>

              <ul class="list-disc list-inside space-y-2 width30">
                <li>Theaters & Museums</li>
                <li>Sports Auditoriums</li>
                <li>Exhibition Buildings</li>
                <li>Prisons & Police Stations</li>
                <li>Fire Stations</li>
                <li>Courts</li>
                <li>Office Buildings</li>
                <li>Warehouses</li>
              </ul>
              <ul className="list-disc list-inside width30">
                <li>Parking Garages</li>
                <li>Libraries</li>
                <li>Medical Facilities</li>
                <li>Hotels &amp; Motels</li>
                <li>Airport Facilities</li>
                <li>Bus &amp; Subway Facilities</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row justify-around mt-12">
              <div className="width50">
                <p>
                  With inhouse trade specialized estimators, we offer commercial
                  estimating services in all CSI divisions, you can rely on us
                  for the following takeoffs:
                </p>
                <br />
                <ul className="list-disc list-inside">
                  <li>Sitework</li>
                  <li>Masonry</li>
                  <li>Concrete</li>
                  <li>Structural Steel</li>
                  <li>Door/Windows</li>
                  <li>Mechanical</li>
                  <li>Electrical</li>
                  <li>Plumbing</li>
                  <li>Lumber</li>
                  <li>Finishes</li>
                  <li>Thermal/moisture protection</li>
                </ul>
              </div>
              <br />
              <div className="width50">
                <p>
                  We have expert estimators highly skilled in the following
                  software:
                </p>
                <br />
                <ul className="list-disc mt-10">
                  <li>Planswift</li>
                  <li>Bluebeam</li>
                  <li>RS Means</li>
                  <li>FastPIPE</li>
                  <li>FastDUCT</li>
                  <li>FastWRAP</li>
                  <li>IMHS Mark Systems</li>
                  <li>Xactimate</li>
                  <li>Trimble</li>
                  <li>Quest Estimating</li>
                </ul>
              </div>
            </div>

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold my-8 text-2xl mb-8">
              OUR ESTIMATION PROCESS
            </h1>

            <ul className="list-disc space-y-6">
              <li>
                The estimation process at E-value estimating starts with a formal
                meeting of estimators to discuss and identify the scope of work.
                This also includes the allocation of tasks to trade specialist
                estimators.
              </li>

              <li>
                Then after reviewing the project documents and specifications
                provided by the client, the trade specialized estimators import
                the plans using the latest software and measure the dimensions
                and scales by the point and click method to digitally takeoff
                the quantities.
              </li>

              <li>
                After performing the on-screen takeoffs, all the material
                quantities are exported to EXCEL spreadsheets and categorized by
                division or by the pattern of CSI costs.
              </li>

              <li>
                Our connections with local vendors and RSMeans help in the
                accurate and zip code based pricing for material and labor costs
                are categorized with respect to union and prevailing wages
                including standard time and overtime.
              </li>

              <li>
                Finally, a cross-check is performed by the lead estimator for
                the quality assurance and quality control of the project
                deliverables.
              </li>
            </ul>

            <br />
            <br />
            <br />
            <strong className="text-indigo-900">
              Many Contractors, Developers, Architects, And Owners Trust Us For
              Reliable And Timely Commercial Estimating Services, We Hope You
              Will Too!
            </strong>
            <br />
            <br />
            <br />

            <div>
              <ol className="list-decimal list-inside flex sm:flex-row flex-col text-2xl m-4 text-indigo-900 font-semibold">
                <li className="width30">
                  Upload your plans
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

            <p>
              E-value estimating has experience and exposure to providing
              construction estimating services in North American, Caribbean, and
              Australian regions. In the US, we have remarkably served the
              following markets: Florida, New York, Massachusetts, South
              Carolina, North Carolina, Virginia, Oklahoma, Minnesota, Illinois,
              Texas, Georgia, Arizona, Colorado, Michigan, California, Missouri,
              Kentucky, Indiana, Louisiana, Alabama, Maryland, Pennsylvania,
              Connecticut, Washington, New Jersey, Tennessee, Oregon, Ohio.
            </p>

            <br />
            <br />
            <div className="bg-slate-200 p-6 flex sm:flex-row flex-col justify-around align-middle items-center rounded-sm mr-4">
              <h1 className="text-indigo-900 text-lg text-center font-bold mb-5">
                Feel free to contact us at any time to get accurate commercial
                estimating services and material takeoff
              </h1>
              <button className="bg-indigo-900  hover:bg-indigo-700 text-white p-4 w-44">
                Contact Us{" "}
              </button>
            </div>
            <br />
            <br />
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

export default CommercialEstimating;
