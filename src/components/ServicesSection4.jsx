import React from "react";
import Image from "next/image";
import bg3 from "../bg3.jpg";
import bg4 from "../bg4.webp";
import bg5 from "../bg5.webp";
import bg6r2 from "../bg6r2.webp";
import bg7r2 from "../bg7r2.webp";
import bg8r2 from "../bg8r2.webp";

const ServicesSection4 = () => {
  return (
    <div className="flex flex-wrap mx-5 mt-12 flex-col">
      <div className="flex flex-row flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <Image src={bg3} width={400} height={250} alt="Construction Image" />
          <h1 class="text-xl font-bold mt-4 text-blue-950">
            Construction Bid Estimates for General & Subcontractors
          </h1>
          <div className="bg-amber-500 w-14 h-1 mt-4 mb-4"></div>

          <p class="mt-2">
            We provide highly accurate construction bid estimates to contractors
            and subcontractors. Our estimators prepare these by incorporating
            location-specific material and labor pricing. Moreover, we
            accomplish this using our developed location-based cost databases.
            This way, we have already served in different sorts of construction
            projects. These projects range from airport highways to simple HVAC
            projects.
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <Image src={bg4} width={400} height={250} alt="Construction Image" />
          <h1 class="text-xl font-bold mt-4 text-blue-950">
            Design Estimate for Architects & Designers
          </h1>
          <div className="bg-amber-500 w-14 h-1 mt-4 mb-4"></div>

          <p class="mt-2">
            We provide design estimates for architects & designers. Our
            estimates include all stages of design from schematic, and
            conceptual to construction documents. Similarly, our preliminary
            estimating services are one of a kind. They are defensible and
            accurate. Further, they are based on our past experience. This
            experience comes from our residential, commercial, and other
            projects from the past.
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 text-blue-950">
          <Image src={bg5} width={400} height={250} alt="Construction Image" />
          <h1 class="text-xl font-bold mt-4">Construction Estimator</h1>
          <div className="bg-amber-500 w-14 h-1 mt-4 mb-4"></div>

          <p class="mt-2">
            We provide our services to our dedicated clients through the hard
            work of our construction cost estimators. This makes us able to
            provide accurate and instant construction cost estimates. Next, we
            offer all that at an affordable price. We have been working as a
            professional cost estimating consulting company with 15 years of
            experience.
          </p>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <Image
            src={bg6r2}
            width={400}
            height={250}
            alt="Construction Image"
          />
          <h1 class="text-xl font-bold mt-4 text-blue-950">
            Monthly Takeoff Packages for Busy Contractors{" "}
          </h1>
          <div className="bg-amber-500 w-14 h-1 mt-4 mb-4"></div>

          <p class="mt-2">
            We offer monthly packages for you. By subscribing to our monthly
            packages, you can minimize your expenses. You can save up to 60% of
            your in-house estimator’s expenses. While you have accurate and
            efficient construction takeoff services. This way, you will be able
            to bid more and win more. Get all the services under one roof.
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <Image
            src={bg7r2}
            width={400}
            height={250}
            alt="Construction Image"
          />
          <h1 class="text-xl font-bold mt-4 text-blue-950">
            Consultation & Bid Filing{" "}
          </h1>
          <div className="bg-amber-500 w-14 h-1 mt-4 mb-4"></div>

          <p class="mt-2">
            We offer consultation to our clients to develop an understanding of
            construction cost estimating, various takeoffs, and managing
            budgets. This way, offering you our expertise to win bids and earn
            projects. We don’t just narrow down our concern to just proposals
            but also point out factors that can flourish your business profile
            in your respective trade as a contractor. Also, to help you win over
            your competitors and generate more leads.
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 text-blue-950">
          <Image
            src={bg8r2}
            width={400}
            height={250}
            alt="Construction Image"
          />
          <h1 class="text-xl font-bold mt-4">
            Preliminary Estimate and Construction Document Estimate for
            Developers
          </h1>
          <div className="bg-amber-500 w-14 h-1 mt-4 mb-4"></div>

          <p class="mt-2">
            We provide commercial estimates as pre-construction and final
            construction estimates to construction developers. As a result, this
            aids them in getting loans and also with budgeting for clients. In
            the same way, our estimates facilitate cost-benefit analysis.
            Finally, they help them with cost budgets to hire contractors. Our
            portfolio of construction takeoff services includes commercial,
            residential, civil, and industrial estimates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection4;
