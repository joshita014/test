import React from "react";
import Button from "../button/Button";
import women from "../../assets/women.jpg";

function Component3() {
  return (
    <div>
      {" "}
      <section className="container-fluid  bg-white flex items-center py-12">
        <div className="container h-full flex lg:flex-row flex-col justify-around items-center">
          <div class="sm:flex-row flex-col flex gap-5 bg-primaryBgColor rounded-2xl px-12 py-12 lg:w-[40%] lg:h-[55%] text-base mr-1 tertiaryFont">
            <div className="sm:flex-[0.4] md:flex-[1] flex gap-2">
              <img src={women} alt="women.jpg" className="w-40 h-30 " />
            </div>
            <div className="flex-[1]">
              <div className="tertiaryFont text-3xl font-semi-bold text-white">
                Charlie Health's Annual Outcomes Report
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div>
                <br />
                <p className=" text-white tertiaryFont text-md font-semi-bold">
                  Read more about our latest clinical research and
                  industry-leading outcomes
                </p>
              </div>
            </div>
          </div>
          <div class=" flex gap-5 bg-white rounded-2xl px-12 py-12 lg:w-[40%] lg:h-[55%] text-base mr-1 tertiaryFont">
            <div className="flex-[1]">
              <div className="secondaryFont text-6xl font-semi-bold text-primaryBgColor">
                More than 90%
              </div>
              <div>
                <br />
                <p className=" text-primaryBgColor tertiaryFont text-lg font-semi-bold">
                  of clients see improvements in their most severe mental health
                  symptoms*
                </p>
                <br />
                <Button
                  name="Explore Our Outcomes"
                  clName="text-lg text-primaryBgColor border border-primaryBgColor  hover:bg-secondaryBgColor rounded-md px-6 py-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Component3;
