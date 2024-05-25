import React from "react";
import women from "../../assets/women.jpg";

function Component1() {
  return (
    <div>
      <section className="container-fluid bg-white flex items-center justify-rounded">
        <div className="container mx-auto text-rounded md:flex  md:items-center md:justify-between py-10">
          <div className="md:w-1/2 md:p-7">
            <h1 className="text-4xl md:text-9xl text-primaryBgColor font-serif mb-4">
              Heal together
            </h1>
            <p className="text-lg md:text-xl text-primaryBgColor font-serif mb-6">
              Personalized intensive mental healthcare
            </p>
            <button className="bg-primaryBgColor hover:bg-[#1E225B] text-white font-bold tertiaryFont py-3 px-5  rounded mr-4 my-2">
              Get Started
            </button>
            <button className="border border-primaryBgColor bg-white hover:bg-secondaryBgColor text-primaryBgColor font-bold tertiaryFont py-3 px-5 rounded ">
              Another Button
            </button>
          </div>
          <div className=" md:block md:w-1/4 ">
            <br />
            <img
              class=" w-full object-cover md:h-full md:w-48 lg:h-full lg:w-full sm:h-80 "
              src={women}
              alt="women.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Component1;
