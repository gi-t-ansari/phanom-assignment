import React from "react";
import SeoImg from "../../assets/seo-hero.svg";

const HeroSection = () => {
  return (
    <section
      className="w-full h-[89vh] pl-14 flex justify-between items-center relative"
      style={{
        background:
          "linear-gradient(155deg, #FFFFFF 55.44%, #4D95E1 71.32%, #8165E4 82.01%, #BD2CE8 94.69%)",
      }}
    >
      <div>
        <h1 className="text-5xl font-bold mb-20">
          <span className="bg-gradient-to-r from-[#4D95E1] via-[#8165E4] to-[#BD2CE8] bg-clip-text text-transparent">
            Let’s innovation
          </span>{" "}
          <span>
            meets your <br /> excellence
          </span>
        </h1>
        <p className="text-[28px] leading-none mb-8">
          Excellence refined, innovation ignited, the future <br /> starts here
        </p>
        <button className="bg-[#6C5FD4] text-white rounded-full px-12 py-3 font-light cursor-pointer text-lg">
          Book an Appointment
        </button>
      </div>
      <div className="h-[438px] w-[629px] overflow-hidden -mt-16">
        <img className="w-full h-full" src={SeoImg} alt="seo-img" />
      </div>
      <div className="absolute right-16 bottom-8 text-white flex items-center gap-x-3">
        <div className="flex flex-col items-center">
          <h5 className="text-5xl font-bold font-ibm-plex-sans">24/7</h5>
          <p className="text-lg font-serif">Online Support</p>
        </div>
        <div className="h-[0.87px] w-[69px] rotate-90 bg-white"></div>
        <div className="flex flex-col items-center">
          <h5 className="text-5xl font-bold font-ibm-plex-sans">100+</h5>
          <p className="text-lg font-serif">Web Developed & Application</p>
        </div>
        <div className="h-[0.87px] w-[69px] rotate-90 bg-white"></div>
        <div className="flex flex-col items-center">
          <h5 className="text-5xl font-bold font-ibm-plex-sans">5+</h5>
          <p className="text-lg font-serif">Year Experience</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
