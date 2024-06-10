import React from "react";

const Input = ({
  onChange,
  placeholder = "Type here",
  className,
}: {
  onChange: any;
  placeholder?: any;
  className?: string;
}) => {
  return (
    <input
      type="text"
      className={`focus:outline-none border border-black px-2 ${className}`}
      placeholder={placeholder}
      max={11}
      onChange={onChange}
    />
  );
};

export default Input;
