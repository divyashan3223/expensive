import React from "react";

const Expensive = ({ data, amount }) => {
  return (
    <div className="border px-3 py-2 w-60 rounded-md">
      <p className="text-gray-400 pb-2 font-medium text-base tracking-tight">
        {data}
      </p>
      <h1 className="text-2xl font-semibold mb-2">{amount}</h1>
    </div>
  );
};

export default Expensive;
