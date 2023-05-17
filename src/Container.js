import React from "react";
import InputHolder from "./Components/InputHolder";
import Header from "./Components/Header";

export default function Container({ children }) {
  return (
    <div className="relative">
      <Header />
      <div className="z-0 overflow-y-scroll">{children}</div>
      {/* <InputHolder /> */}
    </div>
  );
}
