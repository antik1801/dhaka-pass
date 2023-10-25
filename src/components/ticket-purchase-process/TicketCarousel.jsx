"use client";
import React from "react";
import Container from "../container/Container";

const TicketCarousel = () => {
  return (
    <Container>
      <div className="lg:mt-12 hidden lg:block">
        <div>

        </div>
        <div className="flex justify-between">
        <div className=" relative">
          <div className="lg:w-[358px] lg:h-[215px] p-10 bg-[#F1E2E2] rounded-[30px] flex-col justify-start items-start gap-2.5 inline-flex absolute left-4 top-5">
            <div className="flex-col justify-start items-center gap-[30px] flex">
              <div
                style={{ fontFamily: "YourFont" }}
                className="w-[182px] text-center text-rose-600 text-[32px] font-normal font-['Dominant Youth']"
              >
                Step 01
              </div>
              <div className="w-[278px] text-center text-red-950 text-base font-normal font-['Poppins']">
                The first step in the ticket purchase process is to login or
                create an account, providing the necessary credentials.
              </div>
            </div>
          </div>
          <div className="w-[397px] h-[131px] rounded-[40px] border-2 border-stone-200 "></div>
        </div>
        <div className="relative lg:mt-28">
          <div className="w-[358px] h-[215px] p-10 bg-[#F1E2E2] rounded-[30px] flex-col justify-start items-start gap-2.5 inline-flex absolute left-4 bottom-5">
            <div className="flex-col justify-start items-center gap-[30px] flex">
              <div
                style={{ fontFamily: "YourFont" }}
                className="w-[182px] text-center text-rose-600 text-[32px] font-normal font-['Dominant Youth']"
              >
                Step 01
              </div>
              <div className="w-[278px] text-center text-red-950 text-base font-normal font-['Poppins']">
                The first step in the ticket purchase process is to login or
                create an account, providing the necessary credentials.
              </div>
            </div>
          </div>
          <div className="w-[397px] h-[131px] rounded-[40px] border-2 border-stone-200 "></div>
        </div>
        <div className="relative">
          <div className="w-[358px] h-[215px] p-10 bg-[#F1E2E2] rounded-[30px] flex-col justify-start items-start gap-2.5 inline-flex absolute left-4 top-5">
            <div className="flex-col justify-start items-center gap-[30px] flex">
              <div
                style={{ fontFamily: "YourFont" }}
                className="w-[182px] text-center text-rose-600 text-[32px] font-normal font-['Dominant Youth']"
              >
                Step 01
              </div>
              <div className="w-[278px] text-center text-red-950 text-base font-normal font-['Poppins']">
                The first step in the ticket purchase process is to login or
                create an account, providing the necessary credentials.
              </div>
            </div>
          </div>
          <div className="w-[397px] h-[131px] rounded-[40px] border-2 border-stone-200 "></div>
        </div>
        </div>
        <div className="">

        </div>
       
      </div>
    </Container>
  );
};

export default TicketCarousel;
