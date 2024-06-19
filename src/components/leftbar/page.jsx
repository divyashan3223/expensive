import React from "react";
import Catagories from "../sidebar/Catagories";
import { restaurants } from "../../assets/eat.png";

const LeftBar = () => {
  return (
    <div>
      <div className="sidecontent    top-14 p-6 fixed left-0">
        <h3 className="font-black text-2xl mb-4">Catagories</h3>
        <Catagories img={restaurants} content={"Restaurants"} />
        <Catagories content={"Medical Service"} />
        <Catagories content={"Financial Service"} />
        <Catagories content={"Automotives"} />
        <Catagories content={"Gas Station"} />
        <Catagories content={"Supermarket"} />
      </div>
    </div>
  );
};

export default LeftBar;
