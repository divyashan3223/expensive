import React from "react";
import Catagories from "../sidebar/Catagories";
// import { restaurants } from "../../assets/eat.png";
const LeftBar = () => {
  return (
    <div className="fixed w-[165px] top-[70px] p-6 left-0 border-r-2 h-screen">
      <p className=" text-[14px] mb-4 font-semibold">Catagories</p>
      <Catagories content={"Restaurants"} />
      <Catagories content={"Medical Service"} />
      <Catagories content={"Financial Service"} />
      <Catagories content={"Automotives"} />
      <Catagories content={"Gas Station"} />
      <Catagories content={"Supermarket"} />
    </div>
  );
};

export default LeftBar;
