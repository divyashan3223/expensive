import Expensive from "../mainbar/Expensive";
import DataTable from "../Trancation/page";

const RightBar = () => {
  return (
    <div className="w-full p-5">
      <div className="flex flex-col  ">
        <div className=" pt-2">
          <h1 className="text-[13px] font-semibold border-b-2 pb-2">
            Expensive Analyzer
          </h1>

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
