"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Logo1 from "../bg1.jpg";
import Link from "next/link";

const CTS = () => {
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
            <h1 className="text-indigo-900 font-bold text-3xl mb-4">
              CONSTRUCTION TAKEOFF SERVICES
            </h1>
            <div className="flex sm:flex-row flex-col mb-12">
              <div>
                {" "}
                <p className="text-lg m-6 ml-0">
                  World Estimating has been in Construction takeoff services for
                  past 12 years, serving contractors, owners, vendors and
                  developers
                </p>
                <ul className="ul-1-cts">
                  {" "}
                  <li>General Contractors</li>
                  <li>Subcontractors</li>
                  <li>Architects</li>
                  <li>Owners</li>
                  <li>Real Estate Developers</li>
                  <li>Vendors</li>
                </ul>
              </div>
              <Image src={Logo1} width={400} height={50} alt="imsgr" />
            </div>

            <h1 className="text-indigo-900 font-bold text-4xl mb-4 mt-8">
              Our Building Takeoff Portfolio:
            </h1>
            <p>
              Being a standout takeoff specialist team, we have undertaken all
              portfolios of construction i.e., Residential, Commercial and
              Industrial projects including:
            </p>
            <ul className="ul-1-cts">
              <li>Airports/Highways</li>
              <li>Custom Homes</li>
              <li>Multi Mixed Use</li>
              <li>Retail</li>
              <li>Recreation</li>
              <li>Industrial Facilities (Process Plants)</li>
              <li>Civic & Public Works</li>
              <li>Education</li>
            </ul>

            <h1 className="text-indigo-900 font-bold text-4xl mb-4 mt-8">
              CONSTRUCTION TAKEOFF SERVICES FOR CONTRACTORS
            </h1>

            <p className="mb-12">
              All trades material labor takeoff with pricing and manhours.
            </p>

            <div className="flex sm:flex-row flex-col mb-12">
              <Image src={Logo1} width={400} height={50} alt="imsgr" />

              <div>
                {" "}
                <ul className="ul-1-cts">
                  {" "}
                  <li>Civil</li>
                  <li>Structural</li>
                  <li>Architectural</li>
                  <li>MEP (Mechanical, Electrical & Plumbing)</li>
                  <li>Sitework</li>
                  <li>Drywall</li>
                  <li>Lumber</li>
                  <li>Finishes</li>
                  <li>Steel takeoffs</li>
                  <li>Insulation</li>
                  <li>Paint</li>
                </ul>
              </div>
            </div>

            <h1 className="text-indigo-900 font-bold text-4xl mb-4 mt-8">
              Material Takeoff Services For New Construction
            </h1>

            <p>
              Either it is new commercial, residential or industrial
              construction, our seasoned estimators at World Estimating are
              having such experience and capability in hand to undertake the
              project of any scope and size. We have estimated projects from
              evaluation of $10 million dollars to several million dollars of
              projects.
            </p>

            <h1 className="text-indigo-900 font-bold text-4xl mb-4 mt-8">
              Renovations- Additions Takeoff
            </h1>
            <p>
              Renovation and Remodeling contractors have always benefited from
              our takeoff services. The remodeling and renovation services are
              always critical and crucial to estimate and takeoff. They have
              existing conditions in the plans with additions and renovations
              marked sperate. In order to get them take out the lists, care and
              expertise is required to read the blueprints and prepare marked up
              plans. Therefore, just send us plans and specifications and we
              will provide the exact takeoffs and estimates with mark up
              drawings in least turnaround time.
            </p>

            <h1 className="text-indigo-900 font-bold text-5xl mb-4 mt-8">
              FOR DEVELOPERS
            </h1>

            <p>
              Our estimators at World Estimating can develop the Preliminary
              takeoffs and estimates for developers before they put time and
              money into a project so that they can act and make decisions
              wisely. We make takeoffs from all schematic, construction drawings
              either conceptual or final and even sketches as well.
            </p>

            <h1 className="text-indigo-900 font-bold text-4xl mb-4 mt-8">
              Final Construction Takeoffs & Estimates
            </h1>

            <p>
              Before the commencement of construction when the design is 100%
              complete and available for solicitation of bids, it’s important to
              verify the bids received from the subcontractors and General
              contractors as well where to getting yourself safe from being
              overcharged and un-necessary change orders. Whether Residential or
              commercial Construction takeoff services, our team can finalize a
              solid bid before you get the finalized numbers.
            </p>

            <h1 className="text-indigo-900 font-bold text-4xl mb-4 mt-8">
              Owners, Builders & Investors
            </h1>

            <p>
              Do you want to know whether a specific project is worth investing
              or not? Our estimators and professionals will let you know the
              exact estimate before you receive quotes from contractors and
              quotes from vendors. Our estimate will save you from risks
              associated with incorrect investment purchasing decisions.
            </p>

            <h1 className="text-indigo-900 font-bold text-4xl mb-4 mt-8">
              MATERIAL & QUANTITY TAKEOFF FROM PLANS
            </h1>

            <p>
              If you are struggling to land more jobs, lagging behind in your
              annual milestones, getting worried on business turnover, certainly
              you are having hard time getting takeoffs from the plans. The less
              you get bids submitted, the less will be your probability to win
              the jobs. We therefore, ensure you to right away call us, discuss
              specific objectives, even buy monthly quantity takeoff packages
              and leave the rest to us.
            </p>

            <h1 className="text-indigo-900 font-bold text-4xl mb-4 mt-8">
              Takeoff Construction Plans:
            </h1>
            <p>
              If you are looking for detailed plan takeoffs with item lists
              broken down into trade specific descriptions and schedules, just
              send over plans/drawings with specifications. We will get back
              with quote and Turnaround time to complete the takeoff using
              specialized software i.e., Planswift, Bluebeam and Trimble.
            </p>

            <h1 className="text-indigo-900 font-bold text-3xl mb-4 mt-8">
              How Do We Come Up With Takeoff List When Blueprints Are Not 100%
              Complete?
            </h1>

            <p>
              We provide blueprint takeoff services to design/architects and
              most of the times contractors. The contractors that have to
              present bids to owners and having incomplete drawings and plans.
              The takeoffs are developed upon assumptions that are defensive and
              based upon design details for past projects completed.
            </p>
            <br />
            <p>
              The Material quantity takeoff is prepared upon the specific units
              based on client’s requirements. The material takeoff is in square
              footages when it’s needed to bid in sqfts. and likewise, for an
              item can be counted in each if its to be ordered from a supplier.
            </p>
            <h1 className="text-indigo-900 font-bold text-3xl mb-4 mt-8">
              How Can Contractors Determine Costs For Items And Prepare Quote
              (Estimate) For Their Client?
            </h1>
            <h1 className="text-indigo-900 font-bold text-lg mb-4 mt-8">
              First you need to get takeoffs done from a specialist company for
              which none other than WorldEstimating should be your choice.
            </h1>

            <p>
              Next is to verify the costs at your end as well as most of the
              times, you are getting better quotes from your vendors, adjust
              profit, call us to make these changes as well and finally submit
              the bid. Make a per sqft. total project cost and per sqft. item
              cost database at your end as well. Make an inhouse list of the
              similar size, project portfolio with their costs. Offset the
              project under consideration with the past project cost and verify
              the bid values falls within. In this way, you can earn good markup
              and increase your likelihood of winning the bids.
            </p>

            <h1 className="text-red-600 text-center font-semibold m-6 text-2xl">
              Don’t forget to see our guide for bid submittal where we have
              mentioned tips to close more sales
            </h1>
            <h1 className="text-indigo-900 font-bold text-3xl mb-4 mt-8">
              How Outsourcing Takeoffs Help You Win More Business?
            </h1>

            <div className="flex sm:flex-row flex-col mb-12">
              <Image src={Logo1} width={400} height={50} alt="imsgr" />
              <p>
                Ans. Performing takeoffs in-house is time consuming and one
                cannot pull out quantities without the expertise. Even if you
                have an in-house estimator, he cannot get bill of quantities for
                sufficient proportion of bids to win jobs and make the business
                sustainable. Therefore, outsourcing your takeoffs and getting
                the work done by an estimation company not only get away burden
                from your shoulder. It also spares out time for your estimator
                to offset your costs & profits to bids, submit them to
                respective GCs and follow them up.
              </p>
            </div>

            <p>
              Our estimates will provide you a clear insight into the cost of
              your project earlier the detailed plans are drawn up. Our
              customers will get the right construction cost estimates that you
              can share with confidence to your client. Our 15 years of
              experience develop us the best in the industry and we use the
              right standards using the advanced software. Our users will get a
              projected cost that is accurate depending on the information
              provided by the customers.
            </p>
            <br />
            <p>
              World Estimating is having a proven track record of providing
              building takeoffs with zip code vendor quoted estimates for 15
              years and our expert estimators provide the right proposals
              related to the missing information and typical costs associated
              for a given space.
            </p>

            <div className="bg-slate-200 flex sm:flex-row flex-col p-8 m-4 ">
              <h1 className="text-indigo-900 font-semibold">
                Get to know about how much we will charge?
              </h1>
              <div className="flex items-center justify-around sm:flex-row flex-col p-3 m-3">
                <h1 className="text-indigo-900 font-semibold text-sm">
                  Send us plans and scope at info@worldestimating.com
                </h1>

                <button className="yello1 p-4 hover:opacity-80 text-slate-700 mt-2">
                  Get a Quote 30%off
                </button>
              </div>
            </div>

            <h1 className="text-indigo-900 font-bold text-3xl mb-4 mt-8">
              WHY WORLD ESTIMATING IS THE RIGHT OPTION FOR CONSTRUCTION TAKEOFF
              SERVICES?
            </h1>
            <p>
              Being able to understand your exact requirements and having dealt
              with thousands of clients each year, we have developed an amazing
              construction takeoff and estimating template bids. All of these
              combined with plentiful of experience and software expertise has
              emerged us being invincible in winning our client’s success and
              trust.
            </p>
            <h1 className="text-indigo-900 font-bold text-xl mb-4 mt-8">
              Success Stories:
            </h1>

            <p>
              An insulation contractor has outsourced his complete takeoff to us
              for whom we provide quantities, manhours and pricing. The
              contractor is based in Sapulpa, OK. Their company was having hard
              time, building up takeoffs and thus submitting sufficient bids to
              land new jobs.
            </p>
            <br />

            <p>
              Our solution was monthly package in which they can send 10 jobs of
              specific scope and size to us. They just forward to ITB to us,
              from where we retrieve plans/drawings, perform takeoff, assign
              costs and send back estimates to them.
            </p>
            <br />
            <p>
              This cost them $1500 and it enabled them to land most of the jobs.
              Since then, they are our regular client who have completely
              outsourced their takeoffs to us and closing more leads.
            </p>
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

export default CTS;
