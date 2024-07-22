"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Logo from "../logosample.webp";
import Link from "next/link";

const ResidentialEstimating = () => {
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
        <div className="flex sm:flex-row flex-col">
          <div className="form-width">
            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl mb-4">
              RESIDENTIAL ESTIMATING SERVICES
            </h1>
            <p className="text-lg m-6 ml-0">
              Offering quick turnarounds and reliable solutions in residential
              estimating services tailored to the specific needs of Residential
              Contractors, Subcontractors, Homebuilders, Home Owners,
              Developers, Investors, Lenders, and Architects.
            </p>

            <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl mb-4">
              PORTFOLIO OF RESIDENTIAL ESTIMATING SERVICES PROJECTS
            </h1>

            <div className="flex ul-ce sm:flex-row flex-col justify-around p-8 text-lg">
              <ul>
                <li>Single-Family Residential Houses</li>
                <li>Multi-Family Residential Houses</li>
                <li>Duplex/Triplex Houses</li>
                <li>Custom Homes</li>
                <li>Modular Homes</li>
                <li>Apartments</li>
                <li>Bungalows</li>
              </ul>
              <ul>
                <li>Townhouses</li>
                <li>Mansions</li>
                <li>Condominium</li>
                <li>Home additions</li>
                <li>Home Improvements</li>
                <li>Remodeling</li>
              </ul>
              <Image src={Logo} width={200} height={200} />
            </div>
            <div className="flex justify-center">
              <button className="text-2xl bg-red-600 text-white text-center p-8 hover:opacity-75">
                View our residential estates
              </button>
            </div>

            <div className="mt-8">
              <p>
                An accurate residential estimate serves as a basis for the
                entire construction cash flows.
              </p>
              <br />
              <p>
                For planning the construction of residential buildings, a proper
                cost estimate gives the idea of the potential costs that helps
                calculate markups, allocate budget, obtain financing, quote
                prices to the clients, and negotiate with contractors and
                subcontractors through our Residential estimating services.
              </p>
              <br />
              <p>
                E-value estimating is best in the business with seasoned, expert
                estimators for residential construction estimating services of
                your project. After the thorough analysis of plans, we digitally
                takeoff the quantities using the latest software and consult our
                construction cost database and
                <strong>RSMeans for zip-code pricing</strong>;on your
                residential estimate. We perform the breakdown of labor costs
                with respect to union and prevailing wages including standard
                time and overtime. The bill of material is listed in CSI
                MasterFormat division wise or by the pattern of CSI costs in
                EXCEL spreadsheets so that you can easily review and send it to
                your vendors for pricing.
              </p>
              <br />
              <br />
              <p>
                <strong>
                  Our deliverables of residential construction estimating
                  services include:
                </strong>
              </p>
              <br />
              <br />
              <div className="ul-ce">
                <ul>
                  <li>
                    Residential Detailed Estimate tailored to your specific
                    needs being a contractor, home builder, owner for bidding,
                    procurement, budgeting and financing purposes.
                  </li>
                  <li>Digital Takeoff EXCEL files</li>
                  <li>Material Types &amp; Quantities</li>
                  <li>Material &amp; Labor Costs</li>
                  <li>Coloured Marked up Plans</li>
                  <li>
                    Complete Takeoff Summary containing labor hours, permits,
                    taxes, contingencies, overheads, profit percentages and
                    various other costs.
                  </li>
                </ul>
              </div>
              <h1 className="text-indigo-900 width-estimate-h1 font-bold text-2xl mt-8 mb-4">
                WHY CHOOSE E-value estimating?
              </h1>

              <p>
                We promise to deliver the following things in our residential
                estimating services:
              </p>
              <div className="ul-ce">
                <ul>
                  <li>Detailed estimates with a high emphasis on accuracy</li>
                  <li>
                    Cost-effective solutions at market competitive rates (
                    <a href="#">
                      <u>check prices</u>
                    </a>
                    )
                  </li>
                  <li>
                    Faster and timely delivery of estimates so you meet your
                    deadlines
                  </li>
                  <li>Reduce overheads and only pay us when you need us</li>
                  <li>
                    Increase efficiency and get more jobs by bidding on more
                    projects
                  </li>
                  <li>
                    Consultation on smartly filing bids to acquire more projects
                  </li>
                  <li>
                    Help you Increase your bid-hit ratio and win more bids
                  </li>
                  <li>24/7 chat &amp; email support</li>
                </ul>
              </div>
              <p>
                <br />
              </p>
            </div>

            <h1 className="text-indigo-900 font-bold text-3xl mb-4  m-10 ml-0 width-upload">
              OUR RESIDENTIAL ESTIMATING SERVICES INCLUDES
            </h1>

            {/*  */}

            <main className="text-gray-200 border-r ">
              <div className="border-0">
                <div className="border-0">
                  <div className="border-0">
                    <section className="border-0">
                      <div className="text-lg border-0">
                        <ul className="border-0">
                          <li>
                            <section className="text-left text-black bg-white text-lg border-0">
                              <div className="border-0">
                                <p className="border-0">
                                  The items quantified in our Residential
                                  Estimating Services portfolio of services
                                  include estimating and quantifying items in
                                  their respective{" "}
                                  <strong>
                                    units of volume, length, area, and number.
                                  </strong>
                                </p>
                                <br />
                                <p className="border-0">
                                  But depending upon your needs, we can adjust
                                  the quantity takeoff in our residential
                                  estimating services based on the units that
                                  are suitable for a specific purpose. For
                                  example, for the supply of lumber, the vendors
                                  usually need beams, studs, joists, and rafters
                                  quantified as EA with a complete detailed list
                                  of nails and clips.
                                </p>
                                <br />
                                <p className="border-0">
                                  We generally quantify the following items in
                                  our residential takeoffs:
                                </p>
                                <br />

                                <div className="ul-ce">
                                  <ul className="border-0">
                                    <li className="border-0">
                                      General conditions (permits, taxes,
                                      logistics, storage, etc.)
                                    </li>
                                    <li className="border-0">
                                      <a
                                        href="https://worldestimating.com/sitework-estimating-services/"
                                        className="text-black"
                                      >
                                        <u>Sitework</u>
                                      </a>{" "}
                                      (site preparation, excavation,
                                      backfilling, earthwork, landscaping)
                                    </li>
                                    <li className="border-0">
                                      <a
                                        href="https://worldestimating.com/concrete-estimating-services/"
                                        className="text-black"
                                      >
                                        <u>Concrete</u>
                                      </a>{" "}
                                      (foundation, driveway, sidewalk, paving)
                                    </li>
                                    <li className="border-0">
                                      <a
                                        href="https://worldestimating.com/masonry-estimating-services/"
                                        className="text-black"
                                      >
                                        <u>Masonry</u>
                                      </a>{" "}
                                      (walls and piers)
                                    </li>
                                    <li className="border-0">
                                      <a
                                        href="https://worldestimating.com/wood-plastic-composites-estimating/"
                                        className="text-black"
                                      >
                                        <u>Wood/Plastic composites</u>
                                      </a>{" "}
                                      (Structural{" "}
                                      <a
                                        href="https://worldestimating.com/lumber-takeoff/"
                                        className="text-black"
                                      >
                                        <u>lumber</u>
                                      </a>
                                      , millwork, carpentry)
                                    </li>
                                    <li className="border-0">
                                      <a
                                        href="https://worldestimating.com/thermal-moisture-protection-estimating-services/"
                                        className="text-black"
                                      >
                                        <u>Thermal & Moisture protection</u>
                                      </a>{" "}
                                      (Insulation for roof and walls)
                                    </li>
                                    <li className="border-0">
                                      <a
                                        href="https://worldestimating.com/openings-estimating-services/"
                                        className="text-black"
                                      >
                                        <u>Doors & Windows</u>
                                      </a>
                                    </li>
                                    <li className="border-0">
                                      <a
                                        href="https://worldestimating.com/metals-estimating-services/"
                                        className="text-black"
                                      >
                                        <u>Metals</u>
                                      </a>{" "}
                                      (Structural steel reinforcements, metal
                                      railings)
                                    </li>
                                    <li className="border-0">
                                      <a
                                        href="https://worldestimating.com/interior-exterior-finishes/"
                                        className="text-black"
                                      >
                                        <u>Interior/Exterior finishes</u>
                                      </a>{" "}
                                      (
                                      <a
                                        href="https://worldestimating.com/drywall-takeoff-services/"
                                        className="text-black"
                                      >
                                        <u>drywall</u>
                                      </a>
                                      , plastering, painting, flooring, tiling,
                                      roofing, wall and pier finishes)
                                    </li>
                                    <li className="border-0">
                                      <a
                                        href="https://worldestimating.com/plumbing-estimating-services/"
                                        className="text-black"
                                      >
                                        <u>Plumbing</u>
                                      </a>{" "}
                                      fixtures
                                    </li>
                                    <li className="border-0">
                                      <a
                                        href="https://worldestimating.com/hvac-estimating-services/"
                                        className="text-black"
                                      >
                                        <u>Mechanical</u>
                                      </a>{" "}
                                      (exhaust fan, HVAC systems)
                                    </li>
                                    <li className="border-0">
                                      <a
                                        href="https://worldestimating.com/electrical-estimating-services/"
                                        className="text-black"
                                      >
                                        <u>Electrical</u>
                                      </a>{" "}
                                      (lighting, alarms, detectors, ceiling
                                      fans, TV cables)
                                    </li>
                                    <li className="border-0">
                                      Other specialties (stairs, toilet
                                      accessories, kitchen equipment, and
                                      furnishings)
                                    </li>
                                    <li className="border-0">Contingencies</li>
                                  </ul>
                                </div>
                                <br />
                                <p className="border-0">
                                  Labor costs and Man-hours
                                </p>
                                <br />
                              </div>
                            </section>
                            <div className="text-left text-black bg-white text-lg border-0">
                              <strong>
                                <h2 className="text-indigo-900 text-4xl border-0">
                                  Why You Should Use Our Residential Estimating
                                  Services
                                </h2>
                              </strong>
                            </div>
                            <div className="text-left text-black bg-white text-lg border-none">
                              <br />
                            </div>
                            <div className="flex sm:flex-row flex-col justify-around">
                              <div className="text-left text-black bg-white text-lg border-0 ">
                                <section className="border-0">
                                  <div className="border-0 ul-ce">
                                    <ul className="border-0">
                                      <li className="border-0">
                                        <a
                                          href="https://www.planswift.com/"
                                          rel="nofollow"
                                          className="text-black"
                                        >
                                          Planswift
                                        </a>
                                      </li>
                                      <li className="border-0">
                                        <a
                                          href="https://www.bluebeam.com/"
                                          rel="nofollow"
                                          className="text-black"
                                        >
                                          Bluebeam
                                        </a>
                                      </li>
                                      <li className="border-0">
                                        On-Screen Estimating
                                      </li>
                                      <li className="border-0">
                                        <a
                                          href="https://www.rsmeans.com/"
                                          rel="nofollow"
                                          className="text-black"
                                        >
                                          RS Means
                                        </a>
                                      </li>
                                      <li className="border-0">Xactimate</li>
                                    </ul>
                                  </div>
                                </section>
                              </div>
                              <div className="text-left text-black bg-white text-lg border-0">
                                <section className="border-0">
                                  <div className="border-0 ">
                                    <ol className="border-0 list-decimal list-inside">
                                      <li className="border-0">FastPIPE</li>
                                      <li className="border-0">FastDUCT</li>
                                      <li className="border-0">FastWRAP</li>
                                      <li className="border-0">
                                        <a
                                          href="https://www.trimble.com/"
                                          rel="nofollow"
                                          className="text-black"
                                        >
                                          Trimble
                                        </a>
                                      </li>
                                      <li className="border-0">
                                        On-Screen Mark Systems
                                      </li>
                                    </ol>
                                  </div>
                                </section>
                              </div>
                            </div>

                            <br />

                            <div className="text-left text-black bg-white text-lg border-0">
                              <strong>
                                <h2 className="text-indigo-900 text-4xl border-0">
                                  FOR RESIDENTIAL CONTRACTORS
                                </h2>
                              </strong>
                            </div>
                            <div className="text-left text-black bg-white text-lg border-none">
                              <br />
                            </div>
                            <section className="text-left text-black bg-white text-lg border-0">
                              <div className="border-0">
                                <p className="border-0">
                                  If you are a busy contractor involved in the
                                  field activities, our residential estimating
                                  services can help you in securing bids for
                                  your projects by preparing your cost estimates
                                  and bid documents for submission. Let us
                                  handle your estimates so your quotes will be
                                  ready to submit before the deadline.
                                </p>
                              </div>
                            </section>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </main>

            {/*  */}

            <br />
            <br />

            <div className="flex sm:flex-row flex-col p-6">
              <div className="width50">
                <h1 className="font-semibold text-2xl text-indigo-900">
                  Detailed Accurate Residential Bid Estimates
                </h1>
                <br />
                <p>
                  As we have been committed to providing Residential Estimates
                  to the Construction industry for so long, our residential
                  estimators and Engineers takeoff quantities of material,
                  labor, and man-hours.
                </p>
                <br />
                <p>
                  Our relations with the local vendors and utilizing the RSMeans
                  database, we employ the up to date pricing to achieve the
                  right estimate. Our services include:
                </p>
                <br />
                <ul class="list-disc list-inside space-y-2">
                  <li>Accurate and quick bid estimates with marked-up plans</li>
                  <li>Assistance on smartly filing bids</li>
                  <li>Bidding network profile management</li>
                  <li>New project lead generation</li>
                  <li>Subcontractor marketing</li>
                </ul>
              </div>

              <div className="width50">
                <h1 className="font-semibold text-2xl text-indigo-900">
                  New Construction Residential Estimates
                </h1>
                <br />
                <p>
                  Whether it’s a simple three family residence or a highly
                  complex residential apartment, our estimators have such
                  tremendous expertise to list down material, labor and create
                  an accurate residential estimate through our residential
                  estimating services.
                  <br />
                </p>
                <br />
                <p>
                  Our experience with the residential builds and proficiency in
                  the software helps us quickly takeoff the quantities to
                  prepare quotes for you so that you remain committed to your
                  daily site work. We are currently serving residential
                  contractors from all 50 states and dealing in all new
                  construction.
                </p>
              </div>
            </div>

            {/*  */}

            <div>
              <h1 className="font-semibold text-2xl text-indigo-900">
                residential construction estimating services For Trade
                Contractors
              </h1>
              <br />
              <p>
                Whether you specialize in small domestic builds or large
                residential projects, we can assure you that our estimates
                comply with your specific needs to win bid proposals, set good
                profit margins, and procure material and labor. With a team of
                specialized trade estimators, we have served the subcontractors
                involved in our residential construction estimating services:
              </p>
            </div>

            <div className="flex ul-ce sm:flex-row flex-col justify-around p-8 text-lg">
              <ul class="list-disc list-inside space-y-2">
                <li>Excavation & Sitework</li>
                <li>Earthwork</li>
                <li>Landscaping</li>
                <li>Concrete</li>
                <li>Masonry</li>
                <li>Plastering</li>
                <li>Painting</li>
                <li>Framing</li>
              </ul>
              <ul class="list-disc list-inside space-y-2">
                <li>Drywall</li>
                <li>Tiling</li>
                <li>Flooring</li>
                <li>Glazing</li>
                <li>Joinery</li>
                <li>Gyprock</li>
                <li>Lumber</li>
                <li>Carpentry</li>
              </ul>
              <ul class="list-disc list-inside space-y-2">
                <li>Electrical</li>
                <li>Mechanical</li>
                <li>Plumbing</li>
                <li>Insulation</li>
                <li>Doors & Windows</li>
                <li>Accessories</li>
                <li>Equipment</li>
                <li>Furnishings</li>
              </ul>
            </div>

            <div className="flex sm:flex-row flex-col p-6">
              <div className="width50">
                <h1 className="font-semibold text-2xl text-indigo-900">
                  Renovations, Remodeling & Home additions
                </h1>
                <br />
                <p>
                  We are helping remodeling and renovation contractors for any
                  sort of work that has to be done to an existing home. Home
                  Renovation estimates have been a hectic and serious task for
                  contractors to come up with figures to present to their
                  clients.
                </p>
                <br />
                <p>
                  We have a seasoned team of Residential estimators to help the
                  remodeling and renovation industry with material takeoffs and
                  Residential Construction Estimating Services.
                </p>
                <br />
              </div>
              <div className="width50">
                <Image src={Logo} width={300} height={200} alt="image" />
              </div>
            </div>

            <div>
              <h1 className="text-indigo-900 font-semibold text-4xl">
                FOR RESIDENTIAL DEVELOPERS
              </h1>
              <br />
              <div className="flex sm:flex-row flex-col p-6">
                <div className="m-2">
                  <h1 className="text-indigo-900 font-semibold text-2xl">
                    Preliminary Residential Estimates
                  </h1>
                  <br />

                  <p>
                    We understand how important are preliminary estimates for
                    investors and developers to have correct budget numbers for
                    making the right decisions. From single-family, duplex to
                    multi-family residential projects our estimators perform
                    budget estimates and show you some hidden costs that you may
                    have overlooked to help you identify issues before it would
                    cost you hundreds or thousands of dollars. We also assist in
                    the reevaluation of the estimate as a design or the project
                    progresses.
                  </p>
                  <br />
                  <p>
                    Our preliminary estimate comprises the breakdown of the
                    following quantities for material and labor:
                  </p>
                  <br />
                  <ul class="list-disc list-inside space-y-2">
                    <li>Preliminaries</li>
                    <li>Substructures (foundations, footings)</li>
                    <li>
                      Superstructures (brickwork, walls, roofs, sidings,
                      staircase, floors, screen, doors, windows, etc.)
                    </li>
                    <li>Finishes (flooring, drywall, painting, etc.)</li>
                    <li>Fittings</li>
                    <li>
                      Services (mechanical, electrical, plumbing, fire,
                      insulation, etc.)
                    </li>
                    <li>External Services</li>
                    <li>Contingency</li>
                  </ul>
                </div>

                <div className="m-2">
                  <h1 className="text-indigo-900 font-semibold text-2xl">
                    Final Pre-Construction Residential Estimates
                  </h1>
                  <br />

                  <p>
                    We understand how important are preliminary estimates for
                    investors and developers to have correct budget numbers for
                    making the right decisions. From single-family, duplex to
                    multi-family residential projects our estimators perform
                    budget estimates and show you some hidden costs that you may
                    have overlooked to help you identify issues before it would
                    cost you hundreds or thousands of dollars. We also assist in
                    the reevaluation of the estimate as a design or the project
                    progresses.
                  </p>
                  <br />
                  <h1 className="text-indigo-900 font-semibold text-2xl">
                    Multi-Family & Apartment Residential Estimates
                  </h1>
                  <br />
                  <p>
                    Many large projects especially multi-use family or apartment
                    residential estimates are absolutely critical for the
                    success of a profitable outcome before an investment goes in
                    vain. We not only provide estimates but also assist in value
                    engineering and pinpoint items and trades that bring huge
                    costs and cut down the developer’s profit.
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-indigo-900 font-semibold text-4xl">
              FOR RESIDENTIAL ARCHITECTS AND RESIDENTIAL DESIGNERS
            </h1>

            <br />
            <br />
            <p>
              Whether designing a new home or remodel, some of the most
              time-consuming tasks are going back to redoing design work after
              an architect design doesn’t meet your client’s budget for the
              project. We help architects throughout the design phase. Our
              estimators work on schematic, conceptual, design development, and
              final construction documents to design estimates for architects
              and designers.
            </p>

            <br />
            <br />

            <h1 className="text-indigo-900 font-semibold text-4xl">
              Focus On Growing Your Business And Let Us Help You With Your
              Quotes & Estimates!
            </h1>

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
              At E-value estimating, residential estimating is the major portion
              of the work that we do, serving North American, Caribbean, and
              Australian regions. In the US, we serve the following markets:
              Newyork, Florida, Oklahoma, Minnesota, Tennessee, Illinois, Texas,
              Georgia, Arizona, Michigan, Missouri, Massachusetts, Ohio,
              Colorado, Indiana, Kentucky, Louisiana, Maryland, Alabama,
              Connecticut, Pennsylvania, California, Washington, South Carolina,
              North Carolina, Oregon, New Jersey, Virginia.
            </p>
<br />
            <div className="bg-slate-200 p-6 flex sm:flex-row flex-col justify-around align-middle items-center rounded-sm mr-4">
              <h1 className="text-indigo-900 text-lg text-center font-bold mb-5">
                Without any delay, contact us and leave the rest on us.
              </h1>
              <button className="bg-yellow-300 hover:bg-yellow-100 text-black p-4">
                Call us & get 30% off
              </button>
            </div>
          </div>

          <div className="width-details">
            <button className="bg-yellow-500 text-xl p-4 w-full mt-4">
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

export default ResidentialEstimating;
