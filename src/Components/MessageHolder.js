import React from "react";
import { GoVerified } from "react-icons/go";

export default function MessageHolder({ chat }) {
  return (
    <div className="flex flex-row space-x-2 mx-3 my-5">
      <div className="relative h-fit">
        <img
          src={
            chat.sender.image
              ? chat.sender.image
              : "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o"
          }
          className="max-w-[28px] rounded-2xl"
          alt=""
        />
        {chat.sender.is_kyc_verified && (
          <GoVerified className="absolute bottom-0 right-0 w-3 h-3 fill-blue-600" />
        )}
      </div>
      <div className="max-w-[290px] p-2 shadow-lg rounded-b-xl rounded-e-2xl font-light text-gray-500 bg-white">
        {chat.message}
      </div>
    </div>
  );
}
