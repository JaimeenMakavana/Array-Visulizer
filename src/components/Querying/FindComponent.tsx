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
        Note: Find, FindIndex, FindLast and FindLastIndex work similar(last two
        iterates in reverse order)
      </p>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele.label} className="flex flex-col">
              <div
                className={`size-[60px] border text-center ${
                  ele.isFind ? "bg-black text-white" : ""
                }`}
              >
                {ele.label}
              </div>
              <div className="text-center text-xs relative">
                {index === 0 && (
                  <p className="absolute bottom-0 -left-8 text-xs -top-[1px]">
                    index
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FindComponent;
