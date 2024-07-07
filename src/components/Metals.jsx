"use client";
import React, { useState } from "react";
import Link from "next/link";

const Metals = () => {
  const [openIndex, setOpenIndex] = useState(null);

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

  return (
    <div className="absolute main">
      <div className="m-16">
        <div className="flex sm:flex-row flex-col sm:w-full">
          <div className="form-width px-2">
            {/* start */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              METALS ESTIMATING SERVICES
            </h1>
            <br />
            <p>
              Offering you{" "}
              <strong>
                accurate, affordable, and timely structural steel, rebar, and
                miscellaneous metals estimating services
              </strong>{" "}
              and detailing services for the wide scope of construction projects
              and help you reduce overhead costs, avoid wastage and save the
              environment.
            </p>
            <br />
            {/* image para */}

            <div className="flex flex-col sm:flex-row flex-wrap justify-around">
              <p className="width50">
                E-value estimating started as a steel consulting group for{" "}
                <strong>
                  metal framing contractors, steel erectors, steel
                  manufacturers, distributors, and fabricators
                </strong>{" "}
                which later on developed as a total pre-construction estimating
                consultancy. Our team of skilled structural steel estimators and
                engineers have developed the best estimating practices to
                analyze and audit takeoffs and control construction costs for
                our clients.
              </p>
              <img
                src="https://worldestimating.com/wp-content/uploads/2019/12/2-17-705x470.jpg"
                alt="metal estimating"
                className="width50 "
              />
            </div>
            <br />

            <p>
              For metals estimating services, all decks, trusses, railings, stud
              framing, joists, gratings, and castings are properly described and
              quantified which is again proof checked by senior estimators to
              ensure that the quality of the minute things in takeoffs should be
              kept intact. Our emphasis on accuracy and detail not only lessens
              the waste but also contributes to the green environment by
              ordering the less amount at the construction site and keeping away
              the dumped waste. Please visit our profile on The Blue Book.
            </p>

            <br />
            <p>
              Many of the steel fabricators and manufacturers, even steel
              framing contractors have trouble reading the technical details
              from the plans and making accurate takeoffs with structural
              details due to less technical know-how. We specialize in providing
              a complete range of steel estimating and detailing services with
              the ability to handle complex structures.
            </p>
            <br />
            <ul className="pl-4 space-y-4 m-2 list-disc">
              <li>
                Our estimators and detailers are well conversant with the
                manufacturing process, specifications, techniques like laser
                welding, advanced cutting, etc.
              </li>
              <li>
                <strong>Fast turnaround</strong>&nbsp;within 24 to 48 hours to
                quickly quote prices to your clients.
              </li>
              <li>
                <strong>Detailed cost estimate</strong>&nbsp;comprising
                material, labor, welders, cranes, fuel, equipment, etc along
                with labor hours required for rebar erection.
              </li>
              <li>
                Easy to review and edit estimates with&nbsp;
                <strong>color-coded marked up plans</strong>.
              </li>
             
              <li>
                We render&nbsp;<strong>optimum bar bending schedules</strong>
                &nbsp;for structural steel, rebar, piping, sheet metal,
                and&nbsp;HVAC duct &nbsp;fabrications/erections.
              </li>
              <li>
                If required by the client, we also&nbsp;
                <strong>advise various alternatives</strong>&nbsp;that help save
                money.
              </li>
              <li>
                <strong>24/7 support</strong>&nbsp;on live chat and email.
              </li>
            </ul>
            <br />
            <br />
            <br />
            <br />
            {/* parallel list */}

            <div className="flex flex-col sm:flex-row justify-between">
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                  Our steel estimating services include:
                </h1>
                <ul className="pl-4 space-y-4 m-2 list-disc mt-6">
                  <li>
                    Detailed and accurate steel takeoffs and estimates ranging
                    from budget, the order of magnitude, design, and bid
                    estimate.
                  </li>
                  <li>Precast estimation</li>
                  <li>Cold-form steel estimation</li>
                  <li>Steel frames takeoffs</li>
                  <li>Rebar estimation</li>
                  <li>Structural steel takeoffs</li>
                  <li>Bar bending schedules</li>
                  <li>Change order management</li>
                  <li>Rebar project management</li>

                  <li>Conflict Resolution</li>
                  <li>Consultancy on smartly filing bids</li>
                </ul>
              </div>

              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                  Our estimates comply with the standards:
                </h1>
                <ul className="pl-4 space-y-4 m-2 list-disc mt-6">
                  <li>
                    <a href="https://g.co/kgs/2fQNuE" rel="nofollow">
                      AASHTO
                    </a>
                    &nbsp;&ndash; American Association of State Highway and
                    Transportation Officials
                  </li>
                  <li>
                    <a href="https://www.astm.org/" rel="nofollow">
                      ASTM
                    </a>
                    &nbsp;&ndash; American Society for Testing and Materials
                  </li>
                  <li>
                    <a href="https://www.crsi.org/" rel="nofollow">
                      CRSI
                    </a>
                    &nbsp;&ndash; Concrete Reinforcing Steel Institute
                  </li>
                  <li>
                    <a href="https://rebar.org/" rel="nofollow">
                      RSIO
                    </a>
                    &nbsp;&ndash; Reinforcing Steel Institute of Ontario
                  </li>
                  <li>
                    <a href="https://www.concrete.org/" rel="nofollow">
                      ACI
                    </a>
                    &nbsp;&ndash; American Concrete Institute
                  </li>
                  <li>
                    <a href="https://g.co/kgs/dpi5YW" rel="nofollow">
                      BS
                    </a>
                    &nbsp;&ndash; British Standard
                  </li>
                </ul>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div className="flex flex-col sm:flex-row justify-between">
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                  OUR CLIENTS
                </h1>
                <ul className="pl-4 space-y-4 m-2 list-disc mt-6">
                  <li>Steel Manufacturers</li>
                  <li>Framing Contractors</li>
                  <li>Piping &amp; Duct Fabricators</li>
                  <li>Sheet Metal Fabricators</li>
                  <li>Rebar &amp; Structural Steel Fabricators</li>
                  <li>Rebar &amp; structural Steel Erectors</li>
                  <li>Installers</li>
                  <li>Distributors</li>
                </ul>
              </div>
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
                  FOR FABRICATORS & ERECTORS
                </h1>

                <p className="mt-6">
                  For fabrication, our estimates comprise all the material
                  costs, labor costs, and equipment costs used for drilling,
                  cutting, and welding of the fabricated steel items along with
                  manhours. And for erections and installations, we provide the
                  estimate that includes the mill base price for the fabrication
                  of different steel components, charges for shipping to the
                  site along with steel detailing, and man-hours.
                </p>
              </div>
            </div>

            <br />
            <br />
            <br />
            {/* h1 lists */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              WHAT WE QUANTIFY IN STEEL TAKEOFF SERVICES
            </h1>
            <br />
            <p>
              Our estimates comprise the detailed breakdown of metals and steel
              including materials, plates, connectors, accessories, and erection
              costs that help in planning, procurement, cost control, reduced
              storage space at the site, to ensure maximum productivity and cost
              savings for your projects.
            </p>
            <p>
              All line items are quantified and takeoff in an EXCEL sheet
              accompanied by marked-up plans and pdf format files. As per your
              requirements, your estimate can be categorized by unit price, lump
              sum, and cost-plus formats. We quantify the following types of
              materials:
            </p>
            <br />
            <br />

            <div className="flex flex-col sm:flex-row flex-wrap justify-around w-full">
              <ul className="pl-4 space-y-4 m-2 list-disc">
                <li>Fastenings</li>
                <li>Rebar</li>
                <li>Steel framing</li>
                <li>Metal joists</li>
                <li>Metal decking</li>
                <li>Stud framing</li>
                <li>Stick framing</li>
                <li>Dome structures</li>
                <li>Access ramps</li>
                <li>Stairs</li>
                <li>Load-bearing wall framing</li>
              </ul>

              <ul className="pl-4 space-y-4 m-2 list-disc">
                <li>Lintels</li>
                <li>Ladders</li>
                <li>Railings</li>
                <li>Gratings</li>
                <li>Decking</li>
                <li>Canopy</li>
                <li>Bollards</li>
                <li>Treads and nosing</li>
                <li>Trench drains</li>
                <li>Castings</li>
                <li>Trusses</li>
                <li>Ironwork</li>
              </ul>

              <ul className="pl-4 space-y-4 m-2 list-disc">
                <li>Floor steel</li>
                <li>Roof steel</li>
                <li>Column steel</li>
                <li>Copper flashing</li>
                <li>Fireproofing</li>
                <li>Gusset plates</li>
                <li>Base plates</li>
                <li>Steel Girders</li>
                <li>Steel Anchors</li>
                <li>Nosing strips</li>
                <li>Corner beads</li>
                <li>Ornamental ironwork</li>
              </ul>
            </div>
            <br />
            <br />
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              SCOPE OF PROJECTS
            </h1>
            <br />
            <p>
              With the capability to handle all types and sizes of projects, we
              provide structural steel estimating services and detailing
              services for the structures for the following scope of projects:
            </p>
            <br />
            <br />
            <br />

            <div className="flex flex-col sm:flex-row flex-wrap justify-around w-full">
              <ul className="pl-4 space-y-4 m-2 list-disc">
                <li>Public</li>
                <li>Residential</li>
                <li>Commercial</li>
                <li>Industrial</li>
                <li>Institutional</li>
                <li>Multiplexes</li>
                <li>High Rise Buildings</li>
                <li>Recreation Centers</li>
                <li>Power Plants</li>
                <li>Manufacturing Units</li>
                <li>Monuments</li>
              </ul>

              <ul className="pl-4 space-y-4 m-2 list-disc">
                <li>Parking</li>
                <li>Water Treatment Plants</li>
                <li>Condominiums</li>
                <li>Sports Clubs</li>
                <li>Health Centers</li>
                <li>Bridges &amp; Flyovers</li>
                <li>Dams</li>
                <li>Culverts</li>
                <li>Hotels</li>
                <li>Renovation</li>
                <li>Additions</li>
              </ul>
            </div>

            <br />
            <br />
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              SOFTWARE WE USE
            </h1>
            <br />
            <p>
              E-value estimating serves its clients with precise estimating
              services with the culmination of expert estimators and detailers
              proficient in the following Software:
            </p>
            <br />
            <br />
            <br />

            <div className="flex flex-col sm:flex-row flex-wrap justify-around w-full">
              <ul className="pl-4 space-y-4 m-2 list-disc">
                <li>
                  <a href="https://www.planswift.com/" rel="nofollow">
                    Planswift
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.asahq.com/Solutions/Rebar-Fabrication-Solutions/Estimating"
                    rel="nofollow"
                  >
                    ASA Rebar Estimating Software
                  </a>
                </li>
                <li>Soule Software</li>
                <li>RGS Rebar</li>
              </ul>

              <ul className="pl-4 space-y-4 m-2 list-disc">
                <li>
                  <a href="https://g.co/kgs/ng69Kg" rel="nofollow">
                    Tekla Structures
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.autodesk.com/products/autocad/overview"
                    rel="nofollow"
                  >
                    AutoCAD
                  </a>
                </li>
                <li>
                  <a href="https://rebarcad.com/" rel="nofollow">
                    Rebar CAD
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bentley.com/en/products/brands/microstation"
                    rel="nofollow"
                  >
                    ASA Microstation
                  </a>
                </li>
              </ul>
            </div>

            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              REBAR & STRUCTURAL STEEL ESTIMATING SERVICES
            </h1>
            <br />
            <p>
              With the ever-changing construction industry trends, the
              competition becomes intense and intense, only the precise
              estimates can mitigate the chances of overbidding and underbidding
              on your projects.
            </p>
            <br />

            <p>
              You can count on us for your rebar or reinforcing steel takeoffs
              as we have successfully delivered highly accurate and
              comprehensive estimates to rebar contractors for materials,
              accessories, and erection costs. Our rebar estimators have the
              capability and software expertise to handle the project of any
              type and complexity including bridges, residential buildings,
              commercial buildings, industrial buildings, infrastructures,
              culverts, retaining walls, wing walls, etc.
            </p>

            <br />

            <p>
              We make use of 3d model technology for steel estimating that
              depicts a clear understanding of the scope of work thus helping
              inaccurate cost analysis and feasibility. Our rebar estimating
              deliverables includes:
            </p>

            <br />

            <ul className="pl-4 space-y-4 m-2 list-disc">
              <li>Contract plans &amp; numbers</li>
              <li>Take-off Quantities</li>
              <li>Rebar Weight</li>
              <li>Structural Activity Codes (SAC)</li>
              <li>Part Codes (Rebar, wire mesh and other accessories)</li>
              <li>Steel grade (e.g. ASTM A108)</li>
              <li>Structure wise or scope wise bid item number</li>
              <li>Appendix</li>
              <li>Locations</li>
              <li>Reference Sections</li>
            </ul>

            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              REBAR & STRUCTURAL STEEL DETAILING SERVICES
            </h1>

            <p>
              Our rebar detailers specialize in the latest CAD technology like
              AutoCAD, Rebar CAD, ASA Microstation, and Tekla to prepare shop
              drawings that simplify the rebar arrangement for the erection of
              complex structures.
            </p>
            <br />
            <p>
              Many structural engineers, rebar fabricators, erectors, and
              installers approach us for detailing services that help their
              workers during the placement of reinforcing steel and lead to
              faster completion of the building structure.
            </p>
            <br />

            <p>
              Our team has practical knowledge of bar configurations to produce
              optimum bar bending or cutting schedule that helps reduce the
              wastage. With years of experience and attention to detail, we have
              reached a point where we can assure that you can refer to our
              thorough and easy to understand drawings for the visualization of
              actual structures.
            </p>

            <br />

            <p>
              Outsource your detailing services to us for efficient, accurate,
              and easy to follow drawings within the fastest turnaround times.
              We offer CAD drafting and detailing based on ACI, CRSI, ASTM, AS
              and BS coding formats including:
            </p>
            <br />
            <br />

            <div className="flex flex-col sm:flex-row flex-wrap justify-around w-full">
              <ul className="pl-4 space-y-4 m-2 list-disc width50">
                <li>Structural BIM modeling</li>
                <li>Rebar Shop Drawings</li>
                <li>Rebar Placement Drawings</li>
                <li>Rebar Detailing</li>
                <li>Structural and Light Steel Detailing</li>
                <li>Steel Joist &amp; Deck Detailing</li>
                <li>Bar Bending Schedules</li>
                <li>Precast Concrete Detailing</li>
                <li>Retaining Walls Detailing</li>
                <li>Foundation Detailing</li>
                <li>Shear Wall Detailing</li>
              </ul>

              <ul className="pl-4 space-y-4 m-2 list-disc width50">
                <li>Concrete Stair Detailing</li>
                <li>Footings Detailing</li>
                <li>Grade Beam Detailing</li>
                <li>Precast Masonry Stone Detailing</li>
                <li>Connection Sketches</li>
                <li>Drawing Index</li>
                <li>Single part Fitting Drawings</li>
                <li>2D Drafting &amp; 3D Structural Modeling</li>
                <li>
                  Shop/Fabrication Drawings (column, beam, brace, stair,
                  handrail, ladders, etc.)
                </li>
                <li>General Arrangement/ Erection Drawings for Connections</li>
              </ul>
            </div>

            <br />
            <br />
            <br />
            {/* images */}

            <div className="flex flex-col sm:flex-row justify-between">
              <div id="r1">
                <p className="z-50 text-white">Reinforcement drawings</p>
              </div>

              <div id="r2">
                <p className="z-50 text-white">Precast detailing</p>
              </div>
            </div>

            <br />
            <br />

            <div id="r3">
              <p className="z-50 text-white">Reinforcement walls detailing</p>
            </div>

            <br />
            <br />
            <br />

            {/* get quote */}

            <h2 className="text-indigo-900 font-semibold text-xl">
              Outsource Your Metals Estimating Services And Detailing Services
              To Our Experienced And Professional Team For Cost-Effective,
              Accurate And Prompt Solutions!
            </h2>
            <br />
            <br />

            <div>
              <ol className="flex sm:flex-row flex-col">
                <li className="m-5">
                  <h1 className="font-semibold text-2xl text-indigo-900 my-6">
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
                  <h1 className="font-semibold text-2xl text-indigo-900 my-6">
                    2. Get a quote:
                  </h1>
                  <p>
                    After reviewing the plans, you will quickly get the quote.
                    As it gets accepted, you can pay the invoice via credit
                    card, debit card, or PayPal, and our team will start working
                    on your project.
                  </p>
                </li>{" "}
                <li className="m-5">
                  <h1 className="font-semibold text-2xl text-indigo-900 my-6">
                    3. Receive estimate:
                  </h1>
                  <p>
                    You will receive an estimate that will contain all the
                    material & labor quantities with pricing. We deliver the
                    estimate and takeoff sheet in EXCEL or in our own template
                    or in the client’s template, as per demand.
                  </p>
                </li>
              </ol>
            </div>

            <br />
            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              FAQ{" "}
            </h1>
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl ">
              How do we ensure the accuracy of the steel estimating services?
            </h1>

            <br />

            <p>
              Our field expert estimators specialized in Division 5 are adept in
              miscellaneous steel estimating and metal stud drywall estimating
              and are deployed to carry out the steel fabrication and structural
              steel erection takeoffs. The attention to detail and use of
              RSMeans helps in accurate and up to date pricing based on zip
              code.
            </p>

<br/>

<h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl ">
How much time do we take to deliver your steel estimate?
</h1>

<br/>
<p>
Our estimators are hands-on with digital takeoff software so we deliver estimates within 24 to 48 hours.

</p>
<br/>
<h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl ">
How much E-value estimating charge for metals takeoffs?
</h1>

<br/>
<p>

We normally charge around $200 for steel and metals estimates and it can be less or more depending on the scope of the project. We strive to provide quality services and justify the charges we quote with our services.

</p>

<br/>

<h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl ">
What is the format of metals estimate deliverables?
</h1>
<br/>

<p>We provide you estimates in EXCEL sheets along with marked-up plans to make it easy for you to understand and edit. All line items are organized by CSI MasterFormat or Uniformat or as per your demand.

</p>
<br/>
<p>E-value estimating has successfully provided integrated construction estimating and cost management services in North American, Caribbean, and Australian regions. In the US, we have a portfolio of working in the following markets:

</p>
<br/>
<p>Newyork, New Jersey, California, North Carolina, Washington, Massachusetts, South Carolina, Tennessee,  Illinois, Georgia, Arizona, Michigan,  Missouri, Kentucky, Indiana, Louisiana, Alabama, Maryland, Colorado, Minnesota, Connecticut,  Pennsylvania, Oklahoma, Oregon,  Texas, Virginia, Florida, Montana, Ohio.

</p>

<br/>
<br/><br/>




<div className="bg-slate-200 p-6 flex sm:flex-row flex-col justify-around align-middle items-center rounded-sm mr-4">
<h1 className="text-indigo-900 text-lg text-center font-bold mb-5 width80">
What Are You Waiting For? If You Are Planning To Hire A Construction Project Estimator, Then E-value estimating Is The Right Option For You To Choose!

</h1>
<button className="bg-yellow-400  hover:bg-yellow-200 text-black p-4 wodth20">
  Contact Us and get 30% off
</button>
</div>
<br/><br/>



            {/* side panel */}
          </div>
          {/* side panel */}

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
    </div>
  );
};

export default Metals;
