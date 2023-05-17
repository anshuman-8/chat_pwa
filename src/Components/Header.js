import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";

export default function Header() {
  return (
    <div className="border-b border-gray-300 shadow-sm z-20 sticky top-0 bg-[#FAF9F4] w-full">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-5 mx-5 my-3">
          <IoArrowBack size={22} />
          <h2 className="text-2xl font-semibold">Trip 2</h2>
        </div>
        <div className="mx-5">
          <TbEdit size={28} />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-5 mx-5 my-3">
          <img
            src="https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o"
            className="max-w-[55px] rounded-full"
            alt=""
          />
          <div className="flex flex-col text-lg text-[#606060]">
            <h3>
              From <span className="font-semibold text-xl text-black">IGI Airpoty</span>
            </h3>
            <h3>
              To <span className="font-semibold text-xl text-black">Sctos wenfjw</span>
            </h3>
          </div>
        </div>
        <div className="mx-5">
          <HiDotsVertical size={28} />
        </div>
      </div>
    </div>
  );
}
