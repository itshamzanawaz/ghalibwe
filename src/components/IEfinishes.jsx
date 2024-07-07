"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { FaQuoteRight } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import Footer from "./Footer";

const IEfinishes = () => {
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
      Q: "What do we charge for estimates of Interior & Exterior Finishes?",
      A: "We usually charge $200 on average as per the scope of the project you are bidding on. It can be as low as $100 for a few hours of work",
    },
    {
      Q: "Are there any monthly packages available for finishing contractors?",
      A: "Our monthly takeoff packages are very much cost-effective and save your expense of hiring an estimator and will definitely save your time if you are doing takeoffs yourselves. Click here to learn more.",
    },
    {
      Q: "What do we takeoff for painting contractors?",
      A: "We take off all the quantities of coatings, finishes, DTM, glazed and specialized coatings by mentioning the Walls and partitions details and descriptions in proper line items.",
    },
    {
      Q: "What are the turnaround times of most of the finishing estimates?",
      A: "Typically the turnaround time is within 24-48 hrs",
    },
    {
      Q: "How is the price established against the takeoff of the finishes?",
      A: "We have links with suppliers/vendors and have developed our own databases of pricing. We also employ RSMeans for up to date and zip code based pricing ",
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
          INTERIOR & EXTERIOR FINISHES ESTIMATING SERVICES
        </h1>
        <br />
        <br />
        <div className="width80 flex justify-between sm:flex-row flex-col-reverse">
          <div>
            {" "}
            <p>
              Interior and exterior finishes estimations are very important for
              the construction of buildings. Painting, stucco, plaster,
              specialized coatings estimates are necessary for winning bids and
              quoting a price to the client for contractors. They normally
              demand for bid and material takeoffs for ordering and procuring
              material.
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
              Accuracy matters a lot when contractors are held responsible for
              any shortcoming in the estimate, therefore experience,
              professionalism and ability along with ensured practices are
              maintained by the estimation company. Hence, relying on
              outsourcing the estimates and cutting down your in-house costs
              always save expenditure if and only if accuracy is established and
              promised.
            </p>
            <br />
            <p>
              Metallics, Patinas & chrome, interior & exterior finishes work
              always costs a lot and waste is always dumped when excess is
              ordered and expenses are credited to the contractor so to avoid
              wastage, accurate takeoff is required which is only possible when
              the contractor is provided with exact accurate estimate and
              pricing.
            </p>
          </div>
          <img
            className="width20"
            src="https://worldestimating.com/wp-content/uploads/2019/12/interior-finshes-705x470.jpg"
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
              THE RANGE OF FINISHES ESTIMATING SERVICES
            </h1>
            <br />
            <div className="flex flex-col sm:flex-row flex-wrap">
              <ul className="space-y-4 pl-4 m-2 list-disc">
                <li>Material Takeoffs</li>
                <li>Flooring Estimates</li>
                <li>Painting Estimates</li>
              </ul>

              <ul className="space-y-4 pl-4 m-2 list-disc">
                <li>Ceiling Estimates</li>
                <li>Drywall Estimates</li>
                <li>Stucco Estimates</li>
              </ul>

              <ul className="space-y-4 pl-4 m-2 list-disc">
                <li>Bid Estimate</li>
                <li>Bid Reviews</li>
                <li>Budget Estimate</li>
              </ul>

              <ul className="space-y-4 pl-4 m-2 list-disc">
                <li>Change Order Estimate</li>
                <li>Project Lead Generation</li>
                <li>Subcontractor Marketing</li>
              </ul>
            </div>
            <br />
            <br />
            <br />
            <div className="flex flex-col sm:flex-row justify-between">
              <h1 className="font-semibold width50 text-4xl">
                Outsource Your Finishes Estimating Services To Us And Submit
                More Bids, Improve Accuracy, And Increase Your Profit Margins.
                Get 30%Off On Your First Estimate!
              </h1>
              <div className="width50 overflow-hidden">
                <img
                  className="hover:scale-125  hover:transition-all"
                  src="https://worldestimating.com/wp-content/uploads/2019/12/exterior-finshes.jpg"
                  alt=""
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            {/* tick list */}
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              FLOORING ESTIMATING SERVICES
            </h1>
            <br />
            <p>
              At E-value estimating, we strive to provide expert material takeoffs
              and cost estimates for flooring contractors, flooring installation
              companies, carpet mills, architects, designers, and manufacturers.
              Our highly accurate flooring estimating services are tailored to
              minimize waste keeping in mind all the patterns, inlays, and
              design elements.
            </p>
            <br />
            <p>
              With the ability to handle the complex patterns and inlays, we
              have successfully delivered flooring estimates including access
              flooring, stair details, stair nosing, etc for multi use
              residential buildings, commercial buildings, apartments, hotels,
              restaurants, schools, hospitals, arenas, banks, libraries, stores,
              etc.
            </p>
            <br />
            <p>
              Our expert flooring estimators are well versed with Planswift,
              Oncenter, Bluebeam, etc to perform the right material takeoff and
              reach the right figures. We also contribute to provide easy to
              follow seeming diagrams for flooring installers.
            </p>
            <br />
            <strong>Our flooring estimate deliverables include:</strong>
            <br />
            <br />
            <ul className="space-y-4 pl-4 list-disc">
              <li>Digital flooring takeoff file</li>
              <li>Material spreadsheet</li>
              <li>Color-coded plans</li>
              <li>Seaming diagrams</li>
              <li>
                Takeoff summary including total square feet, seaming &amp;
                welding linear feet, wall base, stair information, etc
              </li>
              <li>Review of bid documents and addendums</li>
            </ul>
            <br />
            <br />
            <strong>
              We provide the flooring takeoffs along with wainscoting, wall
              base, wall tiles quantities, and quantify the following trades:
            </strong>
            <br />
            <br />
            <div className="flex flex-col sm:flex-row pl-4 justify-around m-2">
              <ul className="space-y-4">
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Broadloom Carpet
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Resinous Flooring
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Linoleum
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Stair Tread & Nosing
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Sealed Concrete
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Rubber Base
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Terrazzo
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Laminate Flooring
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Leather Flooring
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Dance Flooring
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Fluid Applied Flooring
                </li>
              </ul>

              <ul className="space-y-4">
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Vinyl Composite Flooring
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Rubber Flooring
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Wood Flooring
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Epoxy Flooring
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Plank Flooring
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Athletic Flooring System
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Ceramic Tile
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Mosaic Tile
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Carpet Tiles
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Resilient Tile
                </li>
                <li>
                  <FaCheckCircle className="text-white bg-black text-6xl rounded-full inline mr-4" />
                  Cork Flooring
                </li>
              </ul>
            </div>
            <br />
            <br />
            {/* para tick list*/}
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              PAINTING & COATING ESTIMATING SERVICES
            </h1>
            <br />
            <p>
              Let us help you with the quick and accurate painting estimating
              services to improve your efficiency, increase bid hit ratio, and
              profit potential and save your time to handle your business
              growth. We have aced in providing painting estimates for
              residential, commercial, and industrial projects.
            </p>
            <br />
            <p>
              With the use of the latest software technology and practical
              knowledge, we have empowered interior & exterior painting
              contractors with the exact figures to produce the quality bid
              estimates to land on more jobs, and also minimize rework and
              wastage.
            </p>
            <br />
            <p>
              In our painting takeoffs, we properly specify the amount of
              interior painting finishes for walls & ceiling, door/window,
              spindles, baseboards & chair rails, patching, crown molding, etc,
              and the amount used for exterior painting for siding, overhang,
              soffit, doors/windows, dormer, gables, shutters, guttering,
              flashing, concrete blocks, etc.
            </p>
            <br />
            <br />
            <br />
            <strong>Our painting estimate deliverables include:</strong>
            <br />
            <br />
            <ul className="list-disc space-y-4 pl-4 m-2">
              <li>Takeoff EXCEL spreadsheets</li>
              <li>Material &amp; Labor costs per SF</li>
              <li>Color-coded plans</li>
              <li>Labor hours</li>
              <li>
                Bid summary including total cost, overheads, profit percentage,
                etc and review of inclusions and exclusions
              </li>
            </ul>
            <br />
            <br />
            <strong>
              We offer a complete range of painting takeoffs including wall
              coverings & floor coatings and quantify the following painting and
              coating finishes:
            </strong>
            <br />
            <br />
            <ul className="list-disc space-y-4 pl-4 m-2">
              <li>Graffiti-Resistant Coatings</li>
              <li>Fire-Retardant Coatings</li>
              <li>Elastomeric Coatings</li>
              <li>Special Coatings</li>
              <li>Concrete Coatings</li>
              <li>Stucco Coatings</li>
              <li>Masonry Coatings</li>
              <li>Elastomeric Coatings for Wall</li>
              <li>Mold Retardant Coatings</li>
            </ul>
            <br />
            <br />
            {/* h1 border  para */}
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              DRYWALL ESTIMATING SERVICES
            </h1>
            <br />
            <br />
            <div className="border-2 border-slate-200 px-4 py-8">
              <p>
                Drywall and ceiling contractors are the regular clients that
                reach to us for their interior & exterior finishes of framing,
                taping, and gypsum boards. Our takeoffs are accurate and help
                our clients not only in quoting marked-up prices to general
                contractors but also to their suppliers. Mosaic, tile,
                acoustical consultants, and athletics floor courts have to work
                so much apart from winning jobs and implementing the work at the
                site.
                <br />
                <br />
                Click here to learn more about our drywall estimating services.
              </p>
            </div>
            <br />
            <br />
            <br />
            <div className="border-2 border-slate-200 px-4 py-8">
              <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
                CEILING ESTIMATING SERVICES:
              </h1>

              <br />

              <ul className="pl-4 space-y-4 list-disc m-2">
                <li>Acoustical Ceilings</li>
                <li>Ceiling Suspension Assemblies</li>
                <li>Specialty Ceilings</li>
                <li>Luminous Ceilings</li>
                <li>Suspended Decorative Grids</li>
                <li>Stretched-Fabric Ceiling Systems</li>
                <li>Textured Ceilings</li>
                <li>Tin Ceilings</li>
                <li>Maintenance of Ceilings &amp; Restoration</li>
              </ul>
            </div>
            <br />
            <br />
            <br />
            <div className="border-2 border-slate-200 px-4 py-8">
              <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
                PLASTER & GYPSUM BOARD ESTIMATING SERVICES
              </h1>

              <br />

              <ul className="pl-4 space-y-4 list-disc m-2">
                <li>Furring &amp; Lathing</li>
                <li>Non-Load-Bearing Wall Framing</li>
                <li>Head-of-wall Framing Systems</li>
                <li>Portland Cement Plaster (Stucco)</li>
                <li>Drywall</li>
                <li>Plaster Fabrications</li>
                <li>Venetian &amp; Other Lime Plasters</li>
                <li>Gypsum Board</li>
                <li>Gypsum Wallboard</li>
                <li>Glass Tiles &amp; Mosaics</li>
                <li>Acoustical Plaster</li>
                <li>Mosaic Tiles</li>
                <li>Specialty Tiles</li>
                <li>Terracotta Tiles</li>
              </ul>
            </div>
            {/* border row */}

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
            {/* get a quote riser */}

            <br />
            <br />
            <br />

            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/5 w-full">
                <h1 className="text-indigo-900 text-3xl font-semibold">
                  Follow The Simple Process!
                </h1>
                <br />
                <h1 className="text-indigo-900 text-xl font-semibold">
                  Let Us Help You With Your Estimates And Increase Your ROI
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row justify-around sm:w-4/5 w-full">
                <div className="space-y-4">
                  <div className="flex">
                    <LuUpload className="text-6xl mx-8" />
                    <div>
                      <h1 className="text-indigo-900 font-semibold text-xl">
                        Upload Your Plans
                      </h1>
                      <br />
                      <p>
                        Click here to upload your plans. They can be Schematic,
                        Bid set, Conceptual Design Development, or Construction
                        document drawings. Following formats are acceptable:
                        .PDF, .TIFF, .TIF, .DXF, .DWG, .PLN, .DWF, .OSX, .JPEG,
                        .JPG, .CAL, .CPC, .DJVU. You can provide your labor
                        rates and quoted material prices from your suppliers as
                        well.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <FaQuoteRight className="text-4xl mx-8" />
                    <div>
                      <h1 className="text-indigo-900 font-semibold text-xl">
                        Get A Quote
                      </h1>
                      <br />
                      <p>
                        We will send you a quote consisting of the invoice,
                        delivery date, and turnaround time which you can pay via
                        Credit Card, Debit Card, or PayPal.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <IoNewspaperOutline className="text-4xl mx-8" />
                    <div>
                      <h1 className="text-indigo-900 font-semibold text-xl">
                        Receive Estimate
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
            </div>

            <br />

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

export default IEfinishes;
