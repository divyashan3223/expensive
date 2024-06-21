import React from "react";
import Expensive from "../mainbar/Expensive";
import DataTable from "../Trancation/page";

const RightBar = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col  ">
        <div className=" pt-8">
          <h1 className="text-[15px] font-medium">Expensive Analyzer</h1>
          <hr className="mt-2 border-2" />
          <aside className="flex pt-5 gap-8">
            <Expensive data={"Total Income"} amount={"$28,000.54"} />
            <Expensive data={"Total  Expenses"} amount={"$28,000.54"} />
            <Expensive data={"Saving Amount"} amount={"$28,000.54"} />
          </aside>
        </div>

        <div>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
