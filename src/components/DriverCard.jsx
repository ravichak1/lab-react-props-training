import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
function DriverCard({ name, rating, img, car }) {
  const { model, licensePlate } = car;
  console.log(name);
  console.log(rating);
  console.log(img);
  console.log(car);
  console.log(model);
  console.log(licensePlate);
  const newRating = Math.round(rating);
  const stars = Array(5).fill(0);
  const colors = {
    white: "white",
    black: "black",
  };
  return (
    <div className="flex justify-center w-[100%] h-[100px] text-white ">
      <div className="bg-blue-500 w-[50%]  flex rounded-lg p-4">
        <div className="w-[50%] justify-items flex justify-end">
            <img src={img} alt="" className="rounded-full
             w-[40%] "/>
        </div>
        <div>
          <h2>{name}</h2>
          <div>
            {stars.map((_, index) => {
              return (
                <>
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    size={24}
                    color={newRating > index ? colors.white : colors.black}
                  />
                </>
              );
            })}
          </div>
          <h3 className="text-[12px]">
            {model}-{licensePlate}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
