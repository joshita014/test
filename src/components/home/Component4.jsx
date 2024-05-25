import React from "react";
import student from "../../assets/student.png";

function Component4() {
  return (
    <div>
      <section className="container-fluid  bg-secondaryBgColor  flex items-center pb-20 ">
        <div className="container sm:flex-row flex-col h-full flex lg:items-start items-stretch justify-around items-center">
          <div class="  flex gap-5  md:items-center md:justify-between items-center mr-1 md:w-[75%]">
            <img src={student} className="w-[80vh] h-[70vh] object-cover" />
          </div>
          <div class="container ">
            <div class="flex py-10 pb-5 text-[50px]  secondaryFont font-semi-bold text-primaryBgColor">
              How it works
            </div>

            <div className="flex flex-col  gap-4">
              <div className="flex gap-10 bg-white rounded-lg px-8 py-5">
                <div className="flex-[0.3] flex gap-2 ">
                  <div className="primaryFont text-lg font-semi-bold text-primaryBgColor">
                    Reach out
                  </div>
                </div>
                <div className="flex-[1]">
                  <div className="tertiaryFont text-md text-primaryBgColor">
                    Call our Admissions Team 24/7 or fill out our quick online
                    form to verify your insurance coverage and get started
                  </div>
                </div>
              </div>

              <div className="flex gap-10 bg-white rounded-lg px-8 py-5">
                <div className="flex-[0.3] flex gap-2">
                  <div className="primaryFont text-lg font-semi-bold text-primaryBgColor">
                    Get matched
                  </div>
                </div>
                <div className="flex-[1]">
                  <div className="tertiaryFont text-md text-primaryBgColor">
                    We’ll conduct a thorough clinical assessment to create a
                    personalized virtual treatment plan based on your mental
                    health goals and scheduling needs
                  </div>
                </div>
              </div>
              <div className="flex gap-10 bg-white rounded-lg px-8 py-5">
                <div className="flex-[0.3] flex gap-2">
                  <div className="primaryFont text-lg font-semi-bold text-primaryBgColor">
                    Start healing
                  </div>
                </div>
                <div className="flex-[1]">
                  <div className="tertiaryFont text-md text-primaryBgColor">
                    Meet your peers in curated groups and your primary therapist
                    in as little as 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Component4;
