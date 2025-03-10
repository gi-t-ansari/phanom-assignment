import React from "react";
import ppcImg from "../../assets/ppc-img.svg";

const PpcCard = () => {
  return (
    <div className="h-[225px] w-[203px] rounded-[13px] border border-[#0000002E] shadow bg-white overflow-hidden">
      <div className="w-full h-[93px] bg-gradient-to-r from-[#141E30] to-[#243B55] relative text-white flex flex-col justify-center pl-3">
        <h5 className="text-2xl font-bold">PPC</h5>
        <p className="text-[10px] font-serif">Pay Per Click</p>
        <img
          className="absolute bottom-0 right-0"
          height={29}
          width={62}
          src={ppcImg}
          alt="seo"
        />
      </div>
      <div className="w-full h-[110px] px-3 py-2.5 font-serif relative">
        <p className="text-[#8E8E8E] text-[10px] leading-3.5">
          240k+ Appointment Booked Today
        </p>
        <p className="text-xs text-wrap leading-5">
          Search Ads | Display Ads | Demand Gen PMax Ads| Video Ads | Lead
          Generation
        </p>
        <button className="px-[10.14px] py-[3.04px] cursor-pointer text-[9.12px] border rounded-full absolute bottom-0">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PpcCard;
