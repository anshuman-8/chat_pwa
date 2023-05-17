import React from "react";

export default function MessageHolder() {
  return (
    <div className="flex flex-row space-x-2 mx-3 my-5">
      <div>
        <img
          src="https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o"
          className="max-w-[28px] rounded-2xl"
          alt=""
        />
      </div>
      <div className="max-w-xs p-2 shadow-lg rounded-b-xl rounded-e-2xl font-light text-gray-500 bg-white">
        Connect with fellow travelers, share the ride and save money Connect
        with fellow travelers, share the ride and save money
      </div>
    </div>
  );
}
