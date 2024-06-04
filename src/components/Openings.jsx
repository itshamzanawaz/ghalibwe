"use client";
import React, { useState } from "react";
import Link from "next/link";

const Openings = () => {
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
              OPENINGS ESTIMATING SERVICES
            </h1>
            <br />

            <br />
            {/* image para */}

            <div className="flex flex-col sm:flex-row flex-wrap justify-around">
              <div className="width50">
                <p>
                  Openings estimating services are required for all opening
                  frames, door and windows. Espert cost estimators provide
                  installation and material cost after calculation and briefly
                  described to the door and frame contractors, intended for
                  marking their labor markups in a bid. Aluminum, Bronze, Vinyl,
                  Fiberglass and metal door contractors.
                </p>
                <br />
                <p>
                  Labor costs for special material and function door and windows
                  are calculated by taking off the material and respective labor
                  to install the openings in commercial and residential
                  facilities.
                </p>
              </div>
              <img
                src="https://worldestimating.com/wp-content/uploads/2019/12/2-17-705x470.jpg"
                alt="metal estimating"
                className="width50 "
              />
            </div>
            <br />

            <p>
              Definitely, being an umbrella Estimation giant of certified
              professionals and estimator, we takeoff we also deal with
              industrial facilities labor and materials. Please visit our
              profile on The Blue Book.
            </p>

            <br />
            <p>
              Thermal and glazed openings are for function-specific purposes and
              their estimation is done through our certified and professional
              estimators.
            </p>
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
              How does world estimating quantify a certain trade and make it
              meaningful to the contractor?
            </h1>

            <br />
            <p>
              Ans. Our professional{" "}
              <strong>commercial construction cost estimator</strong>
              quantifies the quantities from the plans and mark up the drawings
              with color code schemes just to show from where we have taken the
              quantities for Openings Estimating.
            </p>
            <br />
            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
              How to save money with World Estimating?
            </h1>

            <br />

            <p>
              Ans. You can take our monthly takeoff and openings estimating
              packages or hire a{" "}
              <strong>dedicated construction estimator</strong> within
              $1000-1500$ for as many plans as you could bid.
            </p>
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-xl ">
              How can we grow our business and win more work?
            </h1>

            <br />

            <p>
              Just concentrate on your installation and fabrication work and
              hand over the rest to World Estimating, where you will be helped
              with estimates, consultancy and will save your time. Thus, filing
              more bids and earning more is only possible when you have more
              time to file rather than to estimate. Many contractors have
              increased their income bracket after rendering World Estimating
              services.
            </p>

            <br />
            <br />
            <br />
            <br />
            {/*  lists */}

            <div className="flex flex-col sm:flex-row justify-between flex-wrap">
              <ul className="space-y-4 list-disc w-20 pl-4">
                <li>Metal door frame takeoffs</li>
                <li>Steel door takeoffs</li>
                <li>Aluminium door takeoffs</li>
                <li>Bronze door takeoffs</li>
                <li>Bronze door takeoffs</li>
                <li>Wood door takeoffs</li>
                <li>Plastic door takeoffs</li>
                <li>Residential door takeoffs</li>
                <li>Vinyl door takeoffs</li>
                <li>Fiberglass PVC door takeoffs</li>
                <li>Access door takeoffs</li>
                <li>Panels takeoffs</li>
                <li>Sliding door takeoffs</li>
                <li>Swing door takeoffs</li>
                <li>Louvers and vents takeoffs</li>
              </ul>

              <ul className="space-y-4 list-disc w-20 pl-4">
                <li>Hangar door takeoffs</li>
                <li>Coiling door takeoffs</li>
                <li>Grilles takeoffs</li>
                <li>Thermal shielding door takeoffs</li>
                <li>Smoke containment takeoffs</li>
                <li>Folding door takeoffs</li>
                <li>Commercial overhead door takeoffs</li>
                <li>Pressure resistant door takeoffs</li>
                <li>Storefronts takeoffs</li>
                <li>Entrances takeoffs</li>
                <li>Curtain wall takeoffs</li>
                <li>Glazed assembly takeoffs</li>
                <li>Roof windows takeoffs</li>
                <li>Skylights takeoffs</li>
              </ul>

              <ul className="space-y-4 list-disc w-20 pl-4">
                <li>Metal door frame estimating services</li>
                <li>steel door openings estimating</li>
                <li>aluminium door estimating services</li>
                <li>bronze door estimating services</li>
                <li>bronze door estimating services</li>
                <li>wood door estimating services</li>
                <li>plastic door estimating services</li>
                <li>residential door estimating services</li>
                <li>vinyl door estimating services</li>
                <li>fiberglass PVC door estimating services</li>
                <li>access door estimating services</li>
                <li>panels estimating services</li>
                <li>sliding door estimating services</li>
                <li>swing door estimating services</li>
                <li>hangar door estimating services</li>
                <li>coiling door estimating services</li>
              </ul>

              <ul className="space-y-4 list-disc w-20 pl-4">
                <li>grilles estimating services</li>
                <li>thermal shielding door estimating services</li>
                <li>smoke containment estimating services</li>
                <li>folding door estimating services</li>
                <li>commercial overhead door estimating services</li>
                <li>pressure resistant door estimating services</li>
                <li>storefronts estimating services</li>
                <li>entrances estimating services</li>
                <li>curtain wall estimating services</li>
                <li>glazed assembly estimating services</li>
                <li>roof windows estimating services</li>
                <li>skylights estimating services</li>
              </ul>
            </div>
            <br />
            <br />
            <br />

            <h1 className="text-indigo-900 width-estimate-h1 font-semibold text-3xl ">
              Our Locations
            </h1>

            <br />
            <br />
            <div className="flex flex-col sm:flex-row space-x-40 flex-wrap">
              <h1 className="text-indigo-900 font-semibold">Georgia</h1>

              <h1 className="text-indigo-900 font-semibold">Georgia</h1>

              <h1 className="text-indigo-900 font-semibold">Hawai</h1>

              <h1 className="text-indigo-900 font-semibold">Hawai</h1>
            </div>
            <br />
            <div className="flex flex-col sm:flex-row justify-around flex-wrap">
              <div>
                <ul className="space-y-4 list-disc pl-4 m-2">
                  <li>Marshallville</li>
                  <li>Martin</li>
                  <li>Maxeys</li>
                  <li>Maysville</li>
                  <li>Meansville</li>
                  <li>Meigs</li>
                  <li>Menlo</li>
                  <li>Metter</li>
                  <li>Midville</li>
                  <li>Midway</li>
                  <li>Milan</li>
                  <li>Milledgeville</li>
                  <li>Millen</li>
                  <li>Milner</li>
                  <li>Milton</li>
                  <li>Mitchell</li>
                  <li>Molena</li>
                  <li>Monroe</li>
                  <li>Montezuma</li>
                  <li>Monticello</li>
                  <li>Montrose</li>
                  <li>Moreland</li>
                  <li>Morgan</li>
                  <li>Morganton</li>
                  <li>Morrow</li>
                  <li>Morven</li>
                  <li>Moultrie</li>
                  <li>Mountain City</li>
                  <li>Mountain Park</li>
                  <li>Mount Airy</li>
                  <li>Mount Vernon</li>
                  <li>Mount Zion</li>
                  <li>Nahunta</li>
                  <li>Nashville</li>
                  <li>Nelson</li>
                  <li>Newborn</li>
                  <li>Newington</li>
                  <li>Newnan</li>
                  <li>Newton</li>
                  <li>Nicholls</li>
                  <li>Nicholson</li>
                  <li>Norcross</li>
                  <li>Norman Park</li>
                  <li>North High Shoals</li>
                  <li>Norwood</li>
                  <li>Nunez</li>
                  <li>Oak Park</li>
                  <li>Oakwood</li>
                  <li>Ochlocknee</li>
                  <li>Ocilla</li>
                  <li>Oconee</li>
                  <li>Odum</li>
                  <li>Offerman</li>
                  <li>Oglethorpe</li>
                  <li>Oliver</li>
                  <li>Omega</li>
                  <li>Orchard Hill</li>
                  <li>Oxford</li>
                  <li>Palmetto</li>
                  <li>Parrott</li>
                  <li>Patterson</li>
                  <li>Pavo</li>
                  <li>Peachtree City</li>
                  <li>Peachtree Corners[k]</li>
                  <li>Pearson</li>
                  <li>Pelham</li>
                  <li>Pembroke</li>
                  <li>Pendergrass</li>
                  <li>Perry</li>
                  <li>Pinehurst</li>
                  <li>Pine Lake</li>
                  <li>Pine Mountain</li>
                  <li>Pineview</li>
                  <li>Pitts</li>
                  <li>Plains</li>
                  <li>Plainville</li>
                  <li>Pooler</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-4 list-disc pl-4 m-2">
                  <li>Portal</li>
                  <li>Porterdale</li>
                  <li>Port Wentworth</li>
                  <li>Poulan</li>
                  <li>Powder Springs</li>
                  <li>Pulaski</li>
                  <li>Quitman</li>
                  <li>Ranger</li>
                  <li>Ray City</li>
                  <li>Rayle</li>
                  <li>Rebecca</li>
                  <li>Register</li>
                  <li>Reidsville</li>
                  <li>Remerton</li>
                  <li>Rentz</li>
                  <li>Resaca</li>
                  <li>Rest Haven</li>
                  <li>Reynolds</li>
                  <li>Rhine</li>
                  <li>Riceboro</li>
                  <li>Richland</li>
                  <li>Richmond Hill</li>
                  <li>Riddleville</li>
                  <li>Rincon</li>
                  <li>Ringgold</li>
                  <li>Riverdale</li>
                  <li>Riverside</li>
                  <li>Roberta</li>
                  <li>Rochelle</li>
                  <li>Rockmart</li>
                  <li>Rocky Ford</li>
                  <li>Rome</li>
                  <li>Roopville</li>
                  <li>Roswell</li>
                  <li>Royston</li>
                  <li>Rutledge</li>
                  <li>St. Marys</li>
                  <li>Sale City</li>
                  <li>Sandersville</li>
                  <li>Sandy Springs</li>
                  <li>Santa Claus</li>
                  <li>Sardis</li>
                  <li>Sasser</li>
                  <li>Savannah</li>
                  <li>Scotland</li>
                  <li>Screven</li>
                  <li>Senoia</li>
                  <li>Shady Dale</li>
                  <li>Sharon</li>
                  <li>Sharpsburg</li>
                  <li>Shellman</li>
                  <li>Shiloh</li>
                  <li>Siloam</li>
                  <li>Sky Valley</li>
                  <li>Smithville</li>
                  <li>Smyrna</li>
                  <li>Snellville</li>
                  <li>Social Circle</li>
                  <li>Soperton</li>
                  <li>South Fulton</li>
                  <li>Sparks</li>
                  <li>Sparta</li>
                  <li>Springfield</li>
                  <li>Stapleton</li>
                  <li>Statesboro</li>
                  <li>Statham</li>
                  <li>Stillmore</li>
                  <li>Stockbridge</li>
                  <li>Stone Mountain</li>
                  <li>Stonecrest</li>
                  <li>Sugar Hill</li>
                  <li>Summertown</li>
                  <li>Summerville</li>
                  <li>Sumner</li>
                  <li>Sunny Side</li>
                  <li>Surrency</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-4 list-disc pl-4 m-2">
                  <li>Honolulu &dagger;&dagger;</li>
                  <li>East Honolulu</li>
                  <li>Pearl City</li>
                  <li>Hilo &dagger;</li>
                  <li>Kailua</li>
                  <li>Waipahu</li>
                  <li>Kaneohe</li>
                  <li>Mililani Town</li>
                  <li>Kahului</li>
                  <li>Ewa Gentry</li>
                  <li>Mililani Mauka</li>
                  <li>Kihei</li>
                  <li>Makakilo</li>
                  <li>Wahiawa</li>
                  <li>Schofield Barracks</li>
                  <li>Wailuku &dagger;</li>
                  <li>Kapolei</li>
                  <li>Ewa Beach</li>
                  <li>Royal Kunia</li>
                  <li>Halawa</li>
                  <li>Waimalu</li>
                  <li>Waianae</li>
                  <li>Nanakuli</li>
                  <li>Kailua</li>
                  <li>Lahaina</li>
                  <li>Waipio</li>
                  <li>Hawaiian Paradise Park</li>
                  <li>Kapaa</li>
                  <li>Kalaoa</li>
                  <li>Kaneohe Station</li>
                  <li>Maili</li>
                  <li>Aiea</li>
                  <li>Waimea</li>
                  <li>Waihee-Waiehu</li>
                  <li>Ahuimanu</li>
                  <li>Holualoa</li>
                  <li>Ocean Pointe</li>
                  <li>Makaha</li>
                  <li>Haiku-Pauwela</li>
                  <li>Pukalani</li>
                  <li>Waikele</li>
                  <li>Napili-Honokowai</li>
                  <li>Makawao</li>
                  <li>Hickam Housing</li>
                  <li>Lihue &dagger;</li>
                  <li>Kula</li>
                  <li>Waikoloa Village</li>
                  <li>Laie</li>
                  <li>Ewa Villages</li>
                  <li>Wailea</li>
                  <li>West Loch Estate</li>
                  <li>Waimanalo</li>
                  <li>Waipio Acres</li>
                  <li>Wailua Homesteads</li>
                  <li>Heeia</li>
                  <li>Kahaluu</li>
                  <li>Kalaheo</li>
                  <li>Pupukea</li>
                  <li>Whitmore Village</li>
                  <li>Waimanalo Beach</li>
                  <li>Hawaiian Ocean View</li>
                  <li>Hawaiian Beaches</li>
                  <li>Hauula</li>
                  <li>Haleiwa</li>
                  <li>Mountain View</li>
                  <li>Waialua</li>
                  <li>Hanamaulu</li>
                  <li>Kahaluu-Keauhou</li>
                  <li>Kekaha</li>
                  <li>Captain Cook</li>
                  <li>Kaunakakai</li>
                  <li>Iroquois Point</li>
                  <li>Lanai City</li>
                  <li>Ainaloa</li>
                  <li>Waikapu</li>
                  <li>Puhi</li>
                  <li>Orchidlands Estates</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-4 list-disc pl-4 m-2">
                  <li>Kilauea</li>
                  <li>Hawaiian Acres</li>
                  <li>Paia</li>
                  <li>Hanapepe</li>
                  <li>Kahuku</li>
                  <li>Volcano</li>
                  <li>Honaunau-Napoopoo</li>
                  <li>Honalo</li>
                  <li>Eleele</li>
                  <li>Lawai</li>
                  <li>Honokaa</li>
                  <li>Wailua</li>
                  <li>Keaau</li>
                  <li>Anahola</li>
                  <li>Princeville</li>
                  <li>Koloa</li>
                  <li>Maunawili</li>
                  <li>Kualapuu</li>
                  <li>Kealakekua</li>
                  <li>Waimea</li>
                  <li>Mokuleia</li>
                  <li>Ko Olina</li>
                  <li>Pepeekeo</li>
                  <li>Kapaau</li>
                  <li>Wheeler AFB</li>
                  <li>Keokea</li>
                  <li>Leilani Estates</li>
                  <li>Fern Acres</li>
                  <li>Nanawale Estates</li>
                  <li>Kaaawa</li>
                  <li>Pahala</li>
                  <li>Makaha Valley</li>
                  <li>Papaikou</li>
                  <li>Omao</li>
                  <li>Kurtistown</li>
                  <li>Hana</li>
                  <li>Wainaku</li>
                  <li>Punaluu</li>
                  <li>Olinda</li>
                  <li>Hawi</li>
                  <li>Kaanapali</li>
                  <li>Poipu</li>
                  <li>Haliimaile</li>
                  <li>Discovery Harbour</li>
                  <li>Pahoa</li>
                  <li>Eden Roc</li>
                  <li>Fern Forest</li>
                  <li>Mahinahina</li>
                  <li>Naalehu</li>
                  <li>Waikane</li>
                  <li>Puako</li>
                  <li>Kaumakani</li>
                  <li>Paauilo</li>
                  <li>Launiupoko</li>
                  <li>Laupahoehoe</li>
                  <li>Honomu</li>
                  <li>Halaula</li>
                  <li>Hanalei</li>
                  <li>Haena</li>
                  <li>Kalihiwai</li>
                  <li>Paukaa</li>
                  <li>Ualapu&rsquo;e</li>
                  <li>Maunaloa</li>
                  <li>Kapalua</li>
                  <li>Maalaea</li>
                  <li>Kukuihaele</li>
                  <li>Kawela Bay</li>
                  <li>Wainiha</li>
                  <li>Pakala Village</li>
                  <li>Waiohinu</li>
                  <li>Makena</li>
                  <li>Olowalu</li>
                  <li>Kalaeloa</li>
                  <li>Manele</li>
                </ul>
              </div>
            </div>

            <br/><br/><br/>

            <div className="bg-slate-200 p-6 flex sm:flex-row flex-col justify-around align-middle items-center rounded-sm mr-4">
            <h1 className="text-indigo-900 text-lg text-center font-bold mb-5 width80">
            What Are You Waiting For? If You Are Planning To Hire A Construction Project Estimator, Then World Estimating Is The Right Option For You To Choose!
            
            </h1>
            <button className="bg-yellow-400  hover:bg-yellow-200 text-black p-4 wodth20">
              Contact Us and get 30% off
            </button>
            </div>
            <br/><br/><br/>



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
    </div>
  );
};

export default Openings;
