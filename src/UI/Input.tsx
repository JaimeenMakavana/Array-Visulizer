import React from "react";

const Input = ({
  handleChange,
  placeHolder,
}: {
  handleChange: any;
  placeHolder?: any;
}) => {
  return (
    <input
      type="text"
      placeholder={placeHolder}
      className=" focus:outline-none border border-black max-w-[140px] px-2 py-1 text-sm"
      onChange={(e: any) => handleChange(e.target.value)}
    />
  );
};

export default Input;
