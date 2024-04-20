"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Logo from "../logosample.webp";

const CostEstimating = () => {
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
      services: "cost-estimating",
    },
    {
      services: "cost-estimating",
    },
    {
      services: "cost-estimating",
    },
    {
      services: "cost-estimating",
    },
    {
      services: "cost-estimating",
    },
    {
      services: "cost-estimating",
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
              CONSTRUCTION COST ESTIMATING SERVICES
            </h1>
            <p className="text-lg m-6 ml-0">
              World estimating offers a wide range of construction cost
              estimating services and cost management services to cater to the
              needs of the ever-growing construction industry. Being in the
              business for many years, we have reached a point where we totally
              understand the market conditions and can handle cost estimates for
              the project of any complexity. Our team of expert estimators
              deliver accurate, timely and comprehensive estimates containing
              marked-up plans with a special emphasis on precision and attention
              to detail and remain engaged with the clients from conception to
              completion of the project.
            </p>

            <p className="font-semibold">
              We recognize the unique requirements of our clients and our
              construction cost estimating services are tailored to their
              particular needs. Among our clients are:
            </p>
            <div className="flex ul-ce sm:flex-row flex-col justify-around p-8 text-lg">
              <ul>
                <li>General Contractors</li>
                <li>Subcontractors</li>
                <li>Project managers</li>
                <li>Developers</li>
                <li>Investors</li>
              </ul>
              <ul>
                <li>Architects</li>
                <li>Homebuilders</li>
                <li>Owners</li>
                <li>Vendors</li>
              </ul>
            </div>
            <div>
              <button className="text-2xl bg-red-600 text-white text-center p-8 hover:opacity-75">
                Check Our Estimates Samples
              </button>
            </div>
            <h1 className="text-indigo-900 font-bold text-3xl mb-4  m-10 ml-0 width-upload">
              OUR RANGE OF CONSTRUCTION COST ESTIMATING SERVICES
            </h1>

            <div className="flex ul-ce sm:flex-row flex-col justify-around p-8 text-lg">
              <ul>
                <li>Cost estimates</li>
                <li>Material takeoffs</li>
                <li>Feasibility studies</li>
                <li>Bid evaluation</li>
                <li>Bid management</li>
                <li>Consultation on bid filing</li>
                <li>New project leads</li>
              </ul>
              <ul>
                <li>Subcontractor marketing</li>
                <li>Litigation assistance</li>
                <li>CPM scheduling</li>
                <li>Project cost management</li>
                <li>Change order management</li>
                <li>Value engineering</li>
                <li>CAD drafting</li>
              </ul>
            </div>
            <div className=" flex sm:flex-row flex-col">
              <div>
                {" "}
                <h1 className="text-indigo-900 width-estimate-h1 font-bold mb-4">
                  Bid estimating
                </h1>
                <p className="text-lg m-6 ml-0">
                  If you are a contractor busy with the field activity and
                  struggling with the complex bidding process, we can help you
                  with highly detailed and accurate construction cost estimating
                  services to facilitate bidding and winning jobs. Not only
                  that, but we also provide assistance on bid filings and manage
                  your bidding network profile.
                </p>
              </div>
              <div>
                {" "}
                <h1 className="text-indigo-900 width-estimate-h1 font-bold mb-4">
                  Design estimating
                </h1>
                <p className="text-lg m-6 ml-0">
                  Architects and engineering firms need estimates throughout the
                  design phase to evaluate design alternatives with respect to
                  the budget defined by the owner. We provide conceptual,
                  schematic design, design development, and detailed
                  construction cost estimating services to aid them.
                </p>
              </div>
            </div>
            <div className=" flex sm:flex-row flex-col">
              <div>
                {" "}
                <h1 className="text-indigo-900 width-estimate-h1 font-bold mb-4">
                  Budget estimating
                </h1>
                <p className="text-lg m-6 ml-0">
                  If you are a developer or owner, the budget estimate can help
                  you to define the initial budget, project financing, verify
                  bids submitted by the contractors and to allocate budget
                  limits for the architects. It also helps in the selection of
                  the right material as well as to optimize efficiency and
                  control costs. Our estimates can provide you the reliable
                  pricing to make the right business decisions regarding vendor
                  quotes and negotiating with contractors to avoid additional
                  change orders.
                </p>
              </div>
              <div>
                {" "}
                <h1 className="text-indigo-900 width-estimate-h1 font-bold mb-4">
                  Preliminary estimating
                </h1>
                <p className="text-lg m-6 ml-0">
                  At the very initial stages of project planning, preliminary
                  estimates allow investors, developers and owners to check the
                  feasibility of the project. We provide the most reliable and
                  defensible preliminary estimates based on the data from past
                  products using incomplete drawing plans. Our estimators come
                  up with the square footage costs to help our clients analyze
                  if the project is worth investing their money and time.
                </p>
              </div>
            </div>
            <h1 className="text-indigo-900 width-estimate-h1 text-xl font-bold mb-4">
              If you’re in search of the professional estimating services you
              can count on, we are eager to help!
            </h1>
            <h1 className="text-indigo-900 width-estimate-h1 text-xl font-bold mb-4">
              Call us at 347 480-1903
            </h1>
            <h1 className="text-indigo-900 width-estimate-h1 text-3xl font-bold mb-4">
              CONSTRUCTION COST ESTIMATING SERVICES IN ALL CSI DIVISIONS
            </h1>
            <p>
              Our estimators have diversified past experience of working with
              general contractors and subcontractors companies and follow the
              strict policies of AACE and AIQS. Our team comprises professional
              construction cost estimators who are trade specialists, including
              site work, civil, structural, mechanical and electrical, and a
              lead estimator who covers all the aspects of the project. We serve
              in all CSI divisions:
            </p>

            <div className="flex ul-ce sm:flex-row flex-col justify-around p-8 text-lg">
              <ul>
                <li>Earthwork</li>
                <li>Masonry</li>
                <li>Concrete</li>
                <li>Drywall</li>
                <li>Painting</li>
                <li>Roofing</li>
                <li>Millwork</li>
                <li>Cabinetry</li>
                <li>Metals</li>
                <li>Rebar</li>
                <li>Door/Window</li>
                <li>Mechanical</li>
                <li>HVAC</li>
                <li>Thermal/moisture protection</li>
                <li>Insulation</li>
              </ul>
              <ul>
                <li>Sitework</li>
                <li>Finishes</li>
                <li>Flooring</li>
                <li>Lumber</li>
                <li>Stucco</li>
                <li>Structural steel</li>
                <li>Electrical</li>
                <li>Plumbing</li>
                <li>Ductwork</li>
              </ul>
            </div>
            <h1 className="text-indigo-900 font-bold text-3xl mb-4  m-10 ml-0 width-upload">
              CONSTRUCTION COST ESTIMATING SERVICES FOR A WIDE SCOPE OF PROJECTS
            </h1>
            <p>
              Our expert estimators have experience working with a private and
              public portfolio of projects including for construction estimating
              services:
            </p>
            <div className="flex ul-ce sm:flex-row flex-col p-8 text-lg">
              <ul>
                <li>Residential</li>
                <li>Commercial</li>
                <li>Industrial</li>
                <li>Retail</li>
                <li>Civil</li>
                <li>Education</li>
                <li>Healthcare</li>
                <li>Public Safety</li>
                <li>Urban Development</li>
                <li>Sports & Entertainment</li>
                <li>Parks & Recreation</li>
                <li>Mixed-Use Development</li>
                <li>Mining & Marine projects</li>
                <li>Renovations & remodeling</li>
              </ul>
            </div>
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl mb-4">
              OUR APPROACH TO CONSTRUCTION COST ESTIMATING SERVICES
            </h1>
            <br />
            <p className="">
              We strongly believe that an accurate estimate acts as a primary
              tool in setting the budget and controlling cost throughout the
              lifecycle of the project. The estimation process at our firm
              starts with an in-depth review of design documents as well as the
              analysis of the construction process, materials, location,
              permits, logistics and other factors that reveal the hidden costs
              that can influence the project cost estimate. Once our
              trade-specific estimators complete the quantity takeoff, the lead
              estimator ensures that the estimate is up to the standard and
              complies with the project goals.
              <br />
              <br />
              Our business relations with many vendors, general contractors and
              subcontractors in North America, and careful bid analysis has
              aided us to develop a highly accurate cost database for pricing
              labor, material, and equipment costs. We also employ RSMeans and
              Craftsman for zipping code based pricing. In this way, we provide
              the most effective and accurate estimating services in order to
              achieve our client’s milestones.
            </p>
            <br />
            <br />
            <br />
            <h1 className="text-indigo-900 inline font-bold text-2xl mt-5 mb-4 width-upload">
              CONSTRUCTION ESTIMATING SERVICES SOFTWARE WE USE
            </h1>
            <div className="flex ul-ce sm:flex-row flex-col p-8 text-lg">
              <ul>
                <li>Planswift</li>
                <li>Bluebeam</li>
                <li>FastPIPE</li>
                <li>FastDUCT</li>
                <li>FastWRAP</li>
                <li>Trimble</li>
                <li>Xactimate</li>
                <li>Quest Estimating</li>
              </ul>
            </div>
            <br />
            <br />
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl mb-4">
              Outsource Your Construction Cost Estimating Services To Us
            </h1>
            <div className="flex sm:flex-row flex-col">
              <Image src={Logo} width={300} height={250} slt="imsgr" />
              <div className="m-8">
                <p>
                  By outsourcing construction estimating services to us, you can
                  effectively reduce estimating expenses, save time, and improve
                  the bidding process. We offer:
                </p>
                <ul className="li-ul-i m-4">
                  <li>
                    Highly accurate, easy to understand, and detailed estimates
                  </li>
                  <li>Fastest turnaround times (24 to 48 hours)</li>
                  <li>
                    Estimators certified with credible accreditation like AACE &
                    AIQS
                  </li>
                  <li>
                    Monthly takeoff packages to save 60% expense of a full-time
                    estimator
                  </li>
                  <li>24/7 customer support</li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-xl mb-4">
              Many Construction Companies In North America Rely On World
              Estimating For Construction Estimating Services. We Believe You
              Will Too.
            </h1>
            <div>
              <ol className="flex sm:flex-row flex-col">
                <li className="m-5">
                  <h1 className="font-semibold">
                    1. Submit your drawing plans:
                  </h1>
                  <p>
                    When you submit your drawing plans and specifications, we
                    prepare a quote including the invoice, turnaround time, and
                    the delivery date of the estimate. Click here to upload
                    plans.
                  </p>
                </li>
                <li className="m-5">
                  <h1 className="font-semibold">2. Get a quote:</h1>
                  <p>
                    After reviewing the plans, you will quickly get the quote.
                    As it gets accepted, you can pay the invoice via credit
                    card, debit card, or PayPal, and our team will start working
                    on your project.
                  </p>
                </li>{" "}
                <li className="m-5">
                  <h1 className="font-semibold">3. Receive estimate:</h1>
                  <p>
                    You will receive an estimate that will contain all the
                    material & labor quantities with pricing. We deliver the
                    estimate and takeoff sheet in EXCEL or in our own template
                    or in the client’s template, as per demand.
                  </p>
                </li>
              </ol>
            </div>

            <h1 className="font-bold text-2xl text-indigo-900  ">
              Our Service Areas
            </h1>

            <p>
              World estimating has successfully provided construction estimating
              services in North American, Caribbean, and Australian regions. In
              the US, we have a portfolio of working in the following markets:
              <br />
              <br />
              <br />
              New York, New Jersey, Florida, California, North Carolina,
              Virginia, Washington, Massachusetts, South Carolina, Oregon,
              Oklahoma, Pennsylvania, Tennessee, Minnesota, Illinois, Texas,
              Georgia, Arizona, Michigan, Missouri, Colorado, Kentucky, Indiana,
              Louisiana, Alabama, Maryland, Connecticut, Ohio.
            </p>
          </div>

          <div className="width-details">
            <button className="bg-yellow-500 text-xl p-4">
              View Our Portfolio
            </button>
            <br />
            <br />
            {servicesdata.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex bg-slate-500 border-2 border-black text-white space-x-5 p-2 hover:bg-yellow-400"
                >
                  <div className="flex flex-col text-center ">
                    <p>{data.services}</p>
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

            <div className="sticky top-48">
              <div className="my-10 text-center ">
                <h1 className="bg-red-600 text-white text-2xl font-semibold p-6">
                  Call us Today
                </h1>
                <div className="bg-slate-200 border-2 border-black space-y-4 p-12">
                  <h1 className="text-indigo-500 font-bold text-2xl">
                    World Estimating
                  </h1>
                  <p>+923220264464</p>
                  <p>itshamzanawaz@gmail.com</p>
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

export default CostEstimating;
