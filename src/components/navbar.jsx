"use client";
import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import classnames from "classnames";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [midNavHeight, setMidNavHeight] = useState("h-36");
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 100) {
        setMidNavHeight("h-22");
      } else {
        setMidNavHeight("h-36"); // Set back to original height
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = classnames({
    "bg-slate-500": true,
    "w-full": true,
    "h-10": true,
    flex: true,
    "justify-end": true,
    "pt-2": true,
  });

  const navMidClass = classnames({
    "bg-white": true,
    flex: true,
    "flex-row": true,
    "justify-between": true,
    "items-center": true,
    "h-auto": true,
    "wrapper-nav-mid": true,
    "pt-2": true,
    "h-36": true,
    "transition-height": true,
    'px-8':true
  });
  const removeonscroll = classnames({
    hidden: scrollPosition > 100,
    "transition-height": true,
  });

  const LinksList = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/Services",
      title: "Services",
    },
    {
      href: "/OurTrades",
      title: "Our Trades",
    },
    
    {
      href: "/Contact",
      title: "Contact",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="fixed w-full z-50">
          <div className={navClass}>
            <div className="inline">
              <FaPhone className="inline text-amber-400" />
              <span className="text-white">+11111111111111</span>
            </div>
            <div className="inline ml-4">
              <CiMail className="inline text-amber-400" />
              <span className="text-white">+estimates@gmail.com</span>
            </div>
          </div>

          <div className={navMidClass}>
            <div className="img-wrapper flex justify-center items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWI6sdtYGAaXV6piZVphL1v8OXwgEozLE0LQIFu50vUA&s"
                alt="logo"
                className={
                  scrollPosition > 100 ? "transition-all h-20" : "transition-all h-36"
                }
                id="logo"
              />
            </div>
            <div className="cont text-center ">
              <h1 className="text-slate-500 text-2xl">
                TURNAROUND TIME 24-48 HOURS!
              </h1>
              <div className={removeonscroll}>
                <button className="mb-5 h-10 hover:bg-slate-900 hover:text-white transition-all w-56 font-bold text-slate-500 text-center rounded-md bg-amber-400 bold text-sm mt-5">
                  Affordable Estimates (30% off)
                </button>
              </div>
            </div>
            <div className="social flex space-x-3 justify-center items-center">
              <FaFacebook className="text-blue-600 hover:transition-all hover:scale-125 text-2xl"/>
              <FaInstagram className="text-red-500 hover:transition-all hover:scale-125 text-2xl"/>
              <FaYoutube className="text-red-600 hover:transition-all hover:scale-125 text-2xl"/>
              <FaLinkedin className="text-blue-500 hover:transition-all hover:scale-125 text-2xl"/>
            </div>
          </div>

          <ul className="ul-nav w-full space-x-2 bg-slate-400 main-ul justify-center items-center align-middle flex">
            <li className="parent">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="parent">
              <Link href="/Services">Services</Link>
              <ul className="child">
                <li className="parent width-list-item">
                  <Link href="/Cost-Estimating">Cost Estimating </Link>
                </li>
                <li className="parent">
                  <Link href="/Construction-estimating">
                    Construction Estimating{" "}
                  </Link>
                </li>
                <li className="parent">
                  <Link href="/Construction-Takeoff-Service">
                    Construction Takeoff
                  </Link>
                </li>

                <li>
                  <Link href="/Residential-Estimating">
                    Residential Estimating
                  </Link>
                </li>
                <li>
                  <Link href="/Commercial-Estimating">
                    Commercial Estimating
                  </Link>
                </li>
                <li>
                  <Link href="/Industrial-Estimating">
                    Industrial Estimating
                  </Link>
                </li>
                <li>
                  <Link href="/preliminary-estimate">Preliminary-estimate</Link>
                </li>
                <li>
                  <Link href="/construction-estimating-consultant">
                    Construction-estimating
                  </Link>
                </li>
              </ul>
            </li>
            




            <li className="parent">
              <Link href="/OurTrades">Our Trades</Link>
              <ul className="child">
                <li className="parent width-list-item">
                  <Link href="/Concrete-Estimating">Concrete Estimating </Link>
                </li>
                <li className="parent">
                  <Link href="/Electrical-estimating">
                    Electrical Estimating{" "}
                  </Link>
                </li>
                <li className="parent">
                  <Link href="/interior-exterior-finishes">
                    Interior & Exterior Finishes
                  </Link>
                </li>

                <li>
                  <Link href="/Masonry-Estimating">
                    Masonry Estimating
                  </Link>
                </li>
                <li>
                  <Link href="/MEP-Estimating">
                    MEP Estimating
                  </Link>
                </li>
                <li>
                  <Link href="/Metals-Estimating">
                    Metals Estimating
                  </Link>
                </li>
                <li>
                  <Link href="/openings-estimate">openings estimate</Link>
                </li>
                <li>
                  <Link href="/Thermal-moisture-protection-estimating">
                  Thermal moisture <br /> <span className="pl-3">protection estimating</span>
                  </Link>
                </li>
              </ul>
            </li>








            
            <Link href={"/get-estimate"} className="btnGet">
              {" "}
              Get Estimates
            </Link>
            <li className="parent">
              <Link href={"/Contact"}>Contact</Link>
            </li>
          </ul>

          <div className="w-full h-8 bg-slate-600 flex justify-between items-center px-5 nav-sm">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
             
<IoMenu className="text-white"/>
            </button>
            <img src="logo" alt="logo" className="logo-mobile" />
          </div>

          {isOpen && (
            <ul className="flex flex-col nav-mobile w-32 bg-white rounded-md mx-4 text-center space-y-1 overflow-hidden mt-2">
              {/* Mobile links */}
              <Link href={"/"} className="m-2 ">
                Home
              </Link>
              
              <Link href={"/Contact"} className="m-2 ">
                Contact
              </Link>
              

              <button className="m-2 " onClick={() => setDropdown(!dropdown)}>
                Services {dropdown ? "-" : "+"}
              </button>
              {dropdown && (
                <ul>
                  <li className="text-slate-400"><Link href={'/Services'}>Services </Link></li>

                  <li className="text-slate-400">
                    <Link href={"/Cost-Estimating"}>CostEstimating</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/Construction-estimating"}>Construction Estimating</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/Construction-Takeoff-Service"}>Construction-Takeoff-Service</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/Residential-Estimating"}>Residential-Estimating</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/Commercial-Estimating"}>Commercial-Estimating</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/Industrial-Estimating"}>Industrial-Estimating</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/preliminary-estimate"}>preliminary-estimate</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/construction-estimating-consultant"}>construction-estimating-consultant</Link>
                  </li>
                 
                  
                </ul>
              )}
              <button className="m-2 " onClick={() => setDropdown2(!dropdown2)}>
                Our Trades {dropdown2 ? "-" : "+"}
              </button>
              {dropdown2 && (
                <ul>
                  <li className="text-slate-400"><Link href={'/OurTrades'}>Our Trades </Link></li>

                  <li className="text-slate-400">
                    <Link href={"/Concrete-Estimating"}>Concrete-Estimating</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/Electrical-estimating"}>Electrical=Estimating</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/interior-exterior-finishes"}>interior-exterior-finishes</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/Masonry-Estimating"}>Masonry-Estimating</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/MEP-Estimating"}>MEP-Estimating</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/Metals-Estimating"}>Metals-Estimating</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/openings-estimate"}>openings-estimate</Link>
                  </li>
                  <li className="text-slate-400">
                    <Link href={"/Thermal-moisture-protection-estimating"}>Thermal-moisture-protection-estimating</Link>
                  </li>
                 
                  
                </ul>
              )}
              <Link href={'/get-estimate'} className="m-2 ">Get Estimate</Link>
              {/* Add more mobile links as needed */}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
