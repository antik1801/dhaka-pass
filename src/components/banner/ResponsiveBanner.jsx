import React from "react";
import Image from 'next/image'

const ResponsiveBanner = () => {
  return (
    <div>
      <div className="relative mt-5 lg:mt-12 rounded-[40px]">
        <Image
          src="/concert.png"
          width={1252}
          height={500}
          className="rounded-[40px]"
        />
        <div className="absolute inset-0 bg-black opacity-60 rounded-[40px] w-full"></div>
        <div className="absolute top-1/3 lg:top-1/2 text-center w-full rounded-[40px] px-4 lg:px-0">
          <h1
            style={{ fontFamily: "YourFont" }}
            className={`text-[24px] lg:text-7xl font-dominant text-white`}
          >
            HATIRJHEEL <br /> CONCERT 2023
          </h1>
          <div className="flex flex-col items-center gap-4 mt-3 lg:mt-12 lg:flex-row lg:justify-center">
            <button
              className={`p-3 lg:p-5 text-white bg-[#D03246] rounded-lg text-sm lg:text-base lg:mr-4`}
            >
              Get Your Ticket
            </button>
            <button
              className={`p-3 lg:p-5 text-white border-[1px] border-white rounded-lg text-sm lg:text-base`}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveBanner;
