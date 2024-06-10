import React from "react";

const Button = ({ handleClick, name }: { handleClick: any; name: string }) => {
  return (
    <button
      className=" px-2 py-1 text-xs border cursor-pointer hover:bg-gray-100 hover:shadow-md hover:scale-105"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
