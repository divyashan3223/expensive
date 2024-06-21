import React from "react";

const Catagories = ({ content, imgSrc }) => {
  return (
    <div className=" gap-2 h-[26px] flex items-center  w-[700px]">
      <img
        src={imgSrc}
        alt={content}
        className="h-[12px]  object-cover leading-3"
      />
      <h2 className="text-[12px] ">{content}</h2>
    </div>
  );
};

export default Catagories;
