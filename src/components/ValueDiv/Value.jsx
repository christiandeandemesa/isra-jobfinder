import React from "react";

import { DiJqueryLogo } from "react-icons/di";
import { AiFillHeart } from "react-icons/ai";
import { BsFillShieldFill } from "react-icons/bs";

function Value() {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that holds us true and accountable
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <DiJqueryLogo className="1-[70%] text-blueColor" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[25px] text-textColor opacity-[0.7] py-[1rem]">
            Things made simple are at the heart of everything we do.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <AiFillHeart className="1-[70%] text-red-500" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Kindness
            </span>
          </div>
          <p className="text-[25px] text-textColor opacity-[0.7] py-[1rem]">
            We believe in making things better for everyone, even if just by a
            little bit.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#fcfce0] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <BsFillShieldFill className="1-[70%] text-yellow-500" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Trust
            </span>
          </div>
          <p className="text-[25px] text-textColor opacity-[0.7] py-[1rem]">
            We work on the basis of creating trust which can be nurtured through
            authenticity and transparency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Value;
