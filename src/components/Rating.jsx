import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
function Rating({ children }) {
  console.log(children);
  let newValue = Math.round(children);
  const stars = Array(5).fill(0);
  const colors = {
    orange: "#F2C265",
    grey: "a9a9a9",
  };
  return (
    <div className="flex">
      {stars.map((_, index) => {
        return (
          <>
            <FontAwesomeIcon
              icon={faStar}
              key={index}
              size={24}
              color={newValue > index ? colors.orange : colors.grey}
            />
          </>
        );
      })}
      <p>({children} Stars)</p>
    </div>
  );
}

export default Rating;
