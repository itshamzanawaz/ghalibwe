"use client";
import React, { useState } from "react";
import Link from "next/link";

const TMPE = () => {
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
              THERMAL & MOISTURE PROTECTION ESTIMATING SERVICES
            </h1>
            <br />

            <br />
            {/* image para */}

            <div className="flex flex-col sm:flex-row flex-wrap justify-around">
              <div className="width50">
                <p>
                  Our residential and commercial building cost estimator are
                  very much hands-on with{" "}
                  <strong>thermal and moisture protection</strong> trade of
                  work. Waterproofing, roofing, firestopping, caulking, siding,
                  sealants, roof consultants, sheet metal flashing and trim
                  contractors have been served by E-value estimating for number of
                  years with estimates ranging from sealants and vapor barriers
                  to insulation.
                </p>
                <br />
              </div>
              <img
                src="https://worldestimating.com/wp-content/uploads/2019/12/2-11-705x470.jpg"
                alt="metal estimating"
                className="width50"
              />
            </div>
            <br />

            <p>
              These estimates prepared by our estimators can further be used as
              demanded either for procurement, ordering materials from the
              market, estimating the labor and for bid proposal purposes. Our
              <strong>freelance construction estimators</strong> prepare cost
              estimates as per the trade you specialize in.
            </p>

            <br />
            <p>
              <strong> Commercial Flooring estimator</strong> hired at world
              estimating covers each aspect of floor division whether it would
              be interior finishes, exterior finishes, tiles or any marble stone
              work, we are adept in each and every aspect of the flooring.
              Similarly,
              <strong>commercial roofing estimators</strong> have expertise from
              EIFS to applied fireproofing.
            </p>
            <br />
            <br />
            <br />
            <br />

            <div className="flex flex-col sm:flex-row flex-wrap justify-around">
              <img
                src="https://worldestimating.com/wp-content/uploads/2019/12/2-5.jpg"
                alt="metal estimating"
                className="width50"
              />
              <div className="width50">
                <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl ">
                  Thermal Insulation Estimating
                </h1>
                <p>
                  Each division is described and takeoff in detail by our
                  project estimators. Each roofing trade of work from the online
                  roof repair estimate, tin roof, steel roof, garage roof, metal
                  roof, slate roof, shingle roof, and flat roof estimates are
                  accurately and precisely digitized by takeoff software and
                  quantified in an EXCEL sheet.
                </p>
                <br />
              </div>
            </div>
            <br />
            <br />
            <br />

            <p>
              A large majority of homeowners reach out to us for their house
              roof, for which drawings or specifications make up the work for us
              and with our experience and past recent portfolio of projects,
              handle each project with a handful of expertise and deliver the
              projected cost to build a house roof in an hours’ time
            </p>

            <br />
            <p>
              Roofing contractors regard us as the best roofing estimates
              company. The details are forwarded to our relevant department,
              necessary details are kept into consideration and comprehensive,
              easy to comprehend and meaningful roof estimate is delivered to
              the client in 24/7 Support on call. Please visit our profile on
              The Blue Book.
            </p>

            <br />
            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              Waterproofing & Damp Proofing Estimating – Material Takeoff
            </h1>

            <br />
            <p>
              Waterproofing Contractors are our clients that require the minor
              details in the material takeoff that not only they make up the bid
              to the General contractor but also procure or buy material on the
              basis of our takeoff.
            </p>
            <br />
            <p>
              Our estimate also guides the details about how and where the
              necessary material is going to be applied on foundation and
              footings or below grade slab. Air Vapor barriers & Sealants
              contractors are our imminent clients that require our services for
              preparing up the bid and get to know how much material is
              required.
            </p>
            <br />
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              Fire Proofing & Fire Stopping Estimating – Material Takeoff
            </h1>

            <br />

            <p>
              All Fireproofing and firestopping contractors need an estimation
              company or an estimator who will do a detailed description takeoff
              of the plans where rating of fireproofing is mentioned along with
              the structural assemblies like beams, columns, walls and
              structures or framing assemblies. The detailed description that
              include the thickness of insulation, material of insulation and
              structural details of the assembly must be mentioned for which our
              expert estimators will provide all the necessary details that
              would make up the work for contractors in bidding and procuring as
              well.
            </p>
            <br />
            <p>
              Our portfolios of projects include Schools, Public facilities,
              Hospitals, Commercial zones, Retail and Restaurants.
            </p>

            <br />
            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              FAQ:
            </h1>
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
              Who has outsourced their estimation to E-value estimating?
            </h1>

            <br />

            <p>
              Ans. Waterproofing, damp roofing, fire-stopping, caulking, siding,
              sealants, roofing, and sheet metal flashing contractors have
              outsourced their estimation to us for thermal and moisture
              protection trade work. All type sealants, pavers, gutters, spray
              insulation and intumescent fireproofing work is handled by
              professional construction estimators. Siding Panels, shingles, and
              membrane roofing bill of quantities are generated with details and
              description and we do ensure accuracy and quality is maintained.
            </p>
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
              What we do when there are mistakes and drawbacks in the drawing’s
              plans?
            </h1>
            <br />

            <p>
              We not only mark the mistakes with color schemes but also prepare
              accurate takeoffs with the assumptions made against the
              specifications made thereof. Therefore, once you come up with any
              drawbacks and any sort of the draft and provisional drawing and
              want an estimate of it. Then we will manage to meet up with all
              the shortcomings and will take off the required quantities for
              you.
            </p>
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
              Do we provide marked-up plans for thermal and moisture protection?
            </h1>
            <br />
            <p>
              Ans. All takeoffs and estimates are accompanied by a marked up
              plan that helps you judge where we have quantified the items with
              descriptions.
            </p>
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
              What about our experience doing thermal and moisture protection
              takeoffs?
            </h1>

            <br />

            <p>
              our experience in firestopping waterproofing firestopping and air
              proofing is due to hundred of projects on a monthly basis that we
              do and deliver to our clients and their long-term satisfactory
              relationship with us.
            </p>

            <br />
            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              Fireproofing Contractor Case Study:
            </h1>
            <br />
            <p>
              Fireproofing contractors have enormous and gigantic work to be
              done in commercial facilities and industrial units, therefore,
              making structural takeoffs for beams, columns assemblies and
              drywall fire rated insulation, contractors opt for specialized
              estimating services. The estimation expenditure sometimes exceeds
              the financial ability of the subcontractor.
            </p>
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
              Problem:
            </h1>
            <br />
            <p>
              Fireproofing contractors have enormous and gigantic work to be
              done in commercial facilities and industrial units therefore
              making structural takeoffs for beams, columns assemblies and
              drywall fire rated insulation, contractors opt for specialized
              estimating services. The estimation expenditure sometimes exceeds
              the financial ability of the subcontractor.
            </p>
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
              Solution:
            </h1>

            <br />
            <p>
              E-value estimating services came up with a plan that would deal with
              the expenses and bid deadlines of the subcontractor and would bear
              the expense that would be 50% less. in case that that fireproofing
              subcontractor hires a professional construction estimator.
            </p>

            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
              Outcomes:
            </h1>

            <br />

            <p>
              As always, the shining bright results ensured by the World
              Estimating of accuracy, less expense and quality. The
              subcontractor not only saved his expense and time but also get
              provided with quality takeoffs and specialized estimates.
            </p>

            <br />
            <br />
            <br />

            {/*  lists */}

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-2xl ">
              Thermal & Moisture Protection Takeoffs
            </h1>

            <br />
            <br />
            <br />

            <div className="flex flex-col sm:flex-row justify-between flex-wrap">
              <ul className="space-y-4 list-disc w-20 pl-4">
                <li>fire retardant cable sprays takeoffs</li>
                <li>damproofing takeoffs</li>
                <li>waterproofing takeoffs</li>
                <li>chemical grouting takeoffs</li>
                <li>traffic coatings takeoffs</li>
                <li>fiber insulation takeoffs</li>
                <li>plastic insulation takeoffs</li>
                <li>cellulose insulation takeoffs</li>
                <li>reflective insulation takeoffs</li>
                <li>cladding takeoffs</li>
                <li>roof and deck installation takeoffs</li>
              </ul>

              <ul className="space-y-4 list-disc w-20 pl-4">
                <li>EIFS( Exterior Insulation and Finish Systems) takeoffs</li>
                <li>Weather Barriers takeoffs</li>
                <li>Vapor Resistive Barriers takeoffs</li>
                <li>Vapor Permeable Barriers takeoffs</li>
                <li>Steep Slope Roofing takeoffs</li>
                <li>Shingles (Asphalt, Metal, Slate) takeoffs</li>
                <li>Siding Panels takeoffs</li>
                <li>Metal Siding takeoffs</li>
                <li>Vinyl Siding takeoffs</li>
              </ul>

              <ul className="space-y-4 list-disc w-20 pl-4">
                <li>membrane roofing takeoffs</li>
                <li>bituminuous roofing takeoffs</li>
                <li>flashings takeoffs</li>
                <li>coping takeoffs</li>
                <li>fascias takeoffs</li>
                <li>gutters and downspouts takeoffs</li>
                <li>roof expansion joints takeoffs</li>
                <li>roof curbs takeoffs</li>
                <li>ridge vents takeoffs</li>
                <li>pipe flashing system takeoffs</li>
                <li>Wood Siding and Shingles takeoffs</li>
              </ul>

              <ul className="space-y-4 list-disc w-20 pl-4">
                <li>roof walkway takeoffs</li>
                <li>spray fireproofing takeoffs</li>
                <li>intumescent fireproofing takeoffs</li>
                <li>fire stopping takeoffs</li>
                <li>smoke barriers takeoffs</li>
                <li>joint sealants takeoffs</li>
                <li>joint seals takeoffs</li>
                <li>snow guards takeoffs</li>
                <li>roof pavers takeoffs</li>
                <li>Penetration firestopping takeoffs</li>
                <li>Fiber-reinforced cement siding takeoffs</li>
              </ul>
            </div>
            <br />
            <br />
            <br />

            <h1 className="text-red-500 text-3xl font-semibold">
              Providing Thermal & Moisture Protection Estimating Services
              Throughout United States, United Kingdom, Australia, Canada And
              Other Countries
            </h1>

            <br />
            <br />
            <div className="flex flex-col sm:flex-row space-x-40 flex-wrap">
              <h1 className="text-indigo-900 font-semibold">Colorado</h1>

              <h1 className="text-indigo-900 font-semibold">Colorado</h1>

              <h1 className="text-indigo-900 font-semibold">Colorado</h1>

              <h1 className="text-indigo-900 font-semibold">Colorado</h1>
            </div>
            <br />
            <div className="flex flex-col sm:flex-row justify-around flex-wrap">
              <div>
                <ul className="space-y-4 list-disc pl-4 m-2 w-20">
                <li>Denver</li>
                <li>Colorado Springs</li>
                <li>Aurora</li>
                <li>Fort Collins</li>
                <li>Lakewood</li>
                <li>Thornton</li>
                <li>Arvada</li>
                <li>Westminster</li>
                <li>Pueblo</li>
                <li>Centennial</li>
                <li>Boulder</li>
                <li>Greeley</li>
                <li>Highlands Ranch</li>
                <li>Longmont</li>
                <li>Loveland</li>
                <li>Broomfield</li>
                <li>Castle Rock</li>
                <li>Grand Junction</li>
                <li>Commerce City</li>
                <li>Parker</li>
                <li>Littleton</li>
                <li>Brighton</li>
                <li>Northglenn</li>
                <li>Security-Widefield</li>
                <li>Englewood</li>
                <li>Dakota Ridge</li>
                <li>Ken Caryl</li>
                <li>Wheat Ridge</li>
                <li>Pueblo West</li>
                <li>Fountain</li>
                <li>Windsor</li>
                <li>Lafayette</li>
                <li>Erie</li>
                <li>Columbine</li>
                <li>Golden</li>
                <li>Evans</li>
                <li>Louisville</li>
                <li>Clifton</li>
                <li>Montrose</li>
                <li>Durango</li>
                <li>Sherrelwood</li>
                <li>Cimarron Hills</li>
                <li>Ca&ntilde;on City</li>
                <li>Welby</li>
                <li>Greenwood Village</li>
                <li>Fort Carson</li>
                <li>Firestone</li>
                <li>Johnstown</li>
                <li>Lone Tree</li>
                <li>Black Forest</li>
                <li>Sterling</li>
                <li>Frederick</li>
                <li>Fruita</li>
                <li>Steamboat Springs</li>
                <li>Superior</li>
                <li>Federal Heights</li>
                <li>Cherry Creek</li>
                <li>Berkley</li>
                <li>The Pinery</li>
                <li>Fort Morgan</li>
                <li>Castle Pines</li>
                <li>Alamosa</li>
                <li>Wellington</li>
                <li>Glenwood Springs</li>
                <li>Rifle</li>
                <li>Roxborough Park</li>
                <li>Stonegate</li>
                <li>Redlands</li>
                <li>Derby</li>
                <li>Gunbarrel</li>
                <li>Woodmoor</li>
                <li>Edwards</li>
                <li>Craig</li>
                <li>Delta</li>
                <li>Cortez</li>
                <li>Evergreen</li>
                <li>Fairmount</li>
                <li>Fort Lupton</li>
                <li>Trinidad</li>
                <li>Applewood</li>
                <li>Monument</li>
                <li>Berthoud</li>
                <li>Fruitvale&nbsp;and&nbsp;Woodland Park</li>
                <li>Milliken</li>
                <li>Lamar</li>
                <li>Aspen</li>
                <li>Gypsum</li>
                <li>La Junta</li>
                <li>Eagle</li>
                <li>Lochbuie</li>
                <li>Carbondale</li>
                <li>Twin Lakes</li>
                <li>Gleneagle</li>
                <li>Cherry Hills Village</li>
                <li>Gunnison</li>
                <li>Avon</li>
                <li>Orchard Mesa</li>
                <li>Estes Park</li>
                <li>Sheridan</li>
                <li>Air Force Academy</li>
                
                </ul>
              </div>

              <div>
                <ul className="space-y-4 list-disc pl-4 m-2 w-20">
                <li>Minturn</li>
                <li>Parachute</li>
                <li>Gilcrest</li>
                <li>Georgetown</li>
                <li>Pine Brook Hill</li>
                <li>Upper Bear Creek</li>
                <li>Winter Park</li>
                <li>Ordway</li>
                <li>Towaoc</li>
                <li>Ridgway</li>
                <li>Ouray</li>
                <li>Wiggins</li>
                <li>Manassa</li>
                <li>Dillon</li>
                <li>Oak Creek</li>
                <li>Dolores</li>
                <li>Bow Mar</li>
                <li>Poncha Springs</li>
                <li>Hotchkiss</li>
                <li>Blue River</li>
                <li>Lazy Acres</li>
                <li>Haxtun</li>
                <li>Dotsero</li>
                <li>Ignacio</li>
                <li>Howard</li>
                <li>Sanford</li>
                <li>Log Lane Village</li>
                <li>Kittredge and Cheyenne Wells</li>
                <li>Mount Crested Butte</li>
                <li>Beulah Valley</li>
                <li>Calhan</li>
                <li>Blende</li>
                <li>Paragon Estates</li>
                <li>La Veta</li>
                <li>Ellicott</li>
                <li>La Jara</li>
                <li>Avondale</li>
                <li>Foxfield</li>
                <li>Cattle Creek</li>
                <li>Holly</li>
                <li>Central City</li>
                <li>Fairplay</li>
                <li>Kiowa</li>
                <li>Aspen Park</li>
                <li>Antonito</li>
                <li>Eldorado Springs</li>
                <li>Hugo</li>
                <li>Deer Trail</li>
                <li>Nucla</li>
                <li>Hot Sulphur Springs</li>
                <li>Green Mountain Falls</li>
                <li>Williamsburg</li>
                <li>Collbran</li>
                <li>Silverton</li>
                <li>Salt Creek</li>
                <li>Silver Cliff</li>
                <li>Stratton</li>
                <li>San Luis</li>
                <li>Watkins</li>
                <li>Simla</li>
                <li>Dove Creek</li>
                <li>Westcliffe</li>
                <li>Walden</li>
                <li>Swink</li>
                <li>Eads</li>
                <li>Norwood</li>
                <li>North Washington</li>
                <li>Grand View Estates</li>
                <li>Flagler</li>
                <li>Naturita</li>
                <li>Mountain View</li>
                <li>Chacra</li>
                <li>Walsh</li>
                <li>Rockvale</li>
                <li>Loghill Village</li>
                <li>Grand Lake and Saguache</li>
                <li>Allenspark and De Beque</li>
                <li>Granada</li>
                <li>Otis</li>
                <li>Aguilar and Johnson Village</li>
                <li>Downieville-Lawson-Dumont</li>
                <li>Copper Mountain</li>
                <li>Yampa</li>
                <li>Nunn</li>
                <li>Fort Garland</li>
                <li>Coaldale</li>
                <li>Heeney</li>
                <li>Morrison and Crawford</li>
                <li>Manzanola</li>
                <li>Victor</li>
                <li>Romeo</li>
                <li>Fleming</li>
                <li>Idledale</li>
                <li>Blanca</li>
                <li>Wiley</li>
                <li>Mulford</li>
                <li>Lake City</li>
                <li>Tabernash</li>
                <li>Altona</li>
                <li>St. Mary&rsquo;s</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-4 list-disc pl-4 m-2 w-20">
                <li>Salida</li>
                <li>Dacono</li>
                <li>Stratmoor</li>
                <li>Shaw Heights</li>
                <li>Eaton</li>
                <li>Vail</li>
                <li>Dove Valley</li>
                <li>Brush</li>
                <li>Manitou Springs</li>
                <li>Edgewater</li>
                <li>Glendale</li>
                <li>Battlement Mesa</li>
                <li>Severance</li>
                <li>New Castle</li>
                <li>Breckenridge</li>
                <li>Silverthorne</li>
                <li>Mead</li>
                <li>Niwot</li>
                <li>Castle Pines Village</li>
                <li>West Pleasant View</li>
                <li>Basalt</li>
                <li>Monte Vista</li>
                <li>El Jebel</li>
                <li>Todd Creek</li>
                <li>Timnath</li>
                <li>Florence</li>
                <li>Rocky Ford</li>
                <li>Genesee</li>
                <li>Yuma</li>
                <li>Ponderosa Park</li>
                <li>Meridian</li>
                <li>Silt</li>
                <li>Burlington</li>
                <li>Penrose</li>
                <li>Orchard City</li>
                <li>Frisco</li>
                <li>Walsenburg</li>
                <li>Lincoln Park</li>
                <li>Strasburg</li>
                <li>Acres Green</li>
                <li>Buena Vista</li>
                <li>Holly Hills</li>
                <li>Snowmass Village</li>
                <li>Palmer Lake</li>
                <li>Platteville</li>
                <li>Leadville</li>
                <li>Palisade</li>
                <li>Bayfield</li>
                <li>Bennett</li>
                <li>Telluride</li>
                <li>Laporte</li>
                <li>La Salle</li>
                <li>Wray</li>
                <li>Colorado City</li>
                <li>Center</li>
                <li>Rangely</li>
                <li>Cedaredge</li>
                <li>Meeker</li>
                <li>Holyoke</li>
                <li>Las Animas</li>
                <li>Lyons</li>
                <li>Granby</li>
                <li>Pagosa Springs</li>
                <li>Hayden</li>
                <li>Coal Creek</li>
                <li>Limon</li>
                <li>Perry Park</li>
                <li>Ault</li>
                <li>Hudson</li>
                <li>Olathe</li>
                <li>Inverness</li>
                <li>Idaho Springs</li>
                <li>Leadville North</li>
                <li>Akron</li>
                <li>Crested Butte</li>
                <li>Kersey</li>
                <li>Alamosa East</li>
                <li>Del Norte</li>
                <li>Nederland</li>
                <li>Kremmling</li>
                <li>Columbine Valley</li>
                <li>Paonia</li>
                <li>Mountain Village</li>
                <li>Mancos</li>
                <li>Elizabeth</li>
                <li>Indian Hills</li>
                <li>Springfield</li>
                <li>Aetna Estates</li>
                <li>Cascade-Chipita Park</li>
                <li>Fraser</li>
                <li>Cripple Creek</li>
                <li>Keenesburg</li>
                <li>Byers</li>
                <li>Keystone</li>
                <li>Loma</li>
                <li>Julesburg</li>
                <li>Aristocrat Ranchettes</li>
                <li>Fowler</li>
                <li>Floyd Hill</li>
                <li>Pierce</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-4 list-disc pl-4 m-2 w-20">
                <li>Boone</li>
                <li>Sugarloaf</li>
                <li>South Fork</li>
                <li>Coal Creek town</li>
                <li>Crisman</li>
                <li>Morgan Heights</li>
                <li>North La Junta</li>
                <li>Olney Springs, Red Feather Lakes, and Dinosaur</li>
                <li>St. Ann Highlands and City of Creede</li>
                <li>Alma</li>
                <li>Ovid</li>
                <li>Empire</li>
                <li>Arboles</li>
                <li>Merino, Louviers, and Red Cliff</li>
                <li>East Pleasant View</li>
                <li>Comanche Creek</li>
                <li>Catherine</li>
                <li>Jamestown and El Moro</li>
                <li>Garden City</li>
                <li>Iliff</li>
                <li>Brookside</li>
                <li>Eckley and Redvale</li>
                <li>Peyton and Hillrose</li>
                <li>Cheraw</li>
                <li>Sugar City</li>
                <li>Alpine</li>
                <li>Kit Carson</li>
                <li>Bethune</li>
                <li>Peoria</li>
                <li>Peetz</li>
                <li>Franktown and Jackson Lake</li>
                <li>Rico</li>
                <li>Phippsburg and Vineland</li>
                <li>Amherst</li>
                <li>Woody Creek</li>
                <li>Seibert</li>
                <li>Sunshine</li>
                <li>Larkspur</li>
                <li>Arriba</li>
                <li>Midland</li>
                <li>Bonanza Mountain Estates</li>
                <li>Atwood</li>
                <li>Bark Ranch</li>
                <li>Ophir</li>
                <li>Silver Plume</li>
                <li>Tall Timber</li>
                <li>Crowley</li>
                <li>Ward and Southern Ute</li>
                <li>Rye</li>
                <li>Sedalia</li>
                <li>Elbert</li>
                <li>Gold Hill and Grover</li>
                <li>Rollinsville</li>
                <li>Hasty</li>
                <li>Twin Lakes CDP</li>
                <li>Crestone</li>
                <li>Genoa</li>
                <li>Marble</li>
                <li>Lewis and Sedgwick</li>
                <li>Glendale CDP and Pritchett</li>
                <li>Brick Center</li>
                <li>Weldona</li>
                <li>Ramah and Westcreek</li>
                <li>Segundo and Black Hawk</li>
                <li>Maysville and Cokedale</li>
                <li>Moffat</li>
                <li>Mountain Meadows</li>
                <li>Snyder</li>
                <li>Capulin</li>
                <li>Raymer (New Raymer)</li>
                <li>Orchard</li>
                <li>Crook</li>
                <li>Vilas</li>
                <li>Jansen and Gerrard</li>
                <li>Vona</li>
                <li>Campo</li>
                <li>Hooper</li>
                <li>No Name and Smeltertown</li>
                <li>Saddle Ridge</li>
                <li>Portland</li>
                <li>Rock Creek Park</li>
                <li>Trail Side</li>
                <li>Padroni</li>
                <li>Hoehne</li>
                <li>Sheridan Lake</li>
                <li>Seven Hills and Florissant</li>
                <li>Hartman</li>
                <li>Kirk</li>
                <li>Pitkin</li>
                <li>Branson and Kim</li>
                <li>Montezuma</li>
                <li>Haswell</li>
                <li>Weston</li>
                <li>Lynn</li>
                <li>La Junta Gardens</li>
                <li>Joes, Divide, and San Acacio</li>
                <li>Starkville</li>
                <li>Laird</li>
                <li>Conejos</li>
                <li>Eldora</li>
                </ul>
              </div>
            </div>

            <br />
            <br />
            <br />

            <div className="bg-slate-200 p-6 flex sm:flex-row flex-col justify-around align-middle items-center rounded-sm mr-4">
              <h1 className="text-indigo-900 text-lg text-center font-bold mb-5 width80">
                What Are You Waiting For? If You Are Planning To Hire A
                Construction Project Estimator, Then E-value estimating Is The
                Right Option For You To Choose!
              </h1>
              <button className="bg-yellow-400  hover:bg-yellow-200 text-black p-4 wodth20">
                Contact Us and get 30% off
              </button>
            </div>
            <br />
            <br />
            <br />

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

export default TMPE;
