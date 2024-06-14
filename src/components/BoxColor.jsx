import React from "react";

function BoxColor({ r, g, b }) {
  const value = r + g + b;
  console.log(value);
  return <div className="w-[100%] h-[50px] mt-2" style={{backgroundColor:`rgb(${r},${g},${b})`}}>

  </div>;
}

export default BoxColor;
