import React from "react";
import Button from "../button/Button";

function Component7() {
  return (
    <div>
      <section className="container-fluid bg-white  flex items-center ">
        <div className="container h-full flex flex-col lg:flex-row lg:items-start items-stretch justify-start py-20 ">
          <div class=" flex  mr-1 ">
            <p className="lg:mb-14 mb-8 text-[40px]  secondaryFont font-semi-bold text-[#1E225B] px-10">
              The core mental <br />
              health conditions we treat
            </p>
          </div>
          <div class="container ">
            <div className="flex flex-col  gap-4">
              <hr style={{ borderTop: "2px solid #1E225B" }} />

              <div className="flex gap-10  rounded-lg px-8 py-5">
                <div className="flex-[0.5] flex gap-2 ">
                  <div className="primaryFont text-lg font-semi-bold text-[#1E225B]">
                    Anxiety disorders{" "}
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                </div>
                <div className="flex-[1]">
                  <div className="tertiaryFont text-sm text-[#1E225B]">
                    Generalized anxiety, social anxiety, panic attacks, panic
                    disorder, agoraphobia
                  </div>
                </div>
              </div>
              <hr style={{ borderTop: "2px solid #1E225B" }} />

              <div className="flex gap-10 rounded-lg px-8 py-5">
                <div className="flex-[0.5] flex gap-2">
                  <div className="primaryFont text-lg font-semi-bold text-[#1E225B]">
                    Depression{" "}
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                </div>
                <div className="flex-[1]">
                  <div className="tertiaryFont text-sm text-[#1E225B]">
                    Major depression, melancholic depression, atypical
                    depression, seasonal affective disorder, persistent
                    depressive disorder
                  </div>
                </div>
              </div>
              <hr style={{ borderTop: "2px solid #1E225B" }} />

              <div className="flex gap-10 rounded-lg px-8 py-5">
                <div className="flex-[0.5] flex gap-2">
                  <div className="primaryFont text-lg font-semi-bold text-[#1E225B]">
                    Trauma <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                </div>
                <div className="flex-[1]">
                  <div className="tertiaryFont text-sm text-[#1E225B]">
                    Acute trauma, chronic trauma, complex trauma, post-traumatic
                    stress disorder
                  </div>
                </div>
              </div>
              <hr style={{ borderTop: "2px solid #1E225B" }} />

              <div className="flex gap-10  rounded-lg px-8 py-5">
                <div className="flex-[0.5] flex gap-2">
                  <div className="primaryFont text-lg font-semi-bold text-[#1E225B]">
                    Self-harm <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                </div>
                <div className="flex-[1]">
                  <div className="tertiaryFont text-sm text-[#1E225B]">
                    Self-harm, self-injury, suicidal ideation, suicide survival
                  </div>
                </div>
              </div>
              <hr style={{ borderTop: "2px solid #1E225B" }} />

              <div className="flex gap-10  rounded-lg px-8 py-5">
                <div className="flex-[0.5] flex gap-2 ">
                  <div className="primaryFont text-lg font-semi-bold text-[#1E225B]">
                    Substance use disorders{" "}
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                </div>
                <div className="flex-[1]">
                  <div className="tertiaryFont text-sm text-[#1E225B]">
                    Alcohol, marijuana, prescription drugs, amphetamines,
                    cocaine, inhalants, hallucinogens, nicotine
                  </div>
                </div>
              </div>
              <hr style={{ borderTop: "2px solid #1E225B" }} />
            </div>
            <br />
            <Button
              name="View All"
              clName="text-lg text-primaryBgColor border  border-primaryBgColor  hover:bg-secondaryBgColor rounded-lg px-6 py-4"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Component7;
