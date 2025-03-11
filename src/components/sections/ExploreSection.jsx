import React from "react";
import marketingLogo from "../../assets/digital-marketing-promotion-advertising-svgrepo-com 1.svg";
import { PpcCard, SeoCard, SocialCard, YoutubeCard } from "../cards";
import seoSmallImg from "../../assets/seo-small.svg";
import socialSmallImg from "../../assets/social-small.svg";
import ppcSmallImg from "../../assets/ppc-small.svg";
import ytSmallImg from "../../assets/youtube-small.svg";
import { IoArrowBackOutline } from "react-icons/io5";

const ExploreSection = () => {
  return (
    <section className="w-full h-[85vh] bg-white px-16 py-14 ">
      <div className="flex justify-center items-center gap-x-5">
        <article className="basis-[22%]">
          <div className="text-[48px]  leading-11 font-bold text-[#6C5FD4] relative  drop-shadow-[0px_8px_5px_#6C5FD4]">
            <span className="absolute inset-0 text-transparent -z-10 stroke-[#6C5FD4] stroke-[3px]">
              Explore <br /> our <br /> Service
            </span>
            Explore <br /> our <br /> Service
          </div>
          <p className="my-8 text-lg">
            Explore our service and discover solutions designed to meet your
            unique needs. With a focus on quality and innovation, we turn your
            vision into reality.
          </p>
          <button className="bg-[#6C5FD4] text-white rounded-full px-5 py-2 cursor-pointer font-serif">
            Book an Appointment
          </button>
        </article>
        <article className="border border-[#0000002E] flex-1 h-fit rounded-[13.6px] p-4 shadow">
          <header className="flex items-center gap-x-6">
            <div className="h-[54px] w-[54px]">
              <img className="w-full h-full" src={marketingLogo} alt="mrktng" />
            </div>
            <h4 className="text-[#6C5FD4] text-[28px]">Digital Marketing</h4>
          </header>
          <p className="text-lg font-serif mt-3">
            Keep your lawn in top shape without lifting a finger and boost the
            appearance of your property.
          </p>
          <div className="w-full flex gap-x-4 mb-4 mt-6">
            <SeoCard />
            <SocialCard />
            <PpcCard />
            <YoutubeCard />
          </div>
          <div className="flex items-center gap-x-2">
            <h6 className="text-lg text-[#646464]">Tools:</h6>
            <img width={21.48} height={21.48} src={seoSmallImg} alt="se" />
            <img width={21.48} height={21.48} src={socialSmallImg} alt="so" />
            <img width={21.48} height={21.48} src={ppcSmallImg} alt="pp" />
            <img width={21.48} height={21.48} src={ytSmallImg} alt="yt" />
          </div>
        </article>
      </div>
      <div className="flex justify-end mt-4">
        <IoArrowBackOutline
          className="rotate-180 text-[#6C5FD4]"
          size={41.51}
        />
      </div>
    </section>
  );
};

export default ExploreSection;
