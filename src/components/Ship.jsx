import React from "react";
import shipLogo from "../assets/logo.svg"; // Ensure this path is correct

const Ship = ({ inputLength, sailAway }) => {
  // Use a fixed maximum translation (in pixels) relative to the overlay.
  const maxTranslate = 330;
  // Calculate current translation based on input (scale factor 5)
  const translateX = Math.min(inputLength * 5, maxTranslate);

  // If sailAway is true, animate slowly so that the ship's right edge aligns with the overlay’s right edge.
  const style = sailAway
    ? {
        transform: `translateX(${maxTranslate}px)`,
        opacity: 0,
        transition: "transform 1.5s ease-out, opacity 1.5s ease-out",
      }
    : {
        transform: `translateX(${translateX}px)`,
        transition: "transform 0.3s ease-out",
      };

  // Position the ship relative to the overlay:
  // - start further left (5% from the left edge)
  // - position lower (10px from the bottom)
  return (
    <div
      className="absolute pointer-events-none w-full"
      style={{ bottom: "12px", left: "8%" }}
    >
      <img
        src={shipLogo}
        alt="Moving Ship"
        className="w-9 h-20"
        style={style}
      />
    </div>
  );
};

export default Ship;
