import React from "react";

const Button = ({ color, text, toggleShow }) => {
  //   const handleClick = () => {
  //     console.log("Click with handleClick");
  //   };
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={toggleShow}
    >
      {text}
    </button>
  );
};

export default Button;
