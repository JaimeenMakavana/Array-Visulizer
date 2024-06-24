import React from "react";

const Button = ({
  name,
  handleClick,
  className,
  active,
}: {
  name: string;
  handleClick: any;
  className?: any;
  active?: any;
}) => {
  return (
    <button
      className={`border play2 text-sm px-3 py-1 border-black hover:scale-105 hover:shadow-[1px_1px_1px_black] transition-all duration-300 ease-in ${className} ${
        active && "bg-violet-300"
      }`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
