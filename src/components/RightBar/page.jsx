import Expensive from "../mainbar/Expensive";
import DataTable from "../Trancation/page";

const RightBar = () => {
  return (
    <div className="w-full p-8">
      <div className="flex flex-col  ">
        <div className=" pt-2">
          <div className="flex flex-row justify-between items-center ">
            <h1 className="text-[15px] font-medium">Expensive Analyzer</h1>
            <label htmlFor="cars" />
            <select
              name="cars"
              id="cars"
              className="ml-4 border rounded outline-none "
            >
              <option className="px-1 py-[0.5px]" value="">
                Last 6 Months
              </option>
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
            </select>
          </div>

          <hr className="mt-2 border-2" />
          <aside className="flex pt-5 gap-8">
            <Expensive data={"Total Income"} amount={"$28,000.54"} />
            <Expensive
              data={"Total  Expenses"}
              amount={"$28,000.54"}
              dis={"+10%"}
            />
            <Expensive
              data={"Saving Amount"}
              amount={"$28,000.54"}
              dis={"+10%"}
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
