import React from "react";
import Button from "../button/Button";

function Component5() {
  return (
    <div>
      <section className="container-fluid py-12 bg-primaryBgColor  flex items-center ">
        <div className="container h-full flex justify- start items-center">
          <div className="flex flex-col bg-[#1E225B] rounded-2xl px-12 py-12  lg:w-full lg:h-full  w-[100%] h-[100%] tertiaryFont items-center justify-around">
            <p className="text-6xl text-white px-10 py-8  ">
              {" "}
              <ion-icon name="diamond-outline"></ion-icon>{" "}
            </p>
            <p className=" text-5xl text-white secondaryFont pb-10">
              Reach out to start your<p> healing journey today</p>
            </p>
            <div className="flex lg:flex-row flex-col justify-start items-center">
              <p className=" text-md md:text-md tertiaryFont text-white mb-6 sm:px-28 px-0">
                Fill out our form or call us directly to learn if Charlie Health
                is right for you or a <br />
                loved one. We’re available 24/7.
              </p>
              <button className="bg-white text-lg hover:bg-secondaryBgColor text-primaryBgColor tertiaryFont my-2 px-10 py-3 mr-3 rounded-lg">
                Get Started
              </button>
              <Button
                name="1 (866) 959-1162"
                clName="text-xl text-white border border-white rounded-xl py-3 px-4 my-2 "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Component5;
