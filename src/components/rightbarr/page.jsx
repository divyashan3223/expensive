import Expensive from "../mainbar/Expensive";
import DataTable from "../Trancation/page";

const RightBar = () => {
  return (
    <div className="w-full p-5">
      <div className="flex flex-col  ">
        <div className=" pt-2">
          <div className="flex border-b-2 pb-2  justify-between ">
            <h1 className="text-[13px] font-semibold ">Expensive Analyzer</h1>
            <select className="border outline-none text-xs font-semibold p-1">
              <option>Last 6 Months</option>
            </select>
          </div>

          <aside className="flex pt-5 gap-8">
            <Expensive data={"Total Income"} amount={"$12,000.54"} />
            <Expensive
              data={"Total  Expenses"}
              amount={"$11,000.54"}
              discount={"+10%"}
            />
            <Expensive
              data={"Saving Amount"}
              amount={"$1,000.54"}
              discount={"+10%"}
            />
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
