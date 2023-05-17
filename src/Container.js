import React from "react";
import InputHolder from "./Components/InputHolder";
import { IoArrowBack } from "react-icons/io5";
import {TbEdit} from "react-icons/tb"

export default function Container({ children }) {
  return (
    <div className="relative overflow-y-scroll">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-5 m-5">
          <IoArrowBack size={22} />
          <h2 className="text-2xl font-semibold">Trip 2</h2>
        </div>
        <div className="mx-5">
            <TbEdit size={28}/>
        </div>
      </div>
      <div>
        <img
          src="https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o"
          className="max-w-[55px] rounded-full"
          alt=""
        />
      </div>
      <div className="">{children}</div>
      <div className="sticky bottom-0 w-full">
        <InputHolder />
      </div>
    </div>
  );
}
