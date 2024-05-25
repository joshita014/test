import React from "react";

function HomeTableData() {
  return (
    <>
      <div class="w-[100%]">
        <h1 class="lg:mb-14 mb-8 text-[40px]  secondaryFont font-semi-bold">
          Real stories of hope &amp; healing
        </h1>

        <div className="flex flex-col gap-5">
          <div className="flex gap-20">
            <div className="flex-[0.3] flex gap-2">
              <div className="mt-2 h-[10px] w-[24px] bg-yellow-500 rounded-[50%] "></div>
              <div className="secondaryFont text-xl font-semi-bold">
                “My daughter was acting like herself again.”
              </div>
            </div>
            <div className="flex-[1]">
              <div className="tertiaryFont text-md">
                I really didn’t know what to do for my daughter before Charlie
                Health. I’ve always felt I’ve been alone in this. I felt so
                helpless. Within the first week, my daughter was acting like
                herself again. Charlie Health has given my daughter and me
                lifelong tools to navigate her anxiety and panic attacks. I’ve
                been blown away. I’m very impressed and very happy.
              </div>
              <div>—Tasia C.</div>
            </div>
          </div>

          <div className="flex gap-20">
            <div className="flex-[0.3] flex gap-2">
              <div className="mt-2 h-[10px] w-[20px] bg-[#DAC1FB] rounded-[50%] "></div>
              <div className="secondaryFont text-xl font-semi-bold">
                “Charlie Health saved my life.”
              </div>
            </div>
            <div className="flex-[1]">
              <div className="tertiaryFont text-md">
                Before Charlie Health, I was struggling very much with my
                anxiety. My therapist told me that she couldn’t help me anymore,
                so she suggested Charlie Health. I’m really glad I chose to
                call. I have a new lease on life. My anxiety is at an all-time
                low and I can function day-to-day in ways I never thought
                possible. Charlie Health saved my life.
              </div>
              <div>–Jessica B.</div>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="flex-[0.3] flex gap-2">
              <div className="mt-2 h-[10px] w-[28px] bg-[#ADB0E1] rounded-[50%] "></div>
              <div className="secondaryFont text-xl font-semi-bold">
                “It helped me feel like I was not alone in this world.”
              </div>
            </div>
            <div className="flex-[1]">
              <div className="tertiaryFont text-md">
                I was very angry and depressed when I first came to Charlie
                Health, but with help, guidance, listening, and reassurance, it
                helped me feel like I was not alone in this world. I got the
                help that I wanted and needed to change my mindset.
              </div>
              <div>–Kairey M.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTableData;
