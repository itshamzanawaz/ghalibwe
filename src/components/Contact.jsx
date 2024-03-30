"use client";
import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import Image from "next/image";
import DropBox from "../dropupload.webp";
const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  return (
    <div className="main absolute">
      <div className="m-16">
        <h1 className="text-indigo-900  font-bold text-3xl mb-4">Contact</h1>
        <div className="bg-amber-500 w-14 h-1 mb-8"></div>
        <div className="flex sm:flex-row flex-col sm:w-full">
          <form className="form-width">
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
          </form>
          <div className="width-details">
            <h1 className="text-indigo-900  font-bold text-xl mb-4">Address</h1>
            <div>
              <span className="font-semibold">Head Office:</span> 1512 Schorr
              Pl, Bronx, NY 10469 <br />
              <span className="font-semibold">Regional Office:</span>
            </div>
            <br />
            <br />
            <h1 className="text-indigo-900  font-bold text-xl mb-4">Contact</h1>
            <div>
              itshamzanawaz@gmail.com <br />
              <span className="font-semibold">+923220264464</span>
            </div>
            <br />
            <br />
            <h1 className="text-indigo-900  font-bold text-xl mb-4">
              Working Hours
            </h1>
            <div>
              Mon-Sat: 9 AM – 11 PM <br />
              <span className="font-semibold">
                Sunday: Closed (you can email or call us on Sunday as well, we
                will get back soon)
              </span>
            </div>

            <br />
            <br />
            <br />
            <p>
              Connect with us today by submitting your information in the
              contact us form to get a quick quote in the next 5 minutes,
              comprising of invoice and turnaround time. If you have further
              queries, our representative will contact you within a day to
              discuss how we can work with you. We have successfully served
              clients throughout North America as well as Australia, Africa, and
              the Caribbean.
            </p>
            <br />
            <p>
              No more waiting, no more delays. We deliver on time, every time
            </p>
          </div>
        </div>
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
        <h1 className="text-indigo-900  font-bold text-3xl mb-4 text-center">
          OTHER WAYS TO GET IN TOUCH
        </h1>
        <div className="flex sm:flex-row flex-col m-10">
          <div className="mx-4 sm:width-contact">
            <h1 className="text-indigo-900  font-bold text-3xl m-4 text-center">
              CALL
            </h1>
            <p>
              You can directly call us at{" "}
              <span className="font-bold">+923220264464</span> to discuss your
              project specifications.
            </p>
          </div>
          <div className="mx-4 sm:width-contact">
            <h1 className="text-indigo-900  font-bold text-3xl m-4 text-center">
              EMAIL
            </h1>
            <p>
              Email your plans and specifications at{" "}
              <span className="font-bold">itshamzanawaz@gmail.com</span> and we
              provide you a quick quote or schedule a call.
            </p>
          </div>
          <div className="mx-4 sm:width-contact">
            <h1 className="text-indigo-900  font-bold text-3xl m-4 text-center">
              LIVE CHAT
            </h1>
            <p>
              24/7 live chat support is available where we instantly respond to
              your queries and help you in your critical times.
            </p>
          </div>
        </div>
        <p>
          World Estimating is working as a professional cost estimating
          consultancy with an excellent reputation for delivering <span className="font-bold">highly
          accurate and timely construction cost estimates and material takeoffs</span>
          for a wide portfolio of projects including public, private,
          residential, commercial, industrial, and civil sectors. Our services
          are specifically designed for the respective needs of our clients i.e.
          <span className="font-bold">General Contractors, Subcontractors, Home Builders, Developers,
          Architects, Designers, Investors, and Venders.</span> With the knowledge
          gained by the years of experience in the AEC industry and our
          dedicated team of expert estimators, we have got ourselves recognized
          as the most reliable estimating firm in the market. Feel free to visit
          our profile on The Blue Book.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
