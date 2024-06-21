import React from "react";

const Expensive = ({ data, amount }) => {
  return (
    <div className="border px-3 py-2 w-56 rounded-md">
      <p className="text-gray-500 pb-2  font-xs font-semibold text-base tracking-tight">
        {data}
      </p>
      <h1 className="text-[21px] font-semibold mb-1">{amount}</h1>
    </div>
  );
};

export default Expensive;
