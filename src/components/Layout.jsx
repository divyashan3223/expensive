import React from "react";
import Navbar from "./navbar/Navbar";
import LeftBar from "./leftbar/page";
import RightBar from "./rightbarr/page";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <LeftBar />
        </div>
        <div className="col-span-5">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
