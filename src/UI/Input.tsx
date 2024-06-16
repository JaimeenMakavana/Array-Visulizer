import React from "react";

const Input = ({ handleChange }: { handleChange: any }) => {
  return (
    <input
      type="text"
      className=" focus:outline-none border border-black max-w-[120px] px-2 py-1 text-sm"
      onChange={(e: any) => handleChange(e.target.value)}
    />
  );
};

export default Input;
