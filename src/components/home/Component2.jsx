import React from "react";
import Button from "../button/Button";

function Component2() {
  return (
    <div>
      <section className="container-fluid bg-primaryBgColor p-4">
        <div className=" sm:container w-[100%]">
          <div className=" flex py-12 px-12 flex-col lg:flex-row lg:items-start items-stretch">
            <div className="w-full lg:w-1/2">
              <h2 className=" text-[40px] text-white secondaryFont mb-4">
                Life-saving mental health treatment when you need it most
              </h2>
              <br />
              <Button
                name="Learn More About IOP"
                clName="text-xl text-white border border-white rounded-xl px-6 py-4 my-2"
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
              <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 my-7 pb-3">
                <div className="w-full xl:w-1/3 p-4 bg-red text-primaryBgColor bg-[#ADB0E1] rounded-md ">
                  <h3 className="text-3xl font-semi-bold mb-2">
                    <ion-icon name="alert-circle-outline"></ion-icon>
                  </h3>
                  <h3 className="text-3xl font-semi-bold pb-10 ">
                    {" "}
                    <br /> Immediate Access
                  </h3>
                  <p className="text-md tertiaryFont">
                    Get started with Charlie Health in as little as 24 hours
                  </p>
                </div>
                <div className="w-full  xl:w-1/3 p-4 text-primaryBgColor bg-[#DAC1FB] rounded-md">
                  <h3 className="text-3xl font-semi-bold mb-2">
                    <ion-icon name="calendar-outline"></ion-icon>
                  </h3>
                  <h3 className="text-3xl font-semi-bold pb-10 ">
                    <br />
                    Flexible Scheduling
                  </h3>
                  <p className="text-md tertiaryFont">
                    Morning, afternoon, and evening options on Mon-Sat
                  </p>
                </div>
                <div className="w-full xl:w-1/3 p-4 text-primaryBgColor bg-[#FDBF7C] rounded-md">
                  <h3 className="text-3xl font-semi-bold mb-2">
                    <ion-icon name="cellular-outline"></ion-icon>
                  </h3>
                  <br />
                  <h3 className="text-3xl font-semi-bold pb-10 ">
                    Exceptional Outcomes
                  </h3>
                  <p className="text-md tertiaryFont">
                    Measured care to optimize the treatment experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Component2;
