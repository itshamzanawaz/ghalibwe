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
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [onclickul, setOnclickul] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [nestedDropdown1, setNestedDropdown1] = useState(false);
  const [nestedDropdown2, setNestedDropdown2] = useState(false);
  const [nestedDropdown3, setNestedDropdown3] = useState(false);
  const [nestedDropdown4, setNestedDropdown4] = useState(false);
  const [nestedDropdown5, setNestedDropdown5] = useState(false);
  const [nestedDropdown6, setNestedDropdown6] = useState(false);
  const [nestedDropdown7, setNestedDropdown7] = useState(false);
  const [nestedDropdown8, setNestedDropdown8] = useState(false);
  const [nestedDropdown9, setNestedDropdown9] = useState(false);
  const [nestedDropdown10, setNestedDropdown10] = useState(false);
  const [nestedDropdown11, setNestedDropdown11] = useState(false);
  const [nestedDropdown, setNestedDropdown] = useState(false);


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
      href: "/Pricing",
      title: "Pricing",
    },
    {
      href: "/Samples",
      title: "Samples",
    },
    {
      href: "/About",
      title: "About Us",
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
                  scrollPosition > 100 ? "transition-all h-20" : "h-36"
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
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <FaLinkedin />
            </div>
          </div>




          <ul className="ul-nav w-full space-x-5 bg-slate-400 main-ul justify-center items-center align-middle flex">
          <li className="parent"><Link href={'/'}>Home</Link></li>
          <li className="parent"><Link href="#">Services</Link>
            <ul className="child">
              <li className="parent"><Link href="/CostEstimating">Cost Estimating <span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#">Building Cost Estimating</Link></li>
                  <li><Link href="#">BIM Estimating Services</Link></li>
                  <li><Link href="#">Budget Estimating</Link></li>
                </ul></li>
                <li className="parent"><Link href="/CostEstimating">Cost Estimating <span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#">Building Cost Estimating</Link></li>
                  <li><Link href="#">BIM Estimating Services</Link></li>
                  <li><Link href="#">Budget Estimating</Link></li>
                </ul></li>
                <li className="parent"><Link href="/CostEstimating">Cost Estimating <span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#">Building Cost Estimating</Link></li>
                  <li><Link href="#">BIM Estimating Services</Link></li>
                  <li><Link href="#">Budget Estimating</Link></li>
                </ul></li>
                <li className="parent"><Link href="/CostEstimating">Cost Estimating <span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#">Building Cost Estimating</Link></li>
                  <li><Link href="#">BIM Estimating Services</Link></li>
                  <li><Link href="#">Budget Estimating</Link></li>
                </ul></li>
                <li className="parent"><Link href="/CostEstimating">Cost Estimating <span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#">Building Cost Estimating</Link></li>
                  <li><Link href="#">BIM Estimating Services</Link></li>
                  <li><Link href="#">Budget Estimating</Link></li>
                </ul></li>
              <li><Link href="#">Barbies</Link></li>
              <li><Link href="#">Teddy Bear</Link></li>
              <li><Link href="#">Golf Set</Link></li>
            </ul></li>

            


          <li className="parent"><Link href="#">Our Trades</Link>
            <ul className="child">
              <li><Link href="#">Yoyo</Link></li>
              <li><Link href="#">Doctor Kit</Link></li>
              <li className="parent"><Link href="#">Fun Puzzle<span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#" nowrap>Cards</Link></li>
                  <li><Link href="#" nowrap>Numbers</Link></li>
                </ul></li>
                <li className="parent"><Link href="#">Fun Puzzle<span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#" nowrap>Cards</Link></li>
                  <li><Link href="#" nowrap>Numbers</Link></li>
                </ul></li>
                <li className="parent"><Link href="#">Fun Puzzle<span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#" nowrap>Cards</Link></li>
                  <li><Link href="#" nowrap>Numbers</Link></li>
                </ul></li>
                <li className="parent"><Link href="#">Fun Puzzle<span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#" nowrap>Cards</Link></li>
                  <li><Link href="#" nowrap>Numbers</Link></li>
                </ul></li>
                <li className="parent"><Link href="#">Fun Puzzle<span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#" nowrap>Cards</Link></li>
                  <li><Link href="#" nowrap>Numbers</Link></li>
                </ul></li>
                <li className="parent"><Link href="#">Fun Puzzle<span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#" nowrap>Cards</Link></li>
                  <li><Link href="#" nowrap>Numbers</Link></li>
                </ul></li>
                <li className="parent"><Link href="#">Fun Puzzle<span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#" nowrap>Cards</Link></li>
                  <li><Link href="#" nowrap>Numbers</Link></li>
                </ul></li>
              <li><Link href="#">Uno Cards</Link></li>
            </ul></li>





          <li className="parent"><Link href="#">About Us</Link>
            <ul className="child">
              <li><Link href="#">Battery Toys</Link></li>
              <li className="parent"><Link href="#">Remote Toys <span className="expand">»</span></Link>
                <ul className="child">
                  <li><Link href="#">Cars</Link></li>
                  <li><Link href="#">Aeroplane</Link></li>
                  <li><Link href="#">Helicopter</Link></li>
                </ul></li>
              <li><Link href="#">Soft Toys</Link></li>
              <li><Link href="#">Magnet Toys</Link></li>
            </ul></li>
            <li className="parent"><Link href={'/'}>Samples</Link></li>
            <Link href={'/get-estimate'} className="btnGet"> Get Estimates</Link>
            <li className="parent"><Link href={'/Contact'}>Contact</Link></li>
        </ul>






          <div className="w-full h-8 bg-slate-600 flex justify-between items-center px-5 nav-sm">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Menu
            </button>
            <img src="logo" alt="logo" className="logo-mobile" />
          </div>

          {isOpen && (
            <ul className="flex flex-col nav-mobile w-32 bg-white rounded-md mx-4 text-center space-y-1 overflow-hidden mt-2">
              {/* Mobile links */}
              <Link href={'/'} className='m-2 '>Home</Link>
              <Link href={'/Samples'}  className='m-2 '>Sample</Link>
              <Link href={'/Contact'} className='m-2 '>Contact</Link>
              <Link href={'/pricing'} className='m-2 '>pricing</Link>

              <button className='m-2 '  onClick={() => setDropdown(!dropdown)}>Services</button>
              {dropdown && (
                <ul>
                <li>
                    <button className='m-2 ' onClick={() => setNestedDropdown(!nestedDropdown)}>
                      CostEstimating
                    </button>
                    {nestedDropdown && (
                      <ul>
                        <li></li>
                        <li>Nested Subitem 2</li>
                        <li>Nested Subitem 3</li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button className='m-2 ' onClick={() => setNestedDropdown1(!nestedDropdown1)}>
                      Nested Dropdown
                    </button>
                    {nestedDropdown1 && (
                      <ul>
                        <li>Nested Subitem 1</li>
                        <li>Nested Subitem 2</li>
                        <li>Nested Subitem 3</li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button className='m-2 ' onClick={() => setNestedDropdown2(!nestedDropdown2)}>
                      Nested Dropdown
                    </button>
                    {nestedDropdown2 && (
                      <ul>
                        <li>Nested Subitem 1</li>
                        <li>Nested Subitem 2</li>
                        <li>Nested Subitem 3</li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button className='m-2 ' onClick={() => setNestedDropdown3(!nestedDropdown3)}>
                      Nested Dropdown
                    </button>
                    {nestedDropdown3 && (
                      <ul>
                        <li>Nested Subitem 1</li>
                        <li>Nested Subitem 2</li>
                        <li>Nested Subitem 3</li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button className='m-2 ' onClick={() => setNestedDropdown4(!nestedDropdown4)}>
                      Nested Dropdown
                    </button>
                    {nestedDropdown4 && (
                      <ul>
                        <li>Nested Subitem 1</li>
                        <li>Nested Subitem 2</li>
                        <li>Nested Subitem 3</li>
                      </ul>
                    )}
                  </li>
                  <li>Services</li>
                  <li>CostEstimating</li>
                  
                </ul>
              )}
              <button className='m-2 '>Our trades</button>
              <button className='m-2 '>About Us</button>
              {/* Add more mobile links as needed */}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
