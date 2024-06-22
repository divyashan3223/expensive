import React from "react";

<<<<<<< Updated upstream
const Expensive = ({ data, amount, dis }) => {
=======
const Expensive = ({ data, amount, discount }) => {
>>>>>>> Stashed changes
  return (
    <div className="border px-3 py-2 w-52 rounded-md">
      <p className="text-[#898989] pb-2   font-semibold text-[14px] tracking-tight">
        {data}
      </p>
<<<<<<< Updated upstream
      <h1 className="text-[21px] font-semibold mb-1 ">
        {amount}
        {dis
          ? <span className="text-green-800 text-xs p-2  ">
              {dis}
            </span>
          : ""}
=======
      <h1 className="text-[21px] font-semibold mb-1 flex items-center gap-2  ">
        {amount}
        {discount ? (
          <span className="text-xs text-green-700 ">{discount}</span>
        ) : (
          ""
        )}
>>>>>>> Stashed changes
      </h1>
    </div>
  );
};

export default Expensive;
