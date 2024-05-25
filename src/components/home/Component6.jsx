import React from "react";
import Button from "../button/Button";

function Component6() {
  return (
    <div>
      <section className="container-fluid bg-primaryBgColor  flex items-center ">
        <div className="sm:container w-full h-full flex lg:flex-row flex-col  gap-5 justify-around items-center py-12">
          <img
            src="https://www.charliehealth.com/wp-content/uploads/2023/12/Aetna_Logo_ss_Violet_RGB_Coated.svg"
            alt="Aetna logo"
            class="w-105 h-21 object-contain"
          />
          <img
            src="https://www.charliehealth.com/wp-content/uploads/2023/12/bluecrossblueshield.svg"
            alt="Blue Cross Blue Shield logo"
            class="w-77 h-26 object-contain"
          />
          <img
            src="https://www.charliehealth.com/wp-content/uploads/2023/12/cigna-3-1.svg"
            alt="Cigna logo"
            class="w-98 h-33 object-contain"
          />
          <img
            src="https://www.charliehealth.com/wp-content/uploads/2023/12/Optum_logo_2021.svg"
            alt="Optum logo"
            class="w-71 h-21 object-contain"
          />
          <img
            src="https://www.charliehealth.com/wp-content/uploads/2023/12/UnitedHealthcare_logo.svg"
            alt="UHC logo"
            class="w-95 h-31 object-contain"
          />
          <img
            src="https://www.charliehealth.com/wp-content/uploads/2023/12/US-TRICARE-Logo.svg"
            alt="US Tricare logo"
            class="w-73 h-37 object-contain"
          />
        </div>
        <div className="flex flex-col rounded-2xl tertiaryFont items-center justify-start pb-20">
          <p className="text-xl text-white sm:px-40 px-5 pb-5 tertiaryFont">
            We proudly partner with many major insurance providers, including
            commercial and Medicaid
          </p>
          <Button
            name="Learn more"
            clName="text-xl text-white border border-white rounded-xl px-6 py-4"
          />
        </div>
      </section>
    </div>
  );
}

export default Component6;
