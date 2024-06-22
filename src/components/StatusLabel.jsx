// const StatusLabel = () => {
//   return (
//     <div
//       className={`flex text-[12px] font-semibold items-center px-3 py-1 w-24 gap-2 bg-green-100 text-[#1c533c] rounded-md`}
//     >
//       <div className="h-[6px] w-[6px] rounded-full bg-[#1c533c]"></div>
//       Success
//     </div>
//   );
// };

// export default StatusLabel;
import React from "react";

const StatusLabel = ({ status }) => {
  const isSuccess = status === "success";
  return (
    <div
      className={`flex text-[12px] font-semibold items-center px-3 py-1 w-24 gap-2 
        ${
          isSuccess
            ? "bg-green-100 text-[#1c533c]"
            : "bg-red-100 text-[#721c24]"
        } 
        rounded-md`}
    >
      <div
        className={`h-[6px] w-[6px] rounded-full 
          ${isSuccess ? "bg-[#1c533c]" : "bg-[#721c24]"}`}
      ></div>
      {isSuccess ? "Success" : "Failure"}
    </div>
  );
};

export default StatusLabel;
