import React from "react";

const Button = ({ name, handleClick }: { name: string; handleClick: any }) => {
  return (
    <button
      className="border play2 text-sm px-3 border-black hover:scale-105 hover:shadow-[1px_1px_1px_black] transition-all duration-300 ease-in"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
