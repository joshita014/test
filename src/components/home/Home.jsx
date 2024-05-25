import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import women from "../../assets/women.jpg";
import butterfly from "../../assets/watercolor-butterfly-illustration.png";
import europeana from "../../assets/europeana-SMWPYQhVRuY-unsplash.jpg";
import moon from "../../assets/moon.png";
import student from "../../assets/student.png";
import fourwomen from "../../assets/4women.png";
import HomeTableData from "./HomeTableData";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
import Component6 from "./Component6";
import Component7 from "./Component7";
import CardSection from "./CardSection";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    moon,
    butterfly,
    fourwomen,
    europeana,
    // Add more image URLs as needed
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Component1 />
      <Component2 />

      <section className="container-fluid  bg-secondaryBgColor">
        <div className="container ">
          <div className="flex py-12 ">
            <div class="bg-[#FDBF7C] rounded-full px-4 py-3 text-base mr-1 tertiaryFont">
              Parents
            </div>
            <div class="bg-[#DAC1FB] rounded-full px-4 py-3 text-base mr-1 tertiaryFont">
              Young Adults
            </div>
            <div class="bg-[#ADB0E1] rounded-full px-4 py-3 text-base tertiaryFont">
              Teens
            </div>
          </div>
          <div className=" flex-col sm:flex-row flex gap-1 items-center">
            <HomeTableData />
            {/* flex-[1]  */}
            <div className="duration-1000 md:w-[75%] w-[90%] order-1 pl-0 sm:pl-48 text-rounded md:flex md:items-center md:justify-between ">
              <img
                src={images[currentImageIndex]}
                alt="Image"
                className="h-[80vh] object-cover "
              />
            </div>
          </div>
        </div>
      </section>
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <section className="container-fluid bg-secondaryBgColor flex items-center">
        <div className="w-[100%] sm:container h-full flex flex-col lg:flex-row justify-around">
          <div className="flex flex-col lg:w-2/5 h-full tertiaryFont  p-20">
            <p className="lg:mb-14 mb-8 text-4xl lg:text-5xl secondaryFont text-[#1E225B]">
              From the Library
            </p>
            <p>
              <Button
                name="Explore More"
                clName="text-lg text-primaryBgColor border border-primaryBgColor hover:bg-secondaryBgColor rounded-lg px-6 py-3"
              />
            </p>
          </div>
          <div className="lg:w-3/5">
            <CardSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
