import React from "react";
import Logo from "../Blue-Book.jpg.webp";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import styles from "./Footer.module.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <>
      <div className={`flex sm:flex-row flex-col bg-slate-600 w-full h-auto p-10 text-white ${styles.footerContainer}`}>
        <div className={styles.widthitemFooter}>
          <h1 className="border">WORLD ESTIMATING</h1>
          <p className="p-10 text-sm">
            World Estimating ®, is a professional cost estimation consultancy
            specializing in providing detailed construction cost estimates. Our
            cost consultants provide our clients, both public and private
            institutions with different office locations throughout the United
            States with expert, data-driven guidance on their construction
            projects
          </p>
        </div>
        <div className={styles.widthitemFooter}>
          <h1 className="border">NAVIGATION</h1>

          <ul className="p-10 space-y-4">
            <li>Our Trades</li>
            <li>Services</li>
            <li>PortFolio</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className={styles.widthitemFooter}>
          <h1 className="border">REVIEWS</h1>
          <div className="flex align-middle justify-center items-center">
            <Image
              src={Logo}
              alt="logo"
              width={200}
              height={100}
              className="p-10"
            />
          </div>
        </div>
        <div className={styles.widthitemFooter}>
          <h1 className="border">CONTACT</h1>
          <div className="flex flex-col">
            <div className="flex p-5">
              <MdLocationOn />
              <p className="text-sm">
                Head Office:1512 Schorr Pl, Bronx, NY 10469
              </p>
            </div>
            <div className="flex p-5">
              <MdLocationOn />
              <p>Regional Office</p>
            </div>
            <div className="flex p-5">
              <FaPhone /> +923220264464
            </div>
            <div className="flex p-5">
              <MdOutlineMail />
              itshamzanawaz@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-800 text-white p-2">
        Copyright © 2020 - All Rights Reserved by World Estimating -
      </div>
    </>
  );
};

export default Footer;
