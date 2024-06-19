import React from "react";

const Catagories = ({ content, img }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{content}</h2>
    </div>
  );
};

export default Catagories;
