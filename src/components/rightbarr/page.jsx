import React from "react";
import Expensive from "../mainbar/Expensive";
import DataTable from "../Trancation/page";

const RightBar = () => {
  return (
    <div>
      <div className="flex flex-col  relative left-28 -z-10  ">
        <div className="maincontent   grow-4 ">
          <div className="p-10">
            <h1>Expensive Analyzer</h1>
            <hr />
            <aside className="flex pt-5 gap-12">
              <Expensive data={"Total Income"} amount={"$1,000.54"} />
              <Expensive data={"Total  Expenses"} amount={"$1,000.54"} />
              <Expensive data={"Saving Amount"} amount={"$1,000.54"} />
            </aside>
          </div>
        </div>
        <div className="p-10">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
