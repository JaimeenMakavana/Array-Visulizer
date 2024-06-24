import Input from "@/UI/Input";
import React from "react";

const FindComponent = ({
  Arr,
  handleChange,
}: {
  Arr: any;
  handleChange: any;
}) => {
  return (
    <div>
      <h1 className="text-center font-semibold">Find Method</h1>
      <div className="flex justify-center my-5">
        <label htmlFor="">Greater than:</label>
        <Input handleChange={handleChange} />
      </div>
      <p className="text-xs text-center">
        <span className=" italic text-violet-500">
          This method will return first value which satisfy a condition.
        </span>{" "}
        <br />
        Note: Find, FindIndex, FindLast and FindLastIndex work similar(last two
        iterates in reverse order)
      </p>
      <div className="flex flex-wrap justify-center mt-5">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele.label} className="flex flex-col">
              <div
                className={`size-[80px] border text-center ${
                  ele.isFind ? "bg-black text-white" : ""
                }`}
              >
                {ele.label}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FindComponent;
