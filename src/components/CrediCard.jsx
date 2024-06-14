import React from "react";

function CrediCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div className="border-2 w-[50%] p-4 flex flex-col mt-4 rounded-md" style={{backgroundColor:`${bgColor}`, color:`${color}`}} >
      <h1 className="self-end font-bold" >{type}</h1>
      <h3 className="text-[10px]">{number}</h3>
      <h4 className="text-[8px]">
        Expires {expirationMonth}/{expirationYear}{" "}
        <span>{bank.toUpperCase()}</span>
      </h4>
      <h4 className="font-semibold">{owner}</h4>
    </div>
  );
}

export default CrediCard;
