import React from "react";
import women from "../../assets/image/women.jpg";
import Button from "../button/Button";

const Home = () => {
  return (
    <>
      <section className="container-fluid h-[80vh] bg-secondaryBgColor flex items-center justify-center">
        <div className="container mx-auto text-center md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 md:p-8">
            <h1 className="text-8xl md:text-9xl text-primaryBgColor font-serif mb-4">
              Heal together
            </h1>
            <p className="text-lg md:text-xl text-primaryBgColor font-serif mb-6">
              Personalized intensive mental healthcare
            </p>
            <button className="bg-primaryBgColor hover:bg-blue-700 text-white font-bold font-serif py-3 px-5 rounded mr-4">
              Get Started
            </button>
            <button className="border border-primaryBgColor bg-secondaryBgColor hover:bg-blue-700 text-primaryBgColor font-bold font-serif py-3 px-5 rounded ">
              Another Button
            </button>
          </div>
          <div className=" md:block md:w-1/4  ">
            <img
              src={women}
              alt="women.jpg"
              className="w-auto h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-fluid h-[80vh] bg-primaryBgColor p-4">
        <div className=" container">
          <div className="flex py-12 ">
            <div>
              <h2 className="text-[40px] text-white secondaryFont">
                Life-saving mental health treatment when you need it most
              </h2>
              <Button
                name="Learn More About IOP"
                clName="text-xl text-white border border-white rounded-md px-6 py-4"
              />
            </div>
            <div className="text-[16px] text-white primaryFont">
              <p>
                Young people in crisis are struggling to find the mental health
                treatment they need. At Charlie Health, we’re creating serious,
                effective, and accessible solutions.
              </p>
              <br />
              <p>
                {" "}
                Our treatment programs, including our virtual Intensive
                Outpatient Program (IOP), combine personalized care with peer
                connection to foster long-term healing..
              </p>
              <div className="flex  justify-center gap-5 my-7 ">
                <div className="w-full md:w-1/2 xl:w-1/3 p-4 bg-red text-white bg-[#ADB0E1] rounded-md h-[300px]">
                  <h3 className="text-2xl font-bold mb-2">Immediate Access</h3>
                  <p className="text-lg">
                    Get started with Charlie Health in as little as 24 hours
                  </p>
                </div>
                <div className="w-full  md:w-1/2 xl:w-1/3 p-4 text-white bg-[#DAC1FB] rounded-md">
                  <h3 className="text-2xl font-bold mb-2">
                    Flexible Scheduling
                  </h3>
                  <p className="text-lg">
                    Morning, afternoon, and evening options on Mon-Sat
                  </p>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-4 text-white bg-[#FDBF7C] rounded-md">
                  <h3 className="text-2xl font-bold mb-2">
                    Exceptional Outcomes
                  </h3>
                  <p className="text-lg">
                    Measured care to optimize the treatment experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* <!-- child elements here --> */}
        </div>
      </div>
    </>
  );
};

export default Home;
