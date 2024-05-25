import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="container-fluid bg-primaryBgColor">
      <footer className="text-white container-fluid bg-primaryBgColor">
        <div className="container mx-auto px-4 py-8">
          <div className="md:flex md:justify-between md:items-center bg-[#ffffff19] py-7 md:px-12 px-4 rounded-lg">
            <div className="flex-[0.6] mb-6 md:mb-0 mr-0 md:mr-8">
              <h1 className="lg:text-2xl text-1xl lg:leading-normal font-semibold">
                Analysis based on self-reported outcomes data from 2023 clients
                who had severe anxiety or moderately severe to severe depression
                at intake, and improvements at discharge.
              </h1>
            </div>
            <div className="flex-[0.4]">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <input
                  type="text"
                  placeholder="Enter Your email"
                  className="text-gray-800 bg-transparent w-full py-2.5 rounded-md px-4 focus:outline-none border border-gray-300"
                />
                <Button
                  name="Sign Up"
                  clName="bg-teal-400 hover:bg-teal-500 duration-500 px-1 py-3 rounded-md text-white w-full lg:w-[120px]"
                />
              </div>
            </div>
          </div>
          <ItemsContainer />

          <div className="mt-8 px-4 text-primaryBgColor flex flex-col lg:flex-row gap-5 lg:gap-0 text-sm">
            <div className="bg-white py-5 px-6 rounded-md lg:rounded-none lg:rounded-tl-md lg:rounded-bl-md flex-1">
              <Link to="/">
                If this is a life-threatening emergency, please call 911 or the
                National Suicide Prevention Lifeline
              </Link>
            </div>
            <div className="bg-gray-200 py-5 px-6 lg:rounded-none rounded-md lg:rounded-tr-md lg:rounded-br-md">
              <Link to="/" className="flex gap-3 items-center justify-center">
                <ion-icon name="call"></ion-icon>
                <span className="inline-block">Call 911</span>
              </Link>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  text-center pt-8 text-gray-400 text-sm">
            <span className="col-span-1">
              © 2024 Charlie Health, Inc. All rights reserved.
            </span>
            <span className="col-span-1 ">Terms · Privacy Policy</span>
            <SocialIcons Icons={Icons} />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
