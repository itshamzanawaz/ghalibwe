"use client";
import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import Image from "next/image";
import DropBox from "../dropupload.webp";
import Logo from '../getest.webp'

const Getestimates = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  return (
    <div className="main absolute">
      <div className="m-16">
       
        <div className="flex sm:flex-row flex-col sm:w-full">
          <form className="form-width">
          <h1 className="text-indigo-900 width-estimate-h1 font-bold text-3xl mb-4">
          Get Estimate: Get Construction Cost Estimates & Material Takeoffs
          Within 24-48 Hours!
        </h1>
        <p className="text-red text-lg m-6 ml-0 font-semibold">
          Call us: +1 347 480-1903 (30% Off For New Clients)
        </p>
        <div className="bg-amber-500 w-14 h-1 mb-8"></div>
            <label
              className="block py-2 my-2 text-lg font-semibold"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="width-input w-full  bg-slate-300 rounded-md py-1"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label
              className="block py-2 my-2 text-lg font-semibold"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="width-input w-full  bg-slate-300 rounded-md py-1"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label
              className="block py-2 my-2 text-lg font-semibold"
              htmlFor="phone"
            >
              Phone:
            </label>
            <input
              className="width-input w-full  bg-slate-300 rounded-md py-1"
              type="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <label
              htmlFor="subject"
              className="block py-2 my-2 text-lg font-semibold"
            >
              Subject:
            </label>
            <select
              name="subject"
              id="subject"
              className="width-input w-full  bg-slate-300 rounded-md py-1"
            >
              <option
                className="width-input w-full  bg-slate-300 rounded-md py-1"
                value="construction-estimates"
              >
                Construction Estimates
              </option>
              <option
                className="width-input w-full  bg-slate-300 rounded-md py-1"
                value="material-takeoffs"
              >
                Material Takeoffs
              </option>
              <option
                className="width-input w-full  bg-slate-300 rounded-md py-1"
                value="other"
              >
                Other
              </option>
            </select>
            <br />
            <label
              className="block py-2 my-2 text-lg font-semibold"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="width-input w-full  h-40 bg-slate-300 rounded-md py-1 "
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
            <button
              type="submit"
              className="font-bold bg-black border-2 text-white p-4 text-2xl hover:bg-slate-800 rounded-md  border-white"
            >
              Send
            </button>

            <h1 className="text-indigo-900 font-bold text-xl mb-4 m-10 width-upload">
            Send us plans information with your contact details by filling out
            this form and{" "}
            <span className="text-red">upload plans in below DROPBOX link</span>
          </h1>
          <div className="m-10">
            <Image
              src={DropBox}
              alt=" dropbox upload link"
              width={300}
              height={150}
            />
          </div>
          </form>
          <div className="width-details">
            <div>
              If your answer is yes, then you should get in touch with World
              Estimating. The company is having an experience of 15 years and a
              team of experts to provide an error-free estimate. No matter what
              type of construction cost estimate you want! It can be related to
              commercial,
              <span className="font-semibold">
                , residential construction estimates,
              </span>{" "}
              industrial or any other to get satisfactory results. 1512 Schorr
              Pl, Bronx, NY 10469 <br />
              <br />
              Our valuable customers can visit our office in New York or call us
              at +1347 480-1903. Additionally, you can email us on
              info@worldestimating.com
              <br/>
              What are you waiting for? Contact us today and request a free quote today to kick start your project. No more waiting, no more delays. You will get guaranteed accurate construction cost estimates for the best results.
             <br/><br/>
             <Image src={Logo} alt="get estimate " width={300} height={200}/>
            </div>
            <br />
            <br />
            <h1 className="text-indigo-900 font-bold text-xl mb-4 m-10 width-upload">
          Get Estimate
        </h1>
        <p>Get Estimate. Call Us to Get a Free Quote. Looking to detailed and accurate construction cost estimates and material takeoffs? We are working with an aim to provide exceptional services to our valued clients. We always believe in long term business relations so you can try our quality services at any time with minimum cost. So do not waste this opportunity.</p>
          </div>
        </div>
       
        </div>
      <Footer />
    </div>
  );
};

export default Getestimates;
