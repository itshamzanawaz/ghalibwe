import React from "react";
import Image from "next/image";
import ServicesSection1 from "./ServicesSection1";
import ServicesSection2 from "./ServicesSection2";
import ServicesSection3 from "./ServicesSection3";
import ServicesSection4 from "./ServicesSection4";
import ServicesSection5 from "./ServicesSection5";
import ServicesSection6 from "./ServicesSection6";
import ServicesSection7 from "./ServicesSection7";
import ServicesSection8 from "./ServicesSection8";
import ServicesSection9 from "./ServicesSection9";
import ServicesSection10 from "./ServicesSection10";
import ServicesSection11 from "./ServicesSection11";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const MainLandingPage = () => {
  return (
    <div className="main absolute">
      <section id="main">
        <h1 className="bid-h1">BID MORE WIN MORE!</h1>
        <h5 className="materials-h5">
          Material Takeoff & Construction Estimating Services
        </h5>
        <button className="save-btn">
          save 60% of your Estimating EXpense
        </button>
      </section>

      <ServicesSection1 />
      <ServicesSection2 />
      <ServicesSection3 />
      <ServicesSection4 />
      <ServicesSection5 />
      <ServicesSection6 />
      <ServicesSection7 />
      <ServicesSection8 />
      <ServicesSection9 />
      <ServicesSection10 />
      <ServicesSection11 />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default MainLandingPage;
